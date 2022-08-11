<? include 'head.sub.php' ?>
<div class="SubPage">
    <div class="SubMain">
        <div class="container">
            <div class="sub_slogan">
                <?= $e_slogan ?>
            </div>
            <div class="sub_title">
                <?= $sub_title ?>
            </div>
        </div>

    </div>

    <div class="PageInfo">
        <div class="container">
            <ol>
                <li><a href="/project"><i class="xi-home"></i>Home</a></li>
                <li><a href="/project"><?= $sub_title ?></a></li>
            </ol>
        </div>
    </div>

    <style>
        .SubMain {
            background: url(./img/main0<?= $subnum % 2 + 1 ?>.jpg) no-repeat center center/cover
        }
    </style>
    <div class="SubContent">
        <aside>
            <div class="tit">
                <?= $sub_title ?>
            </div>
            <div class="Lnb">
                <? include 'nav.php' ?>
            </div>
            <? include 'customer.php' ?>
        </aside>
        <article>
            <div class="tit">
                <?= $sub_title ?>
            </div>