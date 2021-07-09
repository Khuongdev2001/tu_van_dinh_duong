<?php if (!empty($cate_product) && !empty($product)) {
    if(!empty($sett)){
        $notes = json_decode($sett->notes);
    }
    ?>
    <script src="<?php echo base_url(); ?>skin/frontend/js/jquery.isotope.min.js?v=<?php echo time(); ?>"></script>
    <script src="<?php echo base_url(); ?>skin/frontend/js/isotope.pkgd.min.js?v=<?php echo time(); ?>"></script>
    <section class="sec-service" style="padding-top: 30px!important;">
        <div class="container">
            <?php if(!empty($cates)){
                if($cates->parentid != 0){
                ?>
                <div class="title-block text-center">
                    <?php if(!empty($notes[4])){ echo $notes[4] ;}?>
                </div>
            <?php } else{ ?>
                    <div class="title-block text-center">
                        <?php if(!empty($notes[5])){ echo $notes[5] ;}?>
                    </div>
               <?php  }
            } else{ ?>
                <div class="title-block text-center">
                    <?php if(!empty($notes[5])){ echo $notes[5] ;}?>
                </div>
            <?php } ?>

            <div class="content">
                <div class="button-group list-service-title text-center <?php if(!empty($cates) && $cates->parentid != 0){ echo 'd-none'; }?>">
                    <button class="label-control is-checked" data-filter="*">Tất cả</button>
                    <?php foreach ($cate_product as $cat) { ?>
                        <button class="label-control"
                                data-filter=".<?php echo $cat->alias; ?>"><?php echo $cat->title; ?></button>
                    <?php } ?>
                </div>
                <div class="grid">
                    <?php foreach ($product as $pro) { ?>
                        <div class="element-item col-lg-4 col-sm-6 <?php if (!empty($cat_obj) && !empty($cat_obj[$pro->category])) {
                                 echo $cat_obj[$pro->category]->alias;
                             } ?> ">
                            <a href="<?php echo base_url($pro->alias.'.html'); ?>">
                                <div class="wrap-img" data-mh="img-service">
                                    <img class="img-responsive" src="<?php echo $pro->image; ?>" alt="">
                                </div>
                                <p class="content-service" data-mh="content-service"><?php echo $pro->title; ?></p></a>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>
    <script>

        $(".eriitem, .eriitem img").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
        });

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.element-item'
        });
        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function () {
                var number = $(this).find('.number').text();
                return parseInt(number, 10) > 50;
            },
            // show if name ends with -ium
            ium: function () {
                var name = $(this).find('.name').text();
                return name.match(/ium$/);
            }
        };
        $(document).ready(function () {
            // bind filter button click
            $('.list-service-title').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $grid.isotope({filter: filterValue});
            });
            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        })

    </script>
<?php } ?>