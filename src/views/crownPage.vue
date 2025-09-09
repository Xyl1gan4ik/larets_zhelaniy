<template>
    <div class="main-container">
        <div class="image">
            <div class="flex-row-ab">
                <div class="frame">
                    <div class="union"></div>
                </div>
                <div class="frame-1">
                    <div class="frame-2">
                        <span class="sponsor">Стать спонсором</span>
                    </div>
                </div>
                <div class="frame-3">
                    <div class="vector"></div>
                </div>
            </div>
            <div class="frame-4">
                <span class="top-first">Будь первой в топе!</span><span class="invite-friends">Приглашай подруг и
                    занимай трон королевы</span>
            </div>
            <div class="frame-5"><span class="top-queen">Топ королев</span></div>
            <div class="frame-6">
                <div class="frame-7">
                    <div class="frame-8">
                        <div class="frame-9">
                            <div class="frame-a">
                                <div class="vector-b"></div>
                                <div class="frame-c"><span class="number-1">1</span></div>
                            </div>
                            <span class="username">@userame</span>
                        </div>
                    </div>
                    <div class="frame-d">
                        <div class="frame-e">
                            <div class="vector-f"></div>
                            <span class="number-1222">1222</span>
                        </div>
                        <div class="frame-10">
                            <div class="vector-11"></div>
                            <span class="span">5000</span>
                        </div>
                    </div>
                </div>
                <div class="frame-12">
                    <div class="frame-13">
                        <div class="frame-14">
                            <div class="frame-15">
                                <div class="vector-16"></div>
                                <div class="frame-17"><span class="span-18">2</span></div>
                            </div>
                            <span class="username-19">@userame</span>
                        </div>
                    </div>
                    <div class="frame-1a">
                        <div class="frame-1b">
                            <div class="vector-1c"></div>
                            <span class="span-1d">912</span>
                        </div>
                        <div class="div">
                            <div class="div-1e"></div>
                            <span class="span-1f">3000</span>
                        </div>
                    </div>
                </div>
                <div class="div-20">
                    <div class="div-21">
                        <div class="div-22">
                            <div class="div-23">
                                <div class="div-24"></div>
                                <div class="div-25"><span class="span-26">3</span></div>
                            </div>
                            <span class="span-27">@userame</span>
                        </div>
                    </div>
                    <div class="div-28">
                        <div class="div-29">
                            <div class="vector-2a"></div>
                            <span class="span-2b">901</span>
                        </div>
                        <div class="frame-2c">
                            <div class="vector-2d"></div>
                            <span class="span-2e">1000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="frame-2f">
                <div class="frame-30" @click="$router.push('/home')">
                    <div class="vector-31"></div>
                </div>
                <div class="frame-32" @click="$router.push('/keys')">
                    <div class="union-33" ></div>
                </div>
                <div class="frame-34">
                    <div class="vector-35"></div>
                </div>
            </div>
        </div>
        <div class="ellipse"></div>
    </div>
</template>

<script>
</script>

<style>
:root {
    --default-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Ubuntu, "Helvetica Neue", Helvetica, Arial, "PingFang SC",
        "Hiragino Sans GB", "Microsoft Yahei UI", "Microsoft Yahei",
        "Source Han Sans CN", sans-serif;
}

.main-container {
    overflow: hidden;
}

.main-container,
.main-container * {
    box-sizing: border-box;
}

input,
select,
textarea,
button {
    outline: 0;
}

.main-container {
    position: relative;
    width: 360px;
    height: 644px;
    margin: 0 auto;
    background: #0b0b0d;
    overflow: hidden;
}

.image {
    position: relative;
    width: 359.003px;
    height: 644px;
    margin: 0 0 0 1px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/G9Bu2xbOUA.png) no-repeat center;
    background-size: 100% 100%;
    z-index: 1;
    overflow: visible auto;
}

.flex-row-ab {
    position: relative;
    width: 328px;
    height: 40px;
    margin: 32px 0 0 15.003px;
    z-index: 20;
}

.frame {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0;
    padding: 6px 14px 6px 14px;
    background: #ffffff;
    z-index: 20;
    border-radius: 50px;
}

.union {
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 20px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/st86HRei5c.png) no-repeat center;
    background-size: cover;
    z-index: 21;
}

.frame-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: absolute;
    width: 145px;
    height: 40px;
    top: 0;
    left: 46px;
    padding: 6px 14px 6px 14px;
    background: #ffffff;
    z-index: 9;
    border-radius: 50px;
}

.frame-2 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 117px;
    z-index: 10;
}

.sponsor {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 117px;
    height: 19px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.11px;
    z-index: 11;
}

