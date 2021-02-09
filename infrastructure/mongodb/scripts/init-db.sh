#/usr/bin/env bash

echo 'Creating user and db'

mongo ${MONGO_INITDB} \
	--host localhost \
	--port ${MONGO_PORT} \
	-u ${MONGO_INITDB_USERNAME} \
	-p ${MONGO_INITDB_PASSWORD} \
	--authernticationDatabase admin \
	--eval "db.createUser({user: '${DATABASE_USERNAME}', pwd: '${DATABASE_PASSWORD}', roles:[{role:'dbOwner', db: '${MONGO_INITDB_DATABASE}'}]});"

