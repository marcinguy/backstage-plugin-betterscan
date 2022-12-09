#!/bin/bash

echo "This will get your Bearer token from Betterscan Instance"

echo "What is the address of your instance? (i.e http://localhost:5000)"

read addr

echo What is the username?

read username

echo What is the password?

read pass

echo ${username}
echo ${pass}

tok=$(curl -s ${addr}'/api/v1/login' --data-raw "email=${username}&password=${pass}"| jq .access_token)

echo Token: ${tok}


