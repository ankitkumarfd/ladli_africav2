docker command

docker build -t webladli/ladliafrica:0.0.4 .

docker container run -d -p 3000:3000 webladli/ladliafrica:0.0.4

docker container stop

docker push webladli/ladliafrica:0.0.4
