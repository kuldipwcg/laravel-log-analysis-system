# Use the official PHP image as the base image
FROM webdevops/php:8.2

# Set working directory
WORKDIR /app

# Copy existing application directory contents
COPY . .

# Install system dependencies
RUN apt-get update && apt-get install -y \
libpng-dev \
libjpeg-dev \
libfreetype6-dev \
zip \
unzip \
curl

# Install PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg  \
&& docker-php-ext-install sockets gd pdo pdo_mysql pcntl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer
COPY php.ini /usr/local/etc/php/php.ini
COPY opcache.ini /usr/local/etc/php/conf.d/opcache.ini

# Install Octane dependencies
RUN composer install --no-interaction --prefer-dist --optimize-autoloader && ls -la /app/vendor
RUN chmod u+rwx -R /app
RUN php artisan octane:install --server=roadrunner
RUN ls -la /app/vendor
# Expose port 8000 and start Octane server
EXPOSE 8000
CMD ["php", "artisan", "octane:start", "--server=roadrunner", "--workers=2", "--host=0.0.0.0", "--port=8000"]
