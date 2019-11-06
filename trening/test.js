$_$wp(1);
function count(lvlMax) {
    $_$wf(1);
    let lvlStart = ($_$w(1, 0), 1625);
    let result = ($_$w(1, 1), 0);
    let lvlCurrent = ($_$w(1, 2), lvlStart);
    for (let i = 0; $_$w(1, 3), i < lvlMax; i++) {
        $_$w(1, 4), $_$tracer.log(lvlCurrent, 'lvlCurrent', 1, 4);
        $_$w(1, 5), result = result + lvlCurrent;
        let percent = ($_$w(1, 6), Math.round(lvlCurrent / 100 * 10.3));
        let lvlNext = ($_$w(1, 7), lvlCurrent + percent);
        $_$w(1, 8), lvlCurrent = lvlNext;
    }
    $_$w(1, 9), $_$tracer.log(result, 'result', 1, 9);
}
$_$w(1, 10), count(50);
$_$wpe(1);