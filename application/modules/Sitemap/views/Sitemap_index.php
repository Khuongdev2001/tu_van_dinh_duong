<?php echo '<'.'?xml version="1.0" encoding="UTF-8"?>'; ?>
<urlset
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    <url>
        <loc><?php echo base_url();?></loc>
        <priority>1.0</priority>
        <changefreq>daily</changefreq>
    </url>
    <?php if(!empty($cate)) {
        foreach ($cate as $cat) { ?>
            <url>
                <loc><?php echo base_url($cat->alias.'.html') ;?></loc>
                <priority>1.0</priority>
                <changefreq>daily</changefreq>
            </url>
        <?php }} ?>
    <?php  if(!empty($article)) {
        foreach ($article as $art) {?>
            <url>
                <loc><?php echo base_url($art->alias.'.html');?></loc>
                <priority>1.0</priority>
                <lastmod><?php echo date('Y-m-d\TH:i:sP', strtotime($art->date_create)) ;?></lastmod>
                <changefreq>daily</changefreq>
            </url>
        <?php } } ?>
</urlset>