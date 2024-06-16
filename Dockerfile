FROM codeceptjs/codeceptjs:3.6.3

COPY . /tests

ENTRYPOINT ["codeceptjs"]
