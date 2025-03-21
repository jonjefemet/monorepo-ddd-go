FROM golang:1.21-alpine


ARG MODULE=auth-api

WORKDIR /app

COPY go.mod ./
COPY go.sum ./
COPY internal ./internal
COPY cmd/${MODULE} ./cmd/${MODULE}

RUN go mod download

RUN go build -o main ./cmd/${MODULE}

CMD ["./main"]