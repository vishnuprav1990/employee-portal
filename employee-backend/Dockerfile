FROM openjdk:8-jre-slim
WORKDIR /home
COPY /target/employee-backend.jar employee-backend.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "employee-backend.jar"]