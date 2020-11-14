<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'pyrotechlibdd' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'VVKv7LEt//VCrj7HVYlEs9fLHwHviDR7s7I+PCK5CB12C3OljKh+s4XkMtamQ+5KdvzXxDQ4p2lXGa6RJGA8WA==');
define('SECURE_AUTH_KEY',  'WouSHH6ZU7AoYYzIUQ3Nv/dO6FPvw/EOphvH3vJElZAZsdaiXssPfFPBdkPDjJJioyJ2AdrrMBcW4OGqp9cHGw==');
define('LOGGED_IN_KEY',    'FuiAPsvA+MwB3h9xZXB3cygO4ZjGBn5galCaEruw5KICdl9GVvy+LisuhZbkAvG92fgRc92IUVu0NybqE8mGJg==');
define('NONCE_KEY',        'QqhyugMFwCDd4dqM5mJ7NRS12rnD8zQ+j4xWf5VPwyGvidxGsSeWYoZFJg/LoUcmqQa6AW2FebapAAV+dW6J/w==');
define('AUTH_SALT',        '9XXZE2GzzKjizbU5R0hjjVEwHrv4p0pkCjFQQwkfsp2vWukJ2/HitUM9LKtyEO/m/n5qoVjr4igwYhSzArRxDA==');
define('SECURE_AUTH_SALT', '4MVQT3Cpo3cFWF4SYNtWyKVHpqJFrb/nk+EYRfNQ3pcGZzDuLric6W8eeApAyEdZs6g4bajs9x2i+GbL0agwbQ==');
define('LOGGED_IN_SALT',   'kUJTYzSvhr8Wfo1JIKmima1CwQ9a1olYYjWK8bDAp7GAdR61ZIn20V0QReHgVkHFN0iRpwbyReaLvA64TOiStg==');
define('NONCE_SALT',       'x1mpsY++N1orEpkEhDYMpOQ3fgCwpXuYWVQzaIDNfJTgfYth05KrXKdhjOXcXsB2ZwaAjZhm0M4GfWoYVkKVqA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
