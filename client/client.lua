local QBCore = exports['qb-core']:GetCoreObject()

RegisterNUICallback("npwd:qb-mail:getMail", function(_, cb)
	TriggerServerEvent("npwd:qb-mail:getMail")
	RegisterNetEvent("npwd:qb-mail:sendMail", function(players)
		cb({ status = "ok", data = players })
	end)
end)

RegisterNUICallback("npwd:qb-mail:updateRead", function(data, cb)
	TriggerServerEvent("npwd:qb-mail:updateRead", data)
	cb({})
end)

RegisterNUICallback("npwd:qb-mail:deleteMail", function(data, cb)
	TriggerServerEvent("npwd:qb-mail:deleteMail", data)
	RegisterNetEvent("npwd:qb-mail:mailDeleted", function(result)
		if result then
			cb({ status = "ok" })
		else
			cb({ status = "error" })
		end
	end)
end)

RegisterNUICallback("npwd:qb-mail:updateButton", function(data, cb)
	TriggerEvent(data.button.buttonEvent, data.button.buttonData)
	TriggerServerEvent("npwd:qb-mail:updateButton", data.mailid)
	RegisterNetEvent("npwd:qb-mail:buttonUpdated", function(result)
		if result then
			cb({ status = "ok" })
		else
			cb({ status = "error" })
		end
	end)
end)

RegisterNetEvent('npwd:qb-mail:newMail', function(data)
	QBCore.Functions.Notify('New mail, check your phone') --replace with notifications on phone
	exports.npwd:sendUIMessage('npwd:qb-mail:newMail', {data})
end)


