/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
    var baseUrl = $('body').attr('data-base');
    config.baseHref = baseUrl;
    config.allowedContent = true;
    config.extraAllowedContent = '*(*)';
    config.entities_latin = false;
    config.height = '500px';
    config.font_names = 'Arsenal;Roboto;utm_avoregular;utm_avobold;utm_avoitalic;utm_avobolditalic;Roboto Condensed;Arial;Times New Roman;Verdana';
    // config.extraPlugins = "N1ED,BootstrapEditor";

    // config.removePlugins = "iframe,image,magicline";
};
