<?php
/*
    Template Name: Arbre experiences
    */
get_header();

$fields = get_fields();

?>

<main class="Tree">
    <span id="_cursor">
        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id=“_cLoader“ cx="32.5" cy="32.5" r="32" stroke="transparent" />
        </svg>
    </span>
   
    <div class="container">
        <?php include get_template_directory() . '/blocks/tree.php'; ?>
    </div>

    <?php include get_template_directory() . '/blocks/details.php'; ?>
    
</main>

<div id="debug">
    <button id="button1">Button 1</button>
    <button id="button2">Button 2</button>
    <button id="button3">Button 3</button>
    <button id="button4">Unlock Edison</button>
    <button id="button5">Unlock Westinghouse</button>
    <button id="button6">Unlock Tesla</button>
    <button id="button12">Unlock End</button>
    <button id="button7">DCgenerator start</button>
    <button id="button8">DCgenerator end</button>
    <button id="button9">ACgenerator start</button>
    <button id="button10">ACgenerator end</button>
    <button id="button11">Motor start</button>
</div>

<?php get_footer(); ?>