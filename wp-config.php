<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'sentaar' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'mami93' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'n2C!m;/YTYR#kt@%6|(LLOy|(69B8f#dl:x%4q$xyUa^kXfc9St!:W~b_b`B&0h%' );
define( 'SECURE_AUTH_KEY',  'b;Cqx}[S@b(]Xgi(ph~d_k^L7`A&_tei`R?Em6pIOj(u8D.2p0- %8VrsL>DNJ*a' );
define( 'LOGGED_IN_KEY',    'YzfbeKlmTZ2L_z:.qG1m.KF5eLVC8X4|v=5}m@2o,2g`z(dPb:1C%E#N},z6w* /' );
define( 'NONCE_KEY',        'r7*0ZnSGc8V,0:32)q<@eo]+dG:%qy;Z,q&Eq.~uq2X1b`j/S1Cq%-g6e9auL0*;' );
define( 'AUTH_SALT',        '+~K.]v T?$a7+~ngac+*JhO z&;$5gWIww/<{Rstq l|+l=Zn[J2_]n5#;sF$S+3' );
define( 'SECURE_AUTH_SALT', '8J[q$.MvLnw3P5=koVdWFUh>xiuL9kiYQ`!:[efd:`p2GsM3HR!jH*`r&V,XvpSG' );
define( 'LOGGED_IN_SALT',   'rAU=G@r~40-[+B@w7r.w0&,u%Y_/5JS]HoJ12~}SYoa%5iDe@u~wq:8;|7F4);a6' );
define( 'NONCE_SALT',       '[}1OH^feCb5j2>beUa/J(Bs>>T]bMz :d+!ZOK69O72tzQ,sIlrN;4IY8<6X]w|?' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
define('FS_METHOD', 'direct');

