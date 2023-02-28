FROM postgres:13.1

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgrespw
ENV POSTGRES_DB=my_database

COPY init.sql /docker-entrypoint-initdb.d/
