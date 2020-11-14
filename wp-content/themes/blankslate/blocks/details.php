<?php 
    $tutoGifDC = get_field('tuto_dc');
    $tutoGifAC = get_field('tuto_ac');
?>

<div class="Details">
    <?php foreach ($fields as $idx => $field) : ?>
        <div class="Details-container swiper-container <?= $field['inventeur'] ?>" id="<?= $field['id'] ?>Details" data-title="<?= $field['titre'] ?>" data-subtitle="<?= $field['sous_titre'] ?>">
            <div class="Details-instructions">
                <img src="<?= get_template_directory_uri() ?>/img/scroll.gif" alt="">
                <span>Glissez <strong>vers le bas</strong> pour lire la suite </span>
            </div>
            <div class="Details-list swiper-wrapper">
                <?php if ($field['details']) : ?>

                    <?php foreach ($field['details'] as $idx => $detail) : ?>
                        <div class="Details-listing swiper-slide ">
                            <?php if ($detail['template'] == 'intro') : ?>
                                <div class="Details-content <?= $detail['template'] ?>">
                                    <h2 class="Details-title"><?= $detail['template'] ?></h2>
                                    <div class="Details-text"><?= $detail['texte'] ?></div>
                                    <img class="Details-img" src="<?= $detail['image']['url']  ?>">
                                </div>
                            <?php elseif ($detail['template'] == 'inventor') : ?>
                                <div class="Details-content <?= $detail['template'] ?>">
                                    <h2 class="Details-title"><?= $detail['template'] ?></h2>
                                    <div class="Details-text"><?= $detail['texte'] ?> </div>
                                </div>
                            <?php elseif ($detail['template'] == 'image') : ?>
                                <div class="Details-content <?= $detail['template'] ?>">
                                    <h2 class="Details-title"><?= $detail['template'] ?></h2>
                                    <img class="Details-img" src="<?= $detail['image']['url'] ?>">
                                </div>
                            <?php elseif ($detail['template'] == 'title_text') : ?>
                                <div class="Details-content <?= $detail['template'] ?>">
                                    <h2 class="Details-title"><?= $detail['titre'] ?></h2>
                                    <div class="Details-text"><?= $detail['texte'] ?> </div>
                                </div>
                            <?php elseif ($detail['template'] == 'citation') : ?>
                              
                                <div class="Details-content <?= $detail['template'] ?>">
                                    <svg width="160" height="147" viewBox="0 0 160 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g filter="url(#filter0_d)">
                                            <path d="M74.8706 80.5096C74.8706 82.5 74.224 84.101 72.9309 85.3125C71.6378 86.4375 69.9999 87 68.0172 87C65.6896 87 63.75 86.2212 62.1983 84.6635C60.7328 83.1058 60 80.8125 60 77.7837C60 74.9279 60.3879 72.5048 61.1638 70.5144C62.0258 68.4375 63.0172 66.7067 64.1379 65.3221C65.3448 63.851 66.5517 62.6827 67.7586 61.8173C69.0516 60.9519 70.1723 60.3462 71.1206 60L74.3533 64.5433C72.4568 65.4952 70.9051 66.7933 69.6982 68.4375C68.5775 69.9952 68.0172 71.9856 68.0172 74.4087C68.362 74.3221 68.8361 74.2788 69.4396 74.2788C71.1637 74.2788 72.4999 74.8846 73.4482 76.0962C74.3964 77.3077 74.8706 78.7788 74.8706 80.5096Z" fill="white" />
                                            <path d="M100 80.5096C100 82.5 99.3535 84.101 98.0604 85.3125C96.7673 86.4375 95.1294 87 93.1466 87C90.819 87 88.8794 86.2212 87.3277 84.6635C85.8622 83.1058 85.1294 80.8125 85.1294 77.7837C85.1294 74.9279 85.5174 72.5048 86.2932 70.5144C87.1553 68.4375 88.1467 66.7067 89.2673 65.3221C90.4742 63.851 91.6811 62.6827 92.888 61.8173C94.1811 60.9519 95.3018 60.3462 96.25 60L99.4828 64.5433C97.5862 65.4952 96.0345 66.7933 94.8276 68.4375C93.7069 69.9952 93.1466 71.9856 93.1466 74.4087C93.4914 74.3221 93.9656 74.2788 94.569 74.2788C96.2931 74.2788 97.6293 74.8846 98.5776 76.0962C99.5259 77.3077 100 78.7788 100 80.5096Z" fill="white" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_d" x="0" y="0" width="160" height="147" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="30" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                            </filter>
                                        </defs>
                                    </svg>

                                    <h2 class="Details-citation"><?= $detail['citation'] ?></h2>
                                    <p class="Details-autor"><?= $detail['titre'] ?></p>
                                </div>
                            <?php elseif ($detail['template'] == 'continu') : ?>
                                <!-- <div id="tutoDC" data-url="<?= $tutoGifDC['url'] ?>">
                                    <img id="tutoDCimg" src="" alt="">
                                </div> -->
                                <?php include get_template_directory() . '/blocks/continu.php'; ?>
                            <?php elseif ($detail['template'] == 'alternatif') : ?>
                                <!-- <div id="tutoAC" data-url="<?= $tutoGifAC['url'] ?>>
                                    <img id="tutoACimg" src="" alt="">
                                </div> -->
                                <?php include get_template_directory() . '/blocks/alternatif.php'; ?>
                            <?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    <?php endforeach; ?>
</div>