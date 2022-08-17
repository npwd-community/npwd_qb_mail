import React, { useEffect } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useMailsValue, useSetSelectedMail, useSetModalVisible } from '../atoms/mail-atoms';
import makeStyles from '@mui/styles/makeStyles';
import { Theme } from '@mui/material/styles';
import { Mail } from '../types/mail';
import { useMailAPI } from '../hooks/useMailAPI';
import { useNuiEvent } from 'react-fivem-hooks';
import { useMailActions } from '../hooks/useMailActions';

const useStyles = makeStyles((theme: Theme) => ({
  noMail: {
    color: theme.palette.text.secondary,
  },
}));

const MailList = ({isDarkMode}: {isDarkMode: boolean}) => {
  const mails = useMailsValue();
  const classes = useStyles();
  const setMail = useSetSelectedMail();
  const setModalVisible = useSetModalVisible();
  const { updateRead } = useMailAPI();
  const { newMail } = useMailActions();

  const { data } = useNuiEvent<Mail[]>({ event: "npwd:qb-mail:newMail" });

  useEffect(() => {
    if (data) {
      newMail(data[0]);
    }
  } , [data])


  const handleMailModal = (mail: Mail) => {
    if (!mail.read) {
      updateRead(mail.mailid)
    }
    setMail(mail);
    setModalVisible(true);
  };

  const mailDate = (dateData: number) => {
    const date = new Date(dateData);
    return (
      ('0' + date.getDate()).slice(-2) +
      '/' +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      '/' +
      date.getFullYear()
    );
  };

  if (mails && mails.length) {
    return (
        <List disablePadding>
          {mails.map((mail) => (
            <ListItem key={mail.mailid} button divider onClick={() => handleMailModal(mail)}>
              {mail.read === 0 ? (
                <Box
                  sx={{
                    bgcolor: '#4260f5',
                    borderRadius: '10px',
                    minWidth: '8px',
                    minHeight: '8px',
                    marginRight: '10px',
                  }}
                />
              ) : (
                <Box
                  sx={{
                    borderRadius: '10px',
                    minWidth: '8px',
                    minHeight: '8px',
                    marginRight: '10px',
                  }}
                />
              )}
  
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                  }}
                >
                  <Typography sx={{ fontWeight: '500', color: isDarkMode ? '#fff' : '#000' }}>{mail.sender}</Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ color: '#dedede', fontSize: '13px' }}>
                      {mailDate(mail.date)}
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{color: isDarkMode ? '#fff' : '#000'}}>{mail.subject}</Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      );
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="100%"
      className={classes.noMail}
    >
      <Typography color="inherit" variant="h6" style={{ fontWeight: 300 }}>
        You have no mail
      </Typography>
    </Box>
  );
};

export default MailList;
