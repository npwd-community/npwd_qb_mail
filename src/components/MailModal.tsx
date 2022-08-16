import React from 'react';
import { useModalVisible, useSelectedMail } from '../atoms/mail-atoms';
import { Button, Slide, Paper, Typography, Container, Box, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useStyles from '../styles/modal.styles';
import { dateString } from '../utils/misc';
import { useMailAPI } from '../hooks/useMailApi';

const MailModal = () => {
  const classes = useStyles();
  const [modalVisible, setModalVisible] = useModalVisible();
  const [selectedMail, setselectedMail] = useSelectedMail();
  const { deleteMail, updateMailButton } = useMailAPI();

  if (selectedMail === null) return null;

  const handleDeleteMail = () => {
    deleteMail(selectedMail.mailid)
      .then(() => {
        setModalVisible(false);
      })
      .catch(console.error);
  };

  const handleSubmitButton = () => {
    updateMailButton({ mailid: selectedMail.mailid, button: selectedMail.button })
      .then(() => {
        setModalVisible(false);
      })
      .catch(console.error);
  };

  const _handleClose = () => {
    setModalVisible(false);
  };

  const handleClearContent = () => {
    setselectedMail(null);
  };

  return (
    <Slide
      direction="left"
      in={modalVisible}
      mountOnEnter
      unmountOnExit
      onExited={handleClearContent}
    >
      <Paper className={classes.modalRoot} square>
        <Container sx={{ height: '100%' }}>
          <Box sx={{ height: '100%' }}>
            <Box pt={2} pb={1}>
              <Button
                color="secondary"
                size="large"
                startIcon={<ArrowBackIcon fontSize="large" />}
                onClick={_handleClose}
              >
                INBOX
              </Button>
            </Box>
            <Box pl={1} pb={'12px'}>
              <Typography sx={{ fontSize: '20px', fontWeight: 500 }}>
                {selectedMail.sender}
              </Typography>
              <Typography sx={{ fontSize: '19px' }}>{selectedMail.subject}</Typography>
              {selectedMail.date && (
                <Typography sx={{ fontSize: '15px', color: '#dedede' }}>
                  {dateString(selectedMail.date)}
                </Typography>
              )}
            </Box>
            <Divider />
            {selectedMail.message && (
              <Box
                pl={1}
                pt={'12px'}
                sx={{ fontSize: '18px', height: '70%' }}
                dangerouslySetInnerHTML={{ __html: selectedMail.message }}
              ></Box>
            )}
            <Box
              display="inline"
              p={1}
              sx={{ display: 'flex', gap: '15px', justifyContent: 'center' }}
            >
              {selectedMail.button !== undefined && selectedMail.button !== null && (
                <Button color="success" variant="contained" onClick={handleSubmitButton}>
                  ACCEPT
                </Button>
              )}
              <Button color="error" variant="contained" onClick={handleDeleteMail}>
                DELETE
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Slide>
  );
};

export default MailModal;
