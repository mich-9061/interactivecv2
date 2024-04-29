FROM eclipse-temurin:21.0.2_13-jre
VOLUME /tmp
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY target/interactivecv2-0.0.1-SNAPSHOT.jar interactivecv2.jar
EXPOSE 8080
#ENTRYPOINT exec java $JAVA_OPTS -jar interactivecv2.jar
# For Spring-Boot project, use the entrypoint below to reduce Tomcat startup time.
ENTRYPOINT exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar interactivecv2.jar