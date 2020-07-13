# Spring-boot-data-H2-embedded

In this app, I used H2 in-memory database 

**Application.properties**

```
spring.datasource.url=jdbc:h2:mem:TEST;DB_CLOSE_DELAY=-1;
spring.datasource.username=sa
spring.datasource.password=
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.platform=h2
spring.jpa.hibernate.ddl-auto=none
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.H2Dialect
```

This single interface 

```
public interface EmployeeService extends JpaRepository<Employee, Long>{
}
```

**To Run without Docker**

```
> mvn clean install
> java -jar target/employee-backend.jar
```

**To Run with Docker**
```
> mvn clean install
> docker build -t employee-backend
> docker run -d -p 8080:8080 employee-backend

> docker stop <image-name>
```
**Swagger URL**
>http://localhost:8080/swagger-ui.html

**Postman import file to test API**
>sg-emplyoee-portal.postman_collection.json