.frame-3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 288px;
    padding: 6px 14px 6px 14px;
    background: #ff9fa1;
    z-index: 18;
    border-radius: 50px;
}

.vector {
    flex-shrink: 0;
    position: relative;
    width: 22px;
    height: 22px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/O4xPPrNOGp.png) no-repeat center;
    background-size: cover;
    z-index: 19;
}

.frame-4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 10px;
    position: relative;
    width: 319px;
    margin: 30px 0 0 15.003px;
    padding: 12px 12px 12px 12px;
    background: #ffffff;
    z-index: 12;
    border-radius: 10px;
}

.top-first {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 286px;
    height: 34px;
    color: #ff9fa1;
    font-family: Sunday, var(--default-font-family);
    font-size: 28.200000762939453px;
    font-weight: 400;
    line-height: 33.84px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.23px;
    z-index: 13;
}

.invite-friends {
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    height: 15px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
    white-space: nowrap;
    letter-spacing: -0.11px;
    z-index: 14;
}

.frame-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;
    gap: 5px;
    position: relative;
    width: 253px;
    margin: 40px 0 0 53.003px;
    z-index: 16;
}

.top-queen {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 25px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 18px;
    font-weight: 500;
    line-height: 24.588px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.14px;
    z-index: 17;
}

.frame-6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 8px;
    position: relative;
    width: 328px;
    margin: 16px 0 0 15.003px;
    z-index: 22;
}

.frame-7 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    position: relative;
    min-width: 0;
    z-index: 23;
}

.frame-8 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 128px;
    z-index: 24;
}

.frame-9 {
    display: flex;
    align-items: center;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 6px;
    position: relative;
    min-width: 0;
    z-index: 25;
}

.frame-a {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 42px;
    height: 42px;
    padding: 6px 11px 6px 11px;
    background: #ffffff;
    z-index: 26;
    border-radius: 8px;
}

.vector-b {
    flex-shrink: 0;
    position: relative;
    width: 19px;
    height: 30px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/hfz5GsyLs2.png) no-repeat center;
    background-size: cover;
    z-index: 27;
}

.frame-c {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 28px;
    left: 30px;
    padding: 0 7px 0 7px;
    background: #ffffff;
    border: 1px solid #ffeced;
    z-index: 28;
    border-radius: 10px;
}

.number-1 {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 14px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 10px;
    font-weight: 500;
    line-height: 13.66px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.08px;
    z-index: 29;
}

.username {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 80px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 30;
}

.frame-d {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 132px;
    z-index: 31;
}

.frame-e {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 4px;
    position: relative;
    width: 49px;
    z-index: 32;
}

.vector-f {
    flex-shrink: 0;
    position: relative;
    width: 11px;
    height: 14px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/2AEe7e2Ax5.png) no-repeat center;
    background-size: cover;
    z-index: 33;
}

.number-1222 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 34px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 34;
}

.frame-10 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 5px;
    position: relative;
    width: 75px;
    height: 30px;
    padding: 3px 8px 3px 8px;
    background: #ffffff;
    z-index: 35;
    border-radius: 8px;
}

.vector-11 {
    flex-shrink: 0;
    position: relative;
    width: 15px;
    height: 12px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/yJeuuEvXhB.png) no-repeat center;
    background-size: cover;
    z-index: 36;
}

.span {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 39px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 37;
}

.frame-12 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    position: relative;
    min-width: 0;
    z-index: 38;
}

.frame-13 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 128px;
    z-index: 39;
}

.frame-14 {
    display: flex;
    align-items: center;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 6px;
    position: relative;
    min-width: 0;
    z-index: 40;
}

.frame-15 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 42px;
    height: 42px;
    padding: 6px 11px 6px 11px;
    background: #ffffff;
    z-index: 41;
    border-radius: 8px;
}

.vector-16 {
    flex-shrink: 0;
    position: relative;
    width: 19px;
    height: 30px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/Xk2v6e0ZOT.png) no-repeat center;
    background-size: cover;
    z-index: 42;
}

.frame-17 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 28px;
    left: 30px;
    padding: 0 7px 0 7px;
    background: #ffffff;
    border: 1px solid #ffeced;
    z-index: 43;
    border-radius: 10px;
}

.span-18 {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 14px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 10px;
    font-weight: 500;
    line-height: 13.66px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.08px;
    z-index: 44;
}

.username-19 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 80px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 45;
}

.frame-1a {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 124px;
    z-index: 46;
}

.frame-1b {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 4px;
    position: relative;
    width: 41px;
    z-index: 47;
}

.vector-1c {
    flex-shrink: 0;
    position: relative;
    width: 11px;
    height: 14px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/iAQzGPzRBK.png) no-repeat center;
    background-size: cover;
    z-index: 48;
}

