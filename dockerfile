# Use a really small linux disribution image
FROM nginx:1.10.1-alpine
COPY src/index.html /usr/share/nginx/html

# Expose port 80 (TCP port)
# EXPOSE 80

# nginx startup command
# CMD ["nginx", "-g", "daemon off;"]