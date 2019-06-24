<?php
add_action( 'wp_enqueue_scripts', 'shk_corporate_theme_css',999);
function shk_corporate_theme_css() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'bootstrap-style', get_template_directory_uri() . '/css/bootstrap.css' );
	wp_enqueue_style( 'theme-menu', get_template_directory_uri() . '/css/theme-menu.css' );
	wp_enqueue_style( 'default-css', get_stylesheet_directory_uri()."/css/default.css" );
	wp_enqueue_style( 'element-style', get_template_directory_uri() . '/css/element.css' );
	wp_enqueue_style( 'media-responsive' ,get_template_directory_uri() . '/css/media-responsive.css');
	wp_dequeue_style('appointment-default',get_template_directory_uri() .'/css/default.css');
}

require( get_stylesheet_directory() . '/header-widget.php' );
require( get_stylesheet_directory() . '/customizer/customizer-pro.php' );


add_action( 'customize_register','shk_corporate_remove_custom', 1000 );
function shk_corporate_remove_custom($wp_customize) {
  $wp_customize->remove_control('upgrade_pro');
}


function shk_corporate_theme_setup(){
	load_theme_textdomain('shk-corporate', get_stylesheet_directory() . '/languages' );
	require( get_stylesheet_directory() . '/functions/customizer/customizer-copyright.php' );
}
add_action( 'after_setup_theme', 'shk_corporate_theme_setup');	

 /*
 * Let WordPress manage the document title.
 */
	function shk_corporate_setup() {
   add_theme_support( 'title-tag' );
}
add_action( 'after_setup_theme', 'shk_corporate_setup' );

add_action( 'widgets_init', 'shk_corporate_widgets_init');
function shk_corporate_widgets_init() {

	register_sidebar( array(
		'name' => __('Sidebar widget area', 'shk-corporate' ),
		'id' => 'sidebar-primary',
		'description' => __( 'Sidebar widget area', 'shk-corporate' ),
		'before_widget' => '<div class="sidebar-widget">',
		'after_widget' => '</div>',
		'before_title' => '<div class="sidebar-widget-title"><h3>',
		'after_title' => '</h3></div>',
	) );

//Header sidebar
	register_sidebar( array(
		'name' => __( 'Top header left area', 'shk-corporate' ),
		'id' => 'home-header-sidebar_left',
		'description' => __('Top header left area', 'shk-corporate' ),
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	) );
	
	register_sidebar( array(
		'name' => __( 'Top header center area','shk-corporate' ),
		'id' => 'home-header-sidebar_center',
		'description' => __( 'Top header center area', 'shk-corporate' ),
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	) );
	
	register_sidebar( array(
		'name' => __( 'Top header right area', 'shk-corporate' ),
		'id' => 'home-header-sidebar_right',
		'description' => __( 'Top header right area', 'shk-corporate' ),
		'before_widget' => '',
		'after_widget' => '',
		'before_title' => '<h3>',
		'after_title' => '</h3>',
	) );
}

function shk_corporate_default_data(){
	return array(
	// general settings
	'footer_copyright_text' => '<p>'.__( '<a href="https://wordpress.org">Proudly powered by WordPress</a> | Theme: <a href="https://webriti.com" rel="designer">Shk Corporate</a> by Webriti', 'shk-corporate' ).'</p>',
	'footer_menu_bar_enabled' => '',
	'footer_social_media_enabled' => '',
	'footer_social_media_facebook_link' => '#',
	'footer_facebook_media_enabled' => 1,
	'footer_social_media_twitter_link' => '#',
	'footer_twitter_media_enabled'=>1,
	'footer_social_media_linkedin_link' => '#',
	'footer_linkedin_media_enabled'=>1,
	'footer_social_media_googleplus_link' => '#',
	'footer_googleplus_media_enabled' => 1,
	'footer_social_media_skype_link' => '#',
	'footer_skype_media_enabled' => 1,
	
	);
}                     
?>