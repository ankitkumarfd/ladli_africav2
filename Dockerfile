FROM node:20

WORKDIR /ladli_africa

# Copy package files first for better Docker caching
COPY package*.json ./

RUN npm install

# Now copy the rest of the project files
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