.span-1d {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 26px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 49;
}

.div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 5px;
    position: relative;
    width: 75px;
    height: 30px;
    padding: 3px 8px 3px 8px;
    background: #ffffff;
    z-index: 50;
    border-radius: 8px;
}

.div-1e {
    flex-shrink: 0;
    position: relative;
    width: 15px;
    height: 12px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/Fiazp2OgvT.png) no-repeat center;
    background-size: cover;
    z-index: 51;
}

.span-1f {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 39px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 52;
}

.div-20 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    position: relative;
    min-width: 0;
    z-index: 53;
}

.div-21 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 128px;
    z-index: 54;
}

.div-22 {
    display: flex;
    align-items: center;
    align-self: stretch;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 6px;
    position: relative;
    min-width: 0;
    z-index: 55;
}

.div-23 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 42px;
    height: 42px;
    padding: 6px 11px 6px 11px;
    background: #ffffff;
    z-index: 56;
    border-radius: 8px;
}

.div-24 {
    flex-shrink: 0;
    position: relative;
    width: 19px;
    height: 30px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/enzLpF6XAE.png) no-repeat center;
    background-size: cover;
    z-index: 57;
}

.div-25 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: absolute;
    width: 20px;
    height: 20px;
    top: 28px;
    left: 30px;
    padding: 0 7px 0 7px;
    background: #ffffff;
    border: 1px solid #ffeced;
    z-index: 58;
    border-radius: 10px;
}

.span-26 {
    align-self: stretch;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    min-width: 0;
    height: 14px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 10px;
    font-weight: 500;
    line-height: 13.66px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.08px;
    z-index: 59;
}

.span-27 {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 80px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 60;
}

.div-28 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 8px;
    position: relative;
    width: 123px;
    z-index: 61;
}

.div-29 {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 4px;
    position: relative;
    width: 42px;
    z-index: 62;
}

.vector-2a {
    flex-shrink: 0;
    position: relative;
    width: 11px;
    height: 14px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/g1Qk0QWUaG.png) no-repeat center;
    background-size: cover;
    z-index: 63;
}

.span-2b {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 27px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 64;
}

.frame-2c {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 5px;
    position: relative;
    width: 73px;
    height: 30px;
    padding: 3px 8px 3px 8px;
    background: #ffffff;
    z-index: 65;
    border-radius: 8px;
}

.vector-2d {
    flex-shrink: 0;
    position: relative;
    width: 15px;
    height: 12px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/tP7SJjKB6w.png) no-repeat center;
    background-size: cover;
    z-index: 66;
}

.span-2e {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-shrink: 0;
    flex-basis: auto;
    position: relative;
    width: 37px;
    height: 22px;
    color: #ff9fa1;
    font-family: Manrope, var(--default-font-family);
    font-size: 16px;
    font-weight: 500;
    line-height: 21.856px;
    text-align: center;
    white-space: nowrap;
    letter-spacing: -0.13px;
    z-index: 67;
}

.frame-2f {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 48px;
    position: relative;
    width: 258px;
    margin: 157px 0 0 50.003px;
    z-index: 2;
}

.frame-30 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 54px;
    height: 54px;
    padding: 12px 12px 12px 12px;
    background: #ffffff;
    z-index: 3;
    border-radius: 74px;
}

.vector-31 {
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 24px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/1Fefa87bZO.png) no-repeat center;
    background-size: cover;
    z-index: 4;
}

.frame-32 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 54px;
    height: 54px;
    padding: 12px 12px 12px 12px;
    background: #ffffff;
    z-index: 5;
    border-radius: 74px;
}

.union-33 {
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 24px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/jq1mZr4Y0D.png) no-repeat center;
    background-size: cover;
    z-index: 6;
}

.frame-34 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    flex-shrink: 0;
    gap: 10px;
    position: relative;
    width: 54px;
    height: 54px;
    padding: 12px 12px 12px 12px;
    background: #ff9fa1;
    z-index: 7;
    border-radius: 74px;
}

.vector-35 {
    flex-shrink: 0;
    position: relative;
    width: 24px;
    height: 24px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/u3hSzJ2wyO.png) no-repeat center;
    background-size: cover;
    z-index: 8;
}

.ellipse {
    position: absolute;
    width: 403px;
    height: 56px;
    top: 209px;
    left: -21px;
    background: url(https://codia-f2c.s3.us-west-1.amazonaws.com/image/2025-09-07/BWyHa7X2D9.png) no-repeat center;
    background-size: cover;
    filter: blur(1.6px);
    z-index: 15;
}
</style>