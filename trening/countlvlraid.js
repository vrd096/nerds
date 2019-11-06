$_$wp(1);
function lvlCount(star, lvlMax, location) {
    $_$wf(1);
    let stars = ($_$w(1, 0), {
        2: 1110,
        3: 1279,
        4: 1460,
        5: 1625
    });
    let experience = ($_$w(1, 1), {
        9: 7800,
        11: 8584,
        12: 8800
    });
    let energyLocation = ($_$w(1, 2), 8);
    let result = ($_$w(1, 3), 0);
    let lvlCurrent = ($_$w(1, 4), stars[star]);
    for (let i = 0; $_$w(1, 5), i < lvlMax; i++) {
        $_$w(1, 6), result = result + lvlCurrent;
        let percent = ($_$w(1, 7), Math.round(lvlCurrent / 100 * 10.3));
        let lvlNext = ($_$w(1, 8), lvlCurrent + percent);
        $_$w(1, 9), lvlCurrent = lvlNext;
    }
    let step = ($_$w(1, 10), Math.round(result / experience[location]));
    let energyNeed = ($_$w(1, 11), step * energyLocation);
    $_$w(1, 12), $_$tracer.log(energyNeed, 'energyNeed', 1, 12);
}
$_$w(1, 13), lvlCount(3, 30, 12);
$_$wpe(1);