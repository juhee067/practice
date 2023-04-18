<footer class="Footer">
    <div class="container">
        <div class="logo">
            <img src="./img/logo01.png" alt="">
        </div>
        <address>
            <ul>
                <li> 주소 : <?= $c_address ?></li>
                <li> 대표 : <?= $c_ceo ?></li>
                <li>사업자등록번호: <?= $c_num ?></li>
                <li>전화: <a href="tel:<?= $tel ?>"><?= $tel ?></a></li>
                <li>이메일 : <a href="mailto:<?= $email ?>"> <?= $email ?></li></a>

            </ul>
            <div class="copyright">
                &copy; <?= $company ?>all rights reserved.
            </div>
        </address>
    </div>

</footer>
</div>
<script src="./js/jquery-1.12.4.min.js"></script>
<script src="./js/slick.min.js"></script>
<script src="./js/main.js"></script>
<script>
    var pagenum = <?= $subnum ?>;
    $('.Lnb li').eq(pagenum - 1).addClass('on')
</script>
</body>

</html>