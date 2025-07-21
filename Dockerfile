FROM node:20-alpine AS base

# 3. Production image, copy all the files and run next
FROM base AS prod
WORKDIR /app

RUN apk add --no-cache libc6-compat
RUN apk add busybox-extras
RUN apk add vim

COPY . .
RUN rm -rf ./.next
RUN rm -rf ./node_modules
RUN npm ci
RUN npm run build


EXPOSE 3000

ENTRYPOINT ["npm", "run"]

# 3. Production image, copy all the files and run next
FROM base AS dev
WORKDIR /app

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "run"]