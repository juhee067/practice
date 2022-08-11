<? include 'assets.php' ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?= $title ?></title>
    <link rel="stylesheet" href="./css/common.css">
    <link rel="stylesheet" href="./css/slick.css">
    <link rel="stylesheet" href="./css/main.css?ver=1.2">

</head>

<body>
    <div class="Wrap">
        <header class="Header">
            <div class="top">
                <div class="container">
                    <?= $c_slogan ?>
                </div>
            </div>
            <div class="bottom">
                <div class="container">
                    <h1>
                        <a href="/project">
                            <img src="./img/logo01.png" alt="<?= $title ?>">
                        </a>
                    </h1>
                    <nav class="Gnb">
                        <? include 'nav.php' ?>
                    </nav>
                </div>
            </div>
        </header>