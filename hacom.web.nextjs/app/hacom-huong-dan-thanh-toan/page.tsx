import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Hướng Dẫn Thanh Toán",
  description: "HACOM - Hướng Dẫn Thanh Toán",
};

const page = () => {
  const aaa = `
  <!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Hướng dẫn thanh toán</title>
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Expires" content="-1">
    <meta name="keywords" content="">
    <meta name="description" content="HACOM - Hướng Dẫn Thanh Toán">
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <script
        type='text/javascript'>window.ladi_viewport = function (b) { var a = document; b = b ? b : 'innerWidth'; var c = window[b]; var d = c < 768; if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) { window.ladi_is_desktop = !d; } var e = 960; var f = 420; var g = ''; if (!d) { g = "width=" + e + ",user-scalable=no,initial-scale=1.0"; } else { var h = 1; var i = f; if (i != c) { h = c / i; } g = "width=" + i + ",user-scalable=no,initial-scale=" + h + ",minimum-scale=" + h + ",maximum-scale=" + h; } var j = a.getElementById("viewport"); if (!j) { j = a.createElement("meta"); j.id = "viewport"; j.name = "viewport"; a.head.appendChild(j); } j.setAttribute("content", g); }; window.ladi_viewport(); window.ladi_fbq_data = []; window.ladi_fbq = function () { window.ladi_fbq_data.push(arguments); }; window.ladi_ttq_data = []; window.ladi_ttq = function () { window.ladi_ttq_data.push(arguments); };</script>
    <link rel="canonical" href="http://preview.ladipage.me/649be2be70d01d001202faa4" />
    <meta property="og:url" content="http://preview.ladipage.me/649be2be70d01d001202faa4" />
    <meta property="og:title" content="Hướng dẫn thanh toán" />
    <meta property="og:type" content="website" />
    <meta property="og:image"
        content="https://static.ladipage.net/5d3c13acdc09063fd1918045/header-20230118071915-fyslv.png">
    <meta property="og:description" content="HACOM - Hướng Dẫn Thanh Toán" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="shortcut icon"
        href="https://static.ladipage.net/5d3c13acdc09063fd1918045/favicon-hacom-20220905021812-20230302033359-dom62.png" />
    <link rel="dns-prefetch">
    <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
    <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin>
    <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin>
    <link rel="preconnect" href="https://api.ldpform.com/" crossorigin>
    <link rel="preconnect" href="https://a.ladipage.com/" crossorigin>
    <link rel="preconnect" href="https://api.sales.ldpform.net/" crossorigin>
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" as="style"
        onload="this.onload = null; this.rel = 'stylesheet';">
    <link rel="preload" href="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1702029891767" as="script">
    <style id="style_ladi" type="text/css">
        a,
        abbr,
        acronym,
        address,
        applet,
        article,
        aside,
        audio,
        b,
        big,
        blockquote,
        body,
        button,
        canvas,
        caption,
        center,
        cite,
        code,
        dd,
        del,
        details,
        dfn,
        div,
        dl,
        dt,
        em,
        embed,
        fieldset,
        figcaption,
        figure,
        footer,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        header,
        hgroup,
        html,
        i,
        iframe,
        img,
        input,
        ins,
        kbd,
        label,
        legend,
        li,
        mark,
        menu,
        nav,
        object,
        ol,
        output,
        p,
        pre,
        q,
        ruby,
        s,
        samp,
        section,
        select,
        small,
        span,
        strike,
        strong,
        sub,
        summary,
        sup,
        table,
        tbody,
        td,
        textarea,
        tfoot,
        th,
        thead,
        time,
        tr,
        tt,
        u,
        ul,
        var,
        video {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block
        }

        body {
            line-height: 1
        }

        a {
            text-decoration: none
        }

        ol,
        ul {
            list-style: none
        }

        blockquote,
        q {
            quotes: none
        }

        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
            content: '';
            content: none
        }

        table {
            border-collapse: collapse;
            border-spacing: 0
        }

        .ladi-loading {
            z-index: 900000000000;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, .1)
        }

        .ladi-loading .loading {
            width: 80px;
            height: 80px;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            overflow: hidden;
            position: absolute
        }

        .ladi-loading .loading div {
            position: absolute;
            width: 6px;
            height: 6px;
            background: #fff;
            border-radius: 50%;
            animation: ladi-loading 1.2s linear infinite
        }

        .ladi-loading .loading div:nth-child(1) {
            animation-delay: 0s;
            top: 37px;
            left: 66px
        }

        .ladi-loading .loading div:nth-child(2) {
            animation-delay: -.1s;
            top: 22px;
            left: 62px
        }

        .ladi-loading .loading div:nth-child(3) {
            animation-delay: -.2s;
            top: 11px;
            left: 52px
        }

        .ladi-loading .loading div:nth-child(4) {
            animation-delay: -.3s;
            top: 7px;
            left: 37px
        }

        .ladi-loading .loading div:nth-child(5) {
            animation-delay: -.4s;
            top: 11px;
            left: 22px
        }

        .ladi-loading .loading div:nth-child(6) {
            animation-delay: -.5s;
            top: 22px;
            left: 11px
        }

        .ladi-loading .loading div:nth-child(7) {
            animation-delay: -.6s;
            top: 37px;
            left: 7px
        }

        .ladi-loading .loading div:nth-child(8) {
            animation-delay: -.7s;
            top: 52px;
            left: 11px
        }

        .ladi-loading .loading div:nth-child(9) {
            animation-delay: -.8s;
            top: 62px;
            left: 22px
        }

        .ladi-loading .loading div:nth-child(10) {
            animation-delay: -.9s;
            top: 66px;
            left: 37px
        }

        .ladi-loading .loading div:nth-child(11) {
            animation-delay: -1s;
            top: 62px;
            left: 52px
        }

        .ladi-loading .loading div:nth-child(12) {
            animation-delay: -1.1s;
            top: 52px;
            left: 62px
        }

        @keyframes ladi-loading {

            0%,
            100%,
            20%,
            80% {
                transform: scale(1)
            }

            50% {
                transform: scale(1.5)
            }
        }

        .ladipage-message {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 10000000000;
            background: rgba(0, 0, 0, .3)
        }

        .ladipage-message .ladipage-message-box {
            width: 400px;
            max-width: calc(100% - 50px);
            height: 160px;
            border: 1px solid rgba(0, 0, 0, .3);
            background-color: #fff;
            position: fixed;
            top: calc(50% - 155px);
            left: 0;
            right: 0;
            margin: auto;
            border-radius: 10px
        }

        .ladipage-message .ladipage-message-box span {
            display: block;
            background-color: rgba(6, 21, 40, .05);
            color: #000;
            padding: 12px 15px;
            font-weight: 600;
            font-size: 16px;
            line-height: 16px;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px
        }

        .ladipage-message .ladipage-message-box .ladipage-message-text {
            display: -webkit-box;
            font-size: 14px;
            padding: 0 20px;
            margin-top: 10px;
            line-height: 18px;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis
        }

        .ladipage-message .ladipage-message-box .ladipage-message-close {
            display: block;
            position: absolute;
            right: 15px;
            bottom: 10px;
            margin: 0 auto;
            padding: 10px 0;
            border: none;
            width: 80px;
            text-transform: uppercase;
            text-align: center;
            color: #000;
            background-color: #e6e6e6;
            border-radius: 5px;
            text-decoration: none;
            font-size: 14px;
            line-height: 14px;
            font-weight: 600;
            cursor: pointer
        }

        .lightbox-screen {
            display: none;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            z-index: 9000000080;
            background: rgba(0, 0, 0, .5)
        }

        .lightbox-screen .lightbox-close {
            position: absolute;
            z-index: 9000000090;
            cursor: pointer
        }

        .lightbox-screen .lightbox-hidden {
            display: none
        }

        .lightbox-screen .lightbox-close {
            width: 16px;
            height: 16px;
            margin: 10px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E")
        }

        body {
            font-size: 12px;
            -ms-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -o-text-size-adjust: none;
            -webkit-text-size-adjust: none;
            background-color: #fff;
        }

        .overflow-hidden {
            overflow: hidden;
        }

        .ladi-transition {
            transition: all 150ms linear 0s;
        }

        .z-index-1 {
            z-index: 1;
        }

        .opacity-0 {
            opacity: 0;
        }

        .height-0 {
            height: 0 !important;
        }

        .pointer-events-none {
            pointer-events: none;
        }

        .transition-parent-collapse-height {
            transition: height 150ms linear 0s;
        }

        .transition-parent-collapse-top {
            transition: top 150ms linear 0s;
        }

        .transition-readmore {
            transition: height 350ms linear 0s;
        }

        .transition-collapse {
            transition: height 150ms linear 0s;
        }

        body.grab {
            cursor: grab;
        }

        .ladi-wraper {
            width: 100%;
            min-height: 100%;
            overflow: hidden;
        }

        .ladi-container {
            position: relative;
            margin: 0 auto;
            height: 100%;
        }

        .ladi-overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;
        }

        .ladi-element {
            position: absolute;
        }

        @media (hover: hover) {
            .ladi-check-hover {
                opacity: 0;
            }
        }

        .ladi-section {
            margin: 0 auto;
            position: relative;
        }

        .ladi-section[data-tab-id] {
            display: none;
        }

        .ladi-section.selected[data-tab-id] {
            display: block;
        }

        .ladi-section .ladi-section-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            overflow: hidden;
        }

        .ladi-box {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .ladi-button {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .ladi-button:active {
            transform: translateY(2px);
            transition: transform 0.2s linear;
        }

        .ladi-button .ladi-button-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
            transition: inherit;
        }

        .ladi-button>.ladi-button-headline,
        .ladi-button>.ladi-button-shape {
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            display: table;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }

        .ladi-button>.ladi-button-shape .ladi-shape {
            margin: auto;
            top: 0;
            bottom: 0;
        }

        .ladi-button>.ladi-button-headline .ladi-headline {
            display: table-cell;
            vertical-align: middle;
        }

        .ladi-group {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .ladi-shape {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .ladi-cart-number {
            position: absolute;
            top: -2px;
            right: -7px;
            background: #f36e36;
            text-align: center;
            width: 18px;
            height: 18px;
            line-height: 18px;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            border-radius: 100%;
        }

        .ladi-image {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }

        .ladi-image .ladi-image-background {
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
            background-attachment: scroll;
            background-origin: content-box;
            position: absolute;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }

        .ladi-headline {
            width: 100%;
            display: inline-block;
            word-break: break-word;
            background-size: cover;
            background-position: center center;
        }

        .ladi-headline a {
            text-decoration: underline;
        }

        a[data-action] {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            cursor: pointer
        }

        a:visited {
            color: inherit
        }

        a:link {
            color: inherit
        }

        [data-opacity="0"] {
            opacity: 0
        }

        [data-hidden="true"] {
            display: none
        }

        [data-action="true"] {
            cursor: pointer
        }

        .ladi-hidden {
            display: none
        }

        .ladi-animation-hidden {
            visibility: hidden !important;
            opacity: 0 !important
        }

        .element-click-selected {
            cursor: pointer
        }

        .is-2nd-click {
            cursor: pointer
        }

        .ladi-button-shape.is-2nd-click,
        .ladi-accordion-shape.is-2nd-click {
            z-index: 1
        }

        .backdrop-popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 90000060
        }

        .backdrop-dropbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 90000040
        }

        .ladi-lazyload {
            background-image: none !important;
        }

        .ladi-list-paragraph ul li.ladi-lazyload:before {
            background-image: none !important;
        }

        @media (min-width: 768px) {}

        @media (max-width: 767px) {
            .ladi-element.ladi-auto-scroll {
                overflow-x: auto;
                overflow-y: hidden;
                width: 100% !important;
                left: 0 !important;
                -webkit-overflow-scrolling: touch;
            }

            [data-hint]:not([data-timeout-id-copied]):before,
            [data-hint]:not([data-timeout-id-copied]):after {
                display: none !important;
            }

            .ladi-section.ladi-auto-scroll {
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;
            }
        }
    </style>
    <style type="text/css" id="style_animation">
        @media (min-width: 768px) {

            #IMAGE32,
            #HEADLINE35,
            #HEADLINE44,
            #HEADLINE120,
            #HEADLINE126,
            #HEADLINE132,
            #HEADLINE137,
            #HEADLINE391,
            #HEADLINE465,
            #HEADLINE474,
            #HEADLINE482,
            #HEADLINE487,
            #HEADLINE489,
            #HEADLINE493,
            #HEADLINE510,
            #HEADLINE514,
            #HEADLINE517,
            #HEADLINE521,
            #HEADLINE526,
            #HEADLINE530,
            #HEADLINE557,
            #HEADLINE561,
            #GROUP563,
            #HEADLINE568,
            #HEADLINE573,
            #GROUP569,
            #HEADLINE578,
            #GROUP590 {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        }

        @media (max-width: 767px) {

            #IMAGE32,
            #HEADLINE35,
            #HEADLINE44,
            #HEADLINE120,
            #HEADLINE126,
            #HEADLINE132,
            #HEADLINE137,
            #HEADLINE391,
            #HEADLINE465,
            #HEADLINE474,
            #HEADLINE482,
            #HEADLINE487,
            #HEADLINE489,
            #HEADLINE493,
            #HEADLINE510,
            #HEADLINE514,
            #HEADLINE517,
            #HEADLINE521,
            #HEADLINE526,
            #HEADLINE530,
            #HEADLINE557,
            #HEADLINE561,
            #GROUP563,
            #HEADLINE568,
            #HEADLINE573,
            #GROUP569,
            #HEADLINE578,
            #GROUP590 {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        }
    </style>
    <style id="style_page" type="text/css">
        body {
            direction: ltr;
        }

        @media (min-width: 768px) {
            .ladi-section .ladi-container {
                width: 960px;
            }
        }

        @media (max-width: 767px) {
            .ladi-section .ladi-container {
                width: 420px;
            }
        }

        @font-face {
            font-family: "VVRNIEFbJvbGQudHRm";
            src: url("https://w.ladicdn.com/5d3c13acdc09063fd1918045/utm-avobold-20230113032040-7gm8f.ttf") format("truetype");
        }

        body {
            font-family: "Open Sans", sans-serif
        }
    </style>
    <style id="style_element" type="text/css">
        #IMAGE29>.ladi-image>.ladi-image-background,
        #IMAGE30>.ladi-image>.ladi-image-background,
        #IMAGE31>.ladi-image>.ladi-image-background,
        #IMAGE32>.ladi-image>.ladi-image-background,
        #IMAGE692>.ladi-image>.ladi-image-background,
        #BOX41,
        #IMAGE42,
        #IMAGE42>.ladi-image>.ladi-image-background,
        #BOX48,
        #IMAGE118,
        #IMAGE118>.ladi-image>.ladi-image-background,
        #BOX115,
        #IMAGE124,
        #IMAGE124>.ladi-image>.ladi-image-background,
        #BOX116,
        #IMAGE130,
        #IMAGE130>.ladi-image>.ladi-image-background,
        #IMAGE388>.ladi-image>.ladi-image-background,
        #BOX389,
        #IMAGE342>.ladi-image>.ladi-image-background,
        #BOX346,
        #IMAGE306>.ladi-image>.ladi-image-background,
        #BOX310,
        #IMAGE333>.ladi-image>.ladi-image-background,
        #BOX337,
        #IMAGE360>.ladi-image>.ladi-image-background,
        #BOX364,
        #IMAGE351>.ladi-image>.ladi-image-background,
        #BOX355,
        #IMAGE324>.ladi-image>.ladi-image-background,
        #BOX328,
        #IMAGE297>.ladi-image>.ladi-image-background,
        #BOX301,
        #IMAGE270>.ladi-image>.ladi-image-background,
        #BOX274,
        #IMAGE216>.ladi-image>.ladi-image-background,
        #BOX220,
        #IMAGE159>.ladi-image>.ladi-image-background,
        #BOX142,
        #IMAGE189>.ladi-image>.ladi-image-background,
        #BOX193,
        #IMAGE252>.ladi-image>.ladi-image-background,
        #BOX256,
        #IMAGE279>.ladi-image>.ladi-image-background,
        #BOX283,
        #IMAGE207>.ladi-image>.ladi-image-background,
        #BOX211,
        #IMAGE261>.ladi-image>.ladi-image-background,
        #BOX265,
        #IMAGE315>.ladi-image>.ladi-image-background,
        #BOX319,
        #BOX447,
        #IMAGE449>.ladi-image>.ladi-image-background,
        #IMAGE451>.ladi-image>.ladi-image-background,
        #IMAGE452>.ladi-image>.ladi-image-background,
        #IMAGE453>.ladi-image>.ladi-image-background,
        #IMAGE455>.ladi-image>.ladi-image-background,
        #BOX461,
        #GROUP674,
        #BOX393,
        #IMAGE694>.ladi-image>.ladi-image-background,
        #GROUP677,
        #BOX412,
        #IMAGE695>.ladi-image>.ladi-image-background,
        #GROUP678,
        #BOX420,
        #IMAGE696>.ladi-image>.ladi-image-background,
        #GROUP679,
        #BOX423,
        #IMAGE698>.ladi-image>.ladi-image-background,
        #GROUP676,
        #BOX416,
        #IMAGE699>.ladi-image>.ladi-image-background,
        #IMAGE475>.ladi-image>.ladi-image-background,
        #BOX476,
        #IMAGE481>.ladi-image>.ladi-image-background,
        #BOX479,
        #IMAGE483>.ladi-image>.ladi-image-background,
        #BOX478,
        #IMAGE488>.ladi-image>.ladi-image-background,
        #BOX518,
        #IMAGE520>.ladi-image>.ladi-image-background,
        #BOX524,
        #IMAGE525>.ladi-image>.ladi-image-background,
        #BOX508,
        #IMAGE509>.ladi-image>.ladi-image-background,
        #BOX512,
        #IMAGE513>.ladi-image>.ladi-image-background,
        #BOX515,
        #IMAGE516>.ladi-image>.ladi-image-background,
        #BOX579,
        #BOX586,
        #BOX540,
        #IMAGE554>.ladi-image>.ladi-image-background,
        #BOX558,
        #IMAGE559>.ladi-image>.ladi-image-background,
        #BOX565,
        #IMAGE566>.ladi-image>.ladi-image-background,
        #BOX570,
        #IMAGE571>.ladi-image>.ladi-image-background,
        #BOX575,
        #IMAGE576>.ladi-image>.ladi-image-background {
            top: 0px;
            left: 0px;
        }

        #IMAGE29:hover>.ladi-image,
        #IMAGE30:hover>.ladi-image,
        #IMAGE31:hover>.ladi-image,
        #IMAGE32:hover>.ladi-image,
        #HEADLINE35>.ladi-headline:hover,
        #HEADLINE36>.ladi-headline:hover,
        #IMAGE692:hover>.ladi-image,
        #BOX41>.ladi-box:hover,
        #IMAGE42:hover>.ladi-image,
        #HEADLINE43>.ladi-headline:hover,
        #HEADLINE44>.ladi-headline:hover,
        #BUTTON112>.ladi-button:hover,
        #BUTTON_TEXT112>.ladi-headline:hover,
        #BOX48>.ladi-box:hover,
        #IMAGE118:hover>.ladi-image,
        #HEADLINE119>.ladi-headline:hover,
        #HEADLINE120>.ladi-headline:hover,
        #BUTTON121>.ladi-button:hover,
        #BUTTON_TEXT121>.ladi-headline:hover,
        #BOX115>.ladi-box:hover,
        #IMAGE124:hover>.ladi-image,
        #HEADLINE125>.ladi-headline:hover,
        #HEADLINE126>.ladi-headline:hover,
        #BUTTON127>.ladi-button:hover,
        #BUTTON_TEXT127>.ladi-headline:hover,
        #BOX116>.ladi-box:hover,
        #IMAGE130:hover>.ladi-image,
        #HEADLINE131>.ladi-headline:hover,
        #HEADLINE132>.ladi-headline:hover,
        #BUTTON133>.ladi-button:hover,
        #BUTTON_TEXT133>.ladi-headline:hover,
        #HEADLINE137>.ladi-headline:hover,
        #HEADLINE138>.ladi-headline:hover,
        #IMAGE388:hover>.ladi-image,
        #HEADLINE386>.ladi-headline:hover,
        #BOX389>.ladi-box:hover,
        #IMAGE342:hover>.ladi-image,
        #BUTTON343>.ladi-button:hover,
        #BUTTON_TEXT343>.ladi-headline:hover,
        #HEADLINE345>.ladi-headline:hover,
        #BOX346>.ladi-box:hover,
        #BOX347>.ladi-box:hover,
        #HEADLINE348>.ladi-headline:hover,
        #HEADLINE349>.ladi-headline:hover,
        #IMAGE306:hover>.ladi-image,
        #BUTTON307>.ladi-button:hover,
        #BUTTON_TEXT307>.ladi-headline:hover,
        #HEADLINE309>.ladi-headline:hover,
        #BOX310>.ladi-box:hover,
        #BOX311>.ladi-box:hover,
        #HEADLINE312>.ladi-headline:hover,
        #HEADLINE313>.ladi-headline:hover,
        #IMAGE333:hover>.ladi-image,
        #BUTTON334>.ladi-button:hover,
        #BUTTON_TEXT334>.ladi-headline:hover,
        #HEADLINE336>.ladi-headline:hover,
        #BOX337>.ladi-box:hover,
        #BOX338>.ladi-box:hover,
        #HEADLINE339>.ladi-headline:hover,
        #HEADLINE340>.ladi-headline:hover,
        #IMAGE360:hover>.ladi-image,
        #BUTTON361>.ladi-button:hover,
        #BUTTON_TEXT361>.ladi-headline:hover,
        #HEADLINE363>.ladi-headline:hover,
        #BOX364>.ladi-box:hover,
        #BOX365>.ladi-box:hover,
        #HEADLINE366>.ladi-headline:hover,
        #HEADLINE367>.ladi-headline:hover,
        #IMAGE351:hover>.ladi-image,
        #BUTTON352>.ladi-button:hover,
        #BUTTON_TEXT352>.ladi-headline:hover,
        #HEADLINE354>.ladi-headline:hover,
        #BOX355>.ladi-box:hover,
        #BOX356>.ladi-box:hover,
        #HEADLINE357>.ladi-headline:hover,
        #HEADLINE358>.ladi-headline:hover,
        #IMAGE324:hover>.ladi-image,
        #BUTTON325>.ladi-button:hover,
        #BUTTON_TEXT325>.ladi-headline:hover,
        #HEADLINE327>.ladi-headline:hover,
        #BOX328>.ladi-box:hover,
        #BOX329>.ladi-box:hover,
        #HEADLINE330>.ladi-headline:hover,
        #HEADLINE331>.ladi-headline:hover,
        #IMAGE297:hover>.ladi-image,
        #BUTTON298>.ladi-button:hover,
        #BUTTON_TEXT298>.ladi-headline:hover,
        #HEADLINE300>.ladi-headline:hover,
        #BOX301>.ladi-box:hover,
        #BOX302>.ladi-box:hover,
        #HEADLINE303>.ladi-headline:hover,
        #HEADLINE304>.ladi-headline:hover,
        #IMAGE270:hover>.ladi-image,
        #BUTTON271>.ladi-button:hover,
        #BUTTON_TEXT271>.ladi-headline:hover,
        #HEADLINE273>.ladi-headline:hover,
        #BOX274>.ladi-box:hover,
        #BOX275>.ladi-box:hover,
        #HEADLINE276>.ladi-headline:hover,
        #HEADLINE277>.ladi-headline:hover,
        #IMAGE216:hover>.ladi-image,
        #BUTTON217>.ladi-button:hover,
        #BUTTON_TEXT217>.ladi-headline:hover,
        #HEADLINE219>.ladi-headline:hover,
        #BOX220>.ladi-box:hover,
        #BOX221>.ladi-box:hover,
        #HEADLINE222>.ladi-headline:hover,
        #HEADLINE223>.ladi-headline:hover,
        #IMAGE159:hover>.ladi-image,
        #BUTTON160>.ladi-button:hover,
        #BUTTON_TEXT160>.ladi-headline:hover,
        #HEADLINE163>.ladi-headline:hover,
        #BOX142>.ladi-box:hover,
        #BOX143>.ladi-box:hover,
        #HEADLINE144>.ladi-headline:hover,
        #HEADLINE146>.ladi-headline:hover,
        #IMAGE189:hover>.ladi-image,
        #BUTTON190>.ladi-button:hover,
        #BUTTON_TEXT190>.ladi-headline:hover,
        #HEADLINE192>.ladi-headline:hover,
        #BOX193>.ladi-box:hover,
        #BOX194>.ladi-box:hover,
        #HEADLINE195>.ladi-headline:hover,
        #HEADLINE196>.ladi-headline:hover,
        #IMAGE252:hover>.ladi-image,
        #BUTTON253>.ladi-button:hover,
        #BUTTON_TEXT253>.ladi-headline:hover,
        #HEADLINE255>.ladi-headline:hover,
        #BOX256>.ladi-box:hover,
        #BOX257>.ladi-box:hover,
        #HEADLINE258>.ladi-headline:hover,
        #HEADLINE259>.ladi-headline:hover,
        #IMAGE279:hover>.ladi-image,
        #BUTTON280>.ladi-button:hover,
        #BUTTON_TEXT280>.ladi-headline:hover,
        #HEADLINE282>.ladi-headline:hover,
        #BOX283>.ladi-box:hover,
        #BOX284>.ladi-box:hover,
        #HEADLINE285>.ladi-headline:hover,
        #HEADLINE286>.ladi-headline:hover,
        #IMAGE207:hover>.ladi-image,
        #BUTTON208>.ladi-button:hover,
        #BUTTON_TEXT208>.ladi-headline:hover,
        #HEADLINE210>.ladi-headline:hover,
        #BOX211>.ladi-box:hover,
        #BOX212>.ladi-box:hover,
        #HEADLINE213>.ladi-headline:hover,
        #HEADLINE214>.ladi-headline:hover,
        #IMAGE261:hover>.ladi-image,
        #BUTTON262>.ladi-button:hover,
        #BUTTON_TEXT262>.ladi-headline:hover,
        #HEADLINE264>.ladi-headline:hover,
        #BOX265>.ladi-box:hover,
        #BOX266>.ladi-box:hover,
        #HEADLINE267>.ladi-headline:hover,
        #HEADLINE268>.ladi-headline:hover,
        #IMAGE315:hover>.ladi-image,
        #BUTTON316>.ladi-button:hover,
        #BUTTON_TEXT316>.ladi-headline:hover,
        #HEADLINE318>.ladi-headline:hover,
        #BOX319>.ladi-box:hover,
        #BOX320>.ladi-box:hover,
        #HEADLINE321>.ladi-headline:hover,
        #HEADLINE322>.ladi-headline:hover,
        #HEADLINE391>.ladi-headline:hover,
        #HEADLINE392>.ladi-headline:hover,
        #BOX436>.ladi-box:hover,
        #BOX445>.ladi-box:hover,
        #BOX447>.ladi-box:hover,
        #BOX448>.ladi-box:hover,
        #IMAGE449:hover>.ladi-image,
        #IMAGE451:hover>.ladi-image,
        #IMAGE452:hover>.ladi-image,
        #IMAGE453:hover>.ladi-image,
        #BOX454>.ladi-box:hover,
        #IMAGE455:hover>.ladi-image,
        #BOX461>.ladi-box:hover,
        #HEADLINE462>.ladi-headline:hover,
        #BOX396>.ladi-box:hover,
        #HEADLINE397>.ladi-headline:hover,
        #BOX393>.ladi-box:hover,
        #HEADLINE400>.ladi-headline:hover,
        #HEADLINE403>.ladi-headline:hover,
        #BOX412>.ladi-box:hover,
        #HEADLINE413>.ladi-headline:hover,
        #HEADLINE414>.ladi-headline:hover,
        #BOX420>.ladi-box:hover,
        #HEADLINE421>.ladi-headline:hover,
        #HEADLINE422>.ladi-headline:hover,
        #BOX423>.ladi-box:hover,
        #HEADLINE424>.ladi-headline:hover,
        #HEADLINE425>.ladi-headline:hover,
        #BOX416>.ladi-box:hover,
        #HEADLINE418>.ladi-headline:hover,
        #HEADLINE419>.ladi-headline:hover,
        #HEADLINE465>.ladi-headline:hover,
        #BOX472>.ladi-box:hover,
        #HEADLINE473>.ladi-headline:hover,
        #HEADLINE474>.ladi-headline:hover,
        #IMAGE475:hover>.ladi-image,
        #BOX491>.ladi-box:hover,
        #HEADLINE492>.ladi-headline:hover,
        #HEADLINE493>.ladi-headline:hover,
        #BOX476>.ladi-box:hover,
        #IMAGE481:hover>.ladi-image,
        #HEADLINE482>.ladi-headline:hover,
        #SHAPE485:hover>.ladi-shape,
        #BOX479>.ladi-box:hover,
        #IMAGE483:hover>.ladi-image,
        #HEADLINE487>.ladi-headline:hover,
        #BOX478>.ladi-box:hover,
        #IMAGE488:hover>.ladi-image,
        #HEADLINE489>.ladi-headline:hover,
        #SHAPE531:hover>.ladi-shape,
        #SHAPE643:hover>.ladi-shape,
        #SHAPE644:hover>.ladi-shape,
        #SHAPE645:hover>.ladi-shape,
        #SHAPE646:hover>.ladi-shape,
        #BOX518>.ladi-box:hover,
        #IMAGE520:hover>.ladi-image,
        #HEADLINE521>.ladi-headline:hover,
        #BOX524>.ladi-box:hover,
        #IMAGE525:hover>.ladi-image,
        #HEADLINE526>.ladi-headline:hover,
        #BOX508>.ladi-box:hover,
        #IMAGE509:hover>.ladi-image,
        #HEADLINE510>.ladi-headline:hover,
        #BOX512>.ladi-box:hover,
        #IMAGE513:hover>.ladi-image,
        #HEADLINE514>.ladi-headline:hover,
        #BOX515>.ladi-box:hover,
        #IMAGE516:hover>.ladi-image,
        #HEADLINE517>.ladi-headline:hover,
        #HEADLINE693>.ladi-headline:hover,
        #HEADLINE530>.ladi-headline:hover,
        #HEADLINE534>.ladi-headline:hover,
        #BOX579>.ladi-box:hover,
        #HEADLINE580>.ladi-headline:hover,
        #HEADLINE581>.ladi-headline:hover,
        #HEADLINE582>.ladi-headline:hover,
        #BOX586>.ladi-box:hover,
        #HEADLINE587>.ladi-headline:hover,
        #BOX540>.ladi-box:hover,
        #IMAGE554:hover>.ladi-image,
        #HEADLINE556>.ladi-headline:hover,
        #HEADLINE557>.ladi-headline:hover,
        #BOX558>.ladi-box:hover,
        #IMAGE559:hover>.ladi-image,
        #HEADLINE560>.ladi-headline:hover,
        #HEADLINE561>.ladi-headline:hover,
        #BOX565>.ladi-box:hover,
        #IMAGE566:hover>.ladi-image,
        #HEADLINE567>.ladi-headline:hover,
        #HEADLINE568>.ladi-headline:hover,
        #BOX570>.ladi-box:hover,
        #IMAGE571:hover>.ladi-image,
        #HEADLINE572>.ladi-headline:hover,
        #HEADLINE573>.ladi-headline:hover,
        #BOX575>.ladi-box:hover,
        #IMAGE576:hover>.ladi-image,
        #HEADLINE577>.ladi-headline:hover,
        #HEADLINE578>.ladi-headline:hover {
            opacity: 1;
        }

        #IMAGE32.ladi-animation>.ladi-image,
        #HEADLINE474.ladi-animation>.ladi-headline,
        #HEADLINE493.ladi-animation>.ladi-headline {
            animation-name: bounceInRight;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-iteration-count: 1;
        }

        #HEADLINE35>.ladi-headline {
            font-family: VVRNIEFbJvbGQudHRm;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
        }

        #HEADLINE35.ladi-animation>.ladi-headline,
        #HEADLINE44.ladi-animation>.ladi-headline,
        #HEADLINE120.ladi-animation>.ladi-headline,
        #HEADLINE126.ladi-animation>.ladi-headline,
        #HEADLINE132.ladi-animation>.ladi-headline,
        #HEADLINE137.ladi-animation>.ladi-headline,
        #HEADLINE391.ladi-animation>.ladi-headline,
        #HEADLINE465.ladi-animation>.ladi-headline,
        #HEADLINE482.ladi-animation>.ladi-headline,
        #HEADLINE487.ladi-animation>.ladi-headline,
        #HEADLINE489.ladi-animation>.ladi-headline,
        #HEADLINE521.ladi-animation>.ladi-headline,
        #HEADLINE526.ladi-animation>.ladi-headline,
        #HEADLINE510.ladi-animation>.ladi-headline,
        #HEADLINE514.ladi-animation>.ladi-headline,
        #HEADLINE517.ladi-animation>.ladi-headline,
        #HEADLINE530.ladi-animation>.ladi-headline,
        #GROUP563.ladi-animation>.ladi-group,
        #GROUP569.ladi-animation>.ladi-group {
            animation-name: fadeInDown;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-iteration-count: 1;
        }

        #HEADLINE36>.ladi-headline {
            line-height: 1.6;
        }

        #BOX41>.ladi-box,
        #BOX48>.ladi-box,
        #BOX115>.ladi-box,
        #BOX116>.ladi-box,
        #BOX436>.ladi-box,
        #BOX445>.ladi-box,
        #BOX447>.ladi-box,
        #BOX448>.ladi-box,
        #BOX454>.ladi-box,
        #BOX396>.ladi-box,
        #BOX393>.ladi-box,
        #BOX412>.ladi-box,
        #BOX420>.ladi-box,
        #BOX423>.ladi-box,
        #BOX416>.ladi-box,
        #BOX472>.ladi-box,
        #BOX491>.ladi-box,
        #BOX476>.ladi-box,
        #BOX479>.ladi-box,
        #BOX478>.ladi-box,
        #BOX518>.ladi-box,
        #BOX524>.ladi-box,
        #BOX508>.ladi-box,
        #BOX512>.ladi-box,
        #BOX515>.ladi-box,
        #BOX586>.ladi-box,
        #BOX540>.ladi-box,
        #BOX558>.ladi-box,
        #BOX565>.ladi-box,
        #BOX570>.ladi-box,
        #BOX575>.ladi-box {
            border-radius: 10px;
        }

        #BOX41>.ladi-box,
        #BOX48>.ladi-box,
        #BOX115>.ladi-box,
        #BOX116>.ladi-box,
        #Thanhtoantructiep>.ladi-section-background,
        #BOX436>.ladi-box,
        #BOX445>.ladi-box,
        #BOX447>.ladi-box,
        #BOX448>.ladi-box,
        #BOX454>.ladi-box,
        #thanhtoantragop>.ladi-section-background,
        #BOX540>.ladi-box,
        #BOX558>.ladi-box,
        #BOX565>.ladi-box,
        #BOX570>.ladi-box,
        #BOX575>.ladi-box {
            background-color: rgb(241, 243, 244);
        }

        #BOX41>.ladi-box,
        #BOX48>.ladi-box,
        #BOX115>.ladi-box,
        #BOX116>.ladi-box {
            box-shadow: rgb(0, 0, 0) 10px 10px 20px -15px;
        }

        #IMAGE42>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon-1-20230118024418-tqav4.png");
        }

        #HEADLINE43,
        #HEADLINE119,
        #HEADLINE125,
        #HEADLINE131,
        #BOX436,
        #BOX445 {
            top: 0px;
        }

        #HEADLINE43>.ladi-headline,
        #HEADLINE119>.ladi-headline,
        #HEADLINE131>.ladi-headline {
            font-size: 21px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-align: left;
        }

        #HEADLINE44>.ladi-headline,
        #HEADLINE120>.ladi-headline,
        #HEADLINE126>.ladi-headline,
        #HEADLINE132>.ladi-headline,
        #HEADLINE392>.ladi-headline,
        #HEADLINE489>.ladi-headline,
        #HEADLINE557>.ladi-headline,
        #HEADLINE561>.ladi-headline,
        #HEADLINE568>.ladi-headline,
        #HEADLINE573>.ladi-headline,
        #HEADLINE578>.ladi-headline {
            line-height: 1.2;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BUTTON112>.ladi-button,
        #BUTTON121>.ladi-button,
        #BUTTON127>.ladi-button,
        #BUTTON133>.ladi-button,
        #BUTTON343>.ladi-button,
        #BUTTON307>.ladi-button,
        #BUTTON334>.ladi-button,
        #BUTTON361>.ladi-button,
        #BUTTON352>.ladi-button,
        #BUTTON325>.ladi-button,
        #BUTTON298>.ladi-button,
        #BUTTON271>.ladi-button,
        #BUTTON217>.ladi-button,
        #BUTTON160>.ladi-button,
        #BUTTON190>.ladi-button,
        #BUTTON253>.ladi-button,
        #BUTTON280>.ladi-button,
        #BUTTON208>.ladi-button,
        #BUTTON262>.ladi-button,
        #BUTTON316>.ladi-button {
            border-width: 2px;
            border-radius: 5px;
            border-color: rgb(0, 0, 0);
        }

        #BUTTON_TEXT112,
        #BUTTON_TEXT121,
        #BUTTON_TEXT127,
        #BUTTON_TEXT133 {
            left: 0px;
        }

        #BUTTON_TEXT112>.ladi-headline,
        #BUTTON_TEXT127>.ladi-headline {
            font-size: 17px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-decoration-line: underline;
            text-align: center;
        }

        #IMAGE118>.ladi-image>.ladi-image-background,
        #IMAGE566>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon-2-20230118024418-cf8au.png");
        }

        #BUTTON_TEXT121>.ladi-headline,
        #BUTTON_TEXT133>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-decoration-line: underline;
            text-align: center;
        }

        #IMAGE124>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon-3-20230118024418-ywiuj.png");
        }

        #HEADLINE125>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-align: left;
        }

        #IMAGE130>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon-4-20230118024418-zxwa6.png");
        }

        #HEADLINE137>.ladi-headline,
        #HEADLINE391>.ladi-headline,
        #HEADLINE465>.ladi-headline,
        #HEADLINE530>.ladi-headline {
            font-family: VVRNIEFbJvbGQudHRm;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-align: center;
        }

        #HEADLINE138>.ladi-headline {
            line-height: 1.2;
            color: rgb(0, 0, 0);
            text-align: center;
        }

        #HEADLINE386>.ladi-headline,
        #HEADLINE462>.ladi-headline,
        #HEADLINE580>.ladi-headline {
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BOX389>.ladi-box,
        #BOX461>.ladi-box,
        #BOX579>.ladi-box {
            border-width: 2px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(236, 29, 34);
        }

        #BOX389>.ladi-box,
        #BOX461>.ladi-box,
        #BOX393>.ladi-box,
        #BOX412>.ladi-box,
        #BOX420>.ladi-box,
        #BOX423>.ladi-box,
        #BOX416>.ladi-box,
        #BOX579>.ladi-box {
            background-size: cover;
            background-origin: content-box;
            background-position: 50% 0%;
            background-repeat: repeat;
            background-attachment: scroll;
        }

        #GROUP672,
        #GROUP665,
        #GROUP666,
        #GROUP667,
        #GROUP660,
        #GROUP657,
        #BUTTON_TEXT160,
        #GROUP663,
        #GROUP664,
        #GROUP668,
        #GROUP671 {
            width: 300px;
        }

        #IMAGE342,
        #IMAGE342>.ladi-image>.ladi-image-background,
        #IMAGE306,
        #IMAGE306>.ladi-image>.ladi-image-background,
        #IMAGE333,
        #IMAGE333>.ladi-image>.ladi-image-background,
        #IMAGE360,
        #IMAGE360>.ladi-image>.ladi-image-background,
        #IMAGE351,
        #IMAGE351>.ladi-image>.ladi-image-background,
        #IMAGE324,
        #IMAGE324>.ladi-image>.ladi-image-background,
        #IMAGE297,
        #IMAGE297>.ladi-image>.ladi-image-background,
        #IMAGE270,
        #IMAGE270>.ladi-image>.ladi-image-background,
        #IMAGE216,
        #IMAGE216>.ladi-image>.ladi-image-background,
        #IMAGE159,
        #IMAGE159>.ladi-image>.ladi-image-background,
        #IMAGE189,
        #IMAGE189>.ladi-image>.ladi-image-background,
        #IMAGE252,
        #IMAGE252>.ladi-image>.ladi-image-background,
        #IMAGE279,
        #IMAGE279>.ladi-image>.ladi-image-background,
        #IMAGE207,
        #IMAGE207>.ladi-image>.ladi-image-background,
        #IMAGE261,
        #IMAGE261>.ladi-image>.ladi-image-background,
        #IMAGE315,
        #IMAGE315>.ladi-image>.ladi-image-background {
            width: 15px;
            height: 17.82px;
        }

        #IMAGE342,
        #IMAGE306,
        #IMAGE333,
        #IMAGE360,
        #IMAGE351,
        #IMAGE324,
        #IMAGE297,
        #IMAGE270,
        #IMAGE216,
        #IMAGE159,
        #IMAGE189,
        #IMAGE252,
        #IMAGE279,
        #IMAGE207,
        #IMAGE261,
        #IMAGE315 {
            top: 44.12px;
            left: 0px;
        }

        #IMAGE342>.ladi-image>.ladi-image-background,
        #IMAGE306>.ladi-image>.ladi-image-background,
        #IMAGE333>.ladi-image>.ladi-image-background,
        #IMAGE360>.ladi-image>.ladi-image-background,
        #IMAGE351>.ladi-image>.ladi-image-background,
        #IMAGE324>.ladi-image>.ladi-image-background,
        #IMAGE297>.ladi-image>.ladi-image-background,
        #IMAGE270>.ladi-image>.ladi-image-background,
        #IMAGE216>.ladi-image>.ladi-image-background,
        #IMAGE159>.ladi-image>.ladi-image-background,
        #IMAGE189>.ladi-image>.ladi-image-background,
        #IMAGE252>.ladi-image>.ladi-image-background,
        #IMAGE279>.ladi-image>.ladi-image-background,
        #IMAGE207>.ladi-image>.ladi-image-background,
        #IMAGE261>.ladi-image>.ladi-image-background,
        #IMAGE315>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/icon-5-20230118033658-an3xa.png");
        }

        #BUTTON343,
        #BUTTON_TEXT343,
        #BUTTON_TEXT307,
        #BUTTON_TEXT334,
        #BUTTON_TEXT361,
        #BUTTON_TEXT352,
        #BUTTON_TEXT325,
        #BUTTON_TEXT298,
        #BUTTON_TEXT271,
        #BUTTON_TEXT217,
        #BUTTON_TEXT190,
        #BUTTON_TEXT253,
        #BUTTON_TEXT280,
        #BUTTON_TEXT208,
        #BUTTON_TEXT262,
        #BUTTON316,
        #BUTTON_TEXT316 {
            width: 282px;
        }

        #BUTTON343,
        #BUTTON307,
        #BUTTON334,
        #BUTTON361,
        #BUTTON352,
        #BUTTON325,
        #BUTTON298,
        #BUTTON271,
        #BUTTON217,
        #BUTTON190,
        #BUTTON253,
        #BUTTON280,
        #BUTTON208,
        #BUTTON262 {
            top: 43px;
            left: 18px;
        }

        #BUTTON_TEXT343,
        #HEADLINE349,
        #BUTTON_TEXT307,
        #HEADLINE313,
        #BUTTON_TEXT334,
        #HEADLINE340,
        #BUTTON_TEXT361,
        #HEADLINE367,
        #BUTTON_TEXT352,
        #HEADLINE358,
        #BUTTON_TEXT325,
        #HEADLINE331,
        #BUTTON_TEXT298,
        #HEADLINE304,
        #BUTTON_TEXT271,
        #HEADLINE277,
        #BUTTON_TEXT217,
        #HEADLINE223,
        #BUTTON_TEXT160,
        #HEADLINE146,
        #BUTTON_TEXT190,
        #HEADLINE196,
        #BUTTON_TEXT253,
        #HEADLINE259,
        #BUTTON_TEXT280,
        #HEADLINE286,
        #BUTTON_TEXT208,
        #HEADLINE214,
        #BUTTON_TEXT262,
        #HEADLINE268,
        #BUTTON_TEXT316,
        #HEADLINE322 {
            top: 9px;
            left: 0px;
        }

        #BUTTON_TEXT343>.ladi-headline,
        #BUTTON_TEXT307>.ladi-headline,
        #BUTTON_TEXT334>.ladi-headline,
        #BUTTON_TEXT361>.ladi-headline,
        #BUTTON_TEXT352>.ladi-headline,
        #BUTTON_TEXT325>.ladi-headline,
        #BUTTON_TEXT298>.ladi-headline,
        #BUTTON_TEXT271>.ladi-headline,
        #BUTTON_TEXT217>.ladi-headline,
        #BUTTON_TEXT190>.ladi-headline,
        #BUTTON_TEXT253>.ladi-headline,
        #BUTTON_TEXT280>.ladi-headline,
        #BUTTON_TEXT208>.ladi-headline,
        #BUTTON_TEXT262>.ladi-headline,
        #BUTTON_TEXT316>.ladi-headline {
            font-size: 12px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-decoration-line: underline;
            text-align: left;
        }

        #HEADLINE345,
        #HEADLINE309,
        #HEADLINE336,
        #HEADLINE363,
        #HEADLINE354,
        #HEADLINE327,
        #HEADLINE300,
        #HEADLINE273,
        #HEADLINE219,
        #HEADLINE163,
        #HEADLINE192,
        #HEADLINE255,
        #HEADLINE282,
        #HEADLINE210,
        #HEADLINE264,
        #HEADLINE318 {
            width: 240px;
        }

        #HEADLINE345,
        #HEADLINE318 {
            left: 17.25px;
        }

        #HEADLINE345>.ladi-headline,
        #HEADLINE309>.ladi-headline,
        #HEADLINE336>.ladi-headline,
        #HEADLINE363>.ladi-headline,
        #HEADLINE354>.ladi-headline,
        #HEADLINE327>.ladi-headline,
        #HEADLINE300>.ladi-headline,
        #HEADLINE273>.ladi-headline,
        #HEADLINE219>.ladi-headline,
        #HEADLINE163>.ladi-headline,
        #HEADLINE192>.ladi-headline,
        #HEADLINE255>.ladi-headline,
        #HEADLINE282>.ladi-headline,
        #HEADLINE210>.ladi-headline,
        #HEADLINE264>.ladi-headline,
        #HEADLINE318>.ladi-headline {
            font-size: 12px;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BOX346,
        #BOX310,
        #BOX337,
        #BOX364,
        #BOX355,
        #BOX328,
        #BOX301,
        #BOX274,
        #BOX220,
        #BOX142,
        #BOX193,
        #BOX256,
        #BOX283,
        #BOX211,
        #BOX265,
        #BOX319 {
            width: 40px;
            height: 40px;
        }

        #BOX346>.ladi-box,
        #BOX347>.ladi-box,
        #BOX310>.ladi-box,
        #BOX311>.ladi-box,
        #BOX337>.ladi-box,
        #BOX338>.ladi-box,
        #BOX364>.ladi-box,
        #BOX365>.ladi-box,
        #BOX355>.ladi-box,
        #BOX356>.ladi-box,
        #BOX328>.ladi-box,
        #BOX329>.ladi-box,
        #BOX301>.ladi-box,
        #BOX302>.ladi-box,
        #BOX274>.ladi-box,
        #BOX275>.ladi-box,
        #BOX220>.ladi-box,
        #BOX221>.ladi-box,
        #BOX142>.ladi-box,
        #BOX143>.ladi-box,
        #BOX193>.ladi-box,
        #BOX194>.ladi-box,
        #BOX256>.ladi-box,
        #BOX257>.ladi-box,
        #BOX283>.ladi-box,
        #BOX284>.ladi-box,
        #BOX211>.ladi-box,
        #BOX212>.ladi-box,
        #BOX265>.ladi-box,
        #BOX266>.ladi-box,
        #BOX319>.ladi-box,
        #BOX320>.ladi-box {
            border-radius: 0px;
        }

        #BOX346>.ladi-box,
        #BOX310>.ladi-box,
        #BOX337>.ladi-box,
        #BOX364>.ladi-box,
        #BOX355>.ladi-box,
        #BOX328>.ladi-box,
        #BOX301>.ladi-box,
        #BOX274>.ladi-box,
        #BOX220>.ladi-box,
        #BOX142>.ladi-box,
        #BOX193>.ladi-box,
        #BOX256>.ladi-box,
        #BOX283>.ladi-box,
        #BOX211>.ladi-box,
        #BOX265>.ladi-box,
        #BOX319>.ladi-box,
        #BOX396>.ladi-box,
        #BOX586>.ladi-box {
            background-color: rgb(236, 29, 34);
        }

        #BOX347,
        #BOX311,
        #BOX338,
        #BOX365,
        #BOX356,
        #BOX329,
        #BOX302,
        #BOX275,
        #BOX221,
        #BOX143,
        #BOX194,
        #BOX257,
        #BOX284,
        #BOX212,
        #BOX266,
        #BOX320 {
            width: 260px;
            height: 40px;
            top: 0px;
            left: 40px;
        }

        #BOX347>.ladi-box,
        #BOX311>.ladi-box,
        #BOX338>.ladi-box,
        #BOX365>.ladi-box,
        #BOX356>.ladi-box,
        #BOX329>.ladi-box,
        #BOX302>.ladi-box,
        #BOX275>.ladi-box,
        #BOX221>.ladi-box,
        #BOX143>.ladi-box,
        #BOX194>.ladi-box,
        #BOX257>.ladi-box,
        #BOX284>.ladi-box,
        #BOX212>.ladi-box,
        #BOX266>.ladi-box,
        #BOX320>.ladi-box,
        #BOX472>.ladi-box,
        #BOX491>.ladi-box {
            background-color: rgb(45, 44, 114);
        }

        #HEADLINE348,
        #HEADLINE312,
        #HEADLINE339,
        #HEADLINE366,
        #HEADLINE357,
        #HEADLINE330,
        #HEADLINE303,
        #HEADLINE276,
        #HEADLINE222,
        #HEADLINE144,
        #HEADLINE195,
        #HEADLINE258,
        #HEADLINE285,
        #HEADLINE213,
        #HEADLINE267,
        #HEADLINE321 {
            width: 220px;
            top: 9px;
            left: 50px;
        }

        #HEADLINE348>.ladi-headline,
        #HEADLINE312>.ladi-headline,
        #HEADLINE339>.ladi-headline,
        #HEADLINE366>.ladi-headline,
        #HEADLINE357>.ladi-headline,
        #HEADLINE330>.ladi-headline,
        #HEADLINE303>.ladi-headline,
        #HEADLINE276>.ladi-headline,
        #HEADLINE222>.ladi-headline,
        #HEADLINE144>.ladi-headline,
        #HEADLINE195>.ladi-headline,
        #HEADLINE258>.ladi-headline,
        #HEADLINE285>.ladi-headline,
        #HEADLINE213>.ladi-headline,
        #HEADLINE267>.ladi-headline,
        #HEADLINE321>.ladi-headline {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
        }

        #HEADLINE349,
        #HEADLINE313,
        #HEADLINE340,
        #HEADLINE367,
        #HEADLINE358,
        #HEADLINE331,
        #HEADLINE304,
        #HEADLINE277,
        #HEADLINE223,
        #HEADLINE146,
        #HEADLINE196,
        #HEADLINE259,
        #HEADLINE286,
        #HEADLINE214,
        #HEADLINE268,
        #HEADLINE322 {
            width: 40px;
        }

        #HEADLINE349>.ladi-headline,
        #HEADLINE313>.ladi-headline,
        #HEADLINE340>.ladi-headline,
        #HEADLINE367>.ladi-headline,
        #HEADLINE358>.ladi-headline,
        #HEADLINE331>.ladi-headline,
        #HEADLINE304>.ladi-headline,
        #HEADLINE277>.ladi-headline,
        #HEADLINE223>.ladi-headline,
        #HEADLINE146>.ladi-headline,
        #HEADLINE196>.ladi-headline,
        #HEADLINE259>.ladi-headline,
        #HEADLINE286>.ladi-headline,
        #HEADLINE214>.ladi-headline,
        #HEADLINE268>.ladi-headline,
        #HEADLINE322>.ladi-headline {
            font-size: 14px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: center;
        }

        #BUTTON307,
        #BUTTON334,
        #BUTTON361,
        #BUTTON325,
        #BUTTON298,
        #BUTTON271,
        #BUTTON217,
        #BUTTON190,
        #BUTTON253,
        #BUTTON280,
        #BUTTON208,
        #BUTTON262 {
            width: 282px;
            height: 20px;
        }

        #HEADLINE309,
        #HEADLINE336,
        #HEADLINE363,
        #HEADLINE327,
        #HEADLINE300,
        #HEADLINE273,
        #HEADLINE219,
        #HEADLINE163,
        #HEADLINE192,
        #HEADLINE255,
        #HEADLINE282,
        #HEADLINE210,
        #HEADLINE264 {
            top: 63px;
            left: 17.25px;
        }

        #BUTTON352 {
            width: 282px;
            height: 39px;
        }

        #HEADLINE354 {
            top: 82px;
            left: 15px;
        }

        #GROUP659 {
            width: 300px;
            height: 101px;
        }

        #GROUP658,
        #GROUP656,
        #GROUP662,
        #GROUP669 {
            width: 300px;
            height: 82px;
        }

        #GROUP655 {
            width: 304px;
            height: 82px;
        }

        #BUTTON160 {
            width: 300px;
            height: 20px;
            top: 43px;
            left: 4px;
        }

        #BUTTON_TEXT160>.ladi-headline {
            font-size: 12px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 29, 34);
            text-decoration-line: underline;
            text-align: center;
        }

        #BUTTON316 {
            left: 18px;
        }

        #thanhtoanchuyenkhoan>.ladi-section-background,
        #BOX476>.ladi-box,
        #BOX479>.ladi-box,
        #BOX478>.ladi-box,
        #BOX518>.ladi-box,
        #BOX524>.ladi-box,
        #BOX508>.ladi-box,
        #BOX512>.ladi-box,
        #BOX515>.ladi-box {
            background-color: rgb(255, 255, 255);
        }

        #HEADLINE397>.ladi-headline,
        #HEADLINE400>.ladi-headline,
        #HEADLINE413>.ladi-headline,
        #HEADLINE421>.ladi-headline,
        #HEADLINE424>.ladi-headline,
        #HEADLINE418>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #BOX393.selected>.ladi-box {
            transform: scale(1) !important;
        }

        #HEADLINE403>.ladi-headline,
        #HEADLINE414>.ladi-headline,
        #HEADLINE422>.ladi-headline,
        #HEADLINE425>.ladi-headline,
        #HEADLINE419>.ladi-headline {
            font-weight: bold;
            line-height: 1.4;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #IMAGE694,
        #IMAGE694>.ladi-image>.ladi-image-background,
        #IMAGE695,
        #IMAGE696,
        #IMAGE696>.ladi-image>.ladi-image-background,
        #IMAGE698,
        #IMAGE698>.ladi-image>.ladi-image-background,
        #IMAGE699,
        #IMAGE699>.ladi-image>.ladi-image-background {
            width: 70px;
            height: 70px;
        }

        #IMAGE694>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/vcb-qr-20230608024125-91zt4.png");
        }

        #IMAGE695>.ladi-image>.ladi-image-background {
            width: 71px;
            height: 71px;
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/tech-qr-20230608024125-aehw8.png");
        }

        #IMAGE696>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/tpbank-qr-20230608024125-kfovu.png");
        }

        #IMAGE698>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/mb-qr-20230608024125-8swoc.png");
        }

        #IMAGE699>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/acb-qr-20230608024125-sjbjh.png");
        }

        #GROUP480 {
            width: 347px;
            height: 142.611px;
        }

        #BOX472,
        #BOX491 {
            width: 347px;
            height: 47px;
        }

        #BOX472 {
            top: 61px;
            left: 0px;
        }

        #HEADLINE473,
        #HEADLINE492 {
            width: 230px;
        }

        #HEADLINE473 {
            top: 65.5px;
            left: 54.5px;
        }

        #HEADLINE473>.ladi-headline,
        #HEADLINE492>.ladi-headline,
        #HEADLINE587>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: center;
        }

        #HEADLINE474,
        #HEADLINE493 {
            width: 252px;
        }

        #HEADLINE474 {
            top: 113.611px;
            left: 47.5px;
        }

        #HEADLINE474>.ladi-headline,
        #HEADLINE493>.ladi-headline {
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: center;
        }

        #IMAGE475,
        #IMAGE475>.ladi-image>.ladi-image-background {
            width: 237px;
            height: 53.1719px;
        }

        #IMAGE475 {
            top: 0px;
            left: 55px;
        }

        #IMAGE475>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s550x400/5d3c13acdc09063fd1918045/hd-sai-gon-20230118085638-h7gaw.png");
        }

        #HEADLINE482>.ladi-headline,
        #HEADLINE510>.ladi-headline,
        #HEADLINE517>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #SHAPE485 svg:last-child,
        #SHAPE531 svg:last-child,
        #SHAPE643 svg:last-child,
        #SHAPE644 svg:last-child,
        #SHAPE645 svg:last-child,
        #SHAPE646 svg:last-child {
            fill: rgb(236, 29, 34);
        }

        #HEADLINE487>.ladi-headline,
        #HEADLINE521>.ladi-headline,
        #HEADLINE526>.ladi-headline,
        #HEADLINE514>.ladi-headline {
            font-weight: bold;
            line-height: 1.2;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #SHAPE643,
        #SHAPE644,
        #SHAPE645,
        #SHAPE646 {
            width: 21.7632px;
            height: 57.2765px;
        }

        #HEADLINE693>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(28, 172, 255);
        }

        #HEADLINE534>.ladi-headline {
            line-height: 1.6;
            color: rgb(0, 0, 0);
        }

        #HEADLINE581>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(0, 0, 0);
        }

        #HEADLINE582>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(45, 44, 114);
            text-transform: uppercase;
            text-align: center;
        }

        #GROUP590,
        #BOX586 {
            width: 200px;
            height: 50px;
        }

        #GROUP590.ladi-animation>.ladi-group {
            animation-delay: 1s;
            animation-duration: 1s;
        }

        #BOX586.selected>.ladi-box {
            border-color: rgb(236, 29, 34) !important;
            background-image: none !important;
            background-color: rgb(241, 243, 244) !important;
            background-size: initial !important;
            background-origin: initial !important;
            background-position: initial !important;
            background-repeat: initial !important;
            background-attachment: initial !important;
            -webkit-background-clip: initial !important;
            transform: scale(1) !important;
        }

        #HEADLINE587 {
            width: 187px;
            left: 6.5px;
        }

        #IMAGE554>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/bank-card-icon-20230118093335-y_vrx.png");
        }

        #HEADLINE556>.ladi-headline,
        #HEADLINE560>.ladi-headline,
        #HEADLINE567>.ladi-headline,
        #HEADLINE572>.ladi-headline,
        #HEADLINE577>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(45, 44, 114);
            text-align: left;
        }

        #HEADLINE557.ladi-animation>.ladi-headline,
        #HEADLINE561.ladi-animation>.ladi-headline,
        #HEADLINE568.ladi-animation>.ladi-headline,
        #HEADLINE573.ladi-animation>.ladi-headline,
        #HEADLINE578.ladi-animation>.ladi-headline {
            animation-name: bounceInLeft;
            animation-delay: 1s;
            animation-duration: 1s;
            animation-iteration-count: 1;
        }

        #IMAGE559>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/online-card-icon-20230118100910-z0jwi.png");
        }

        #IMAGE571>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/atm-online-icon-20230118101522-_zolu.png");
        }

        #IMAGE576>.ladi-image>.ladi-image-background {
            background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/so-du-icon-20230118101837-jygme.png");
        }

        @media (min-width: 768px) {
            #Header {
                height: 600px;
            }

            #IMAGE29,
            #IMAGE29>.ladi-image>.ladi-image-background {
                width: 898.544px;
                height: 382.034px;
            }

            #IMAGE29 {
                top: 108.983px;
                left: 209px;
            }

            #IMAGE29>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s1200x700/5d3c13acdc09063fd1918045/technology-20230118015051-no9qp.png");
            }

            #IMAGE30,
            #IMAGE30>.ladi-image>.ladi-image-background {
                width: 865.515px;
                height: 251.019px;
            }

            #IMAGE30 {
                top: 156.983px;
                left: -110.295px;
            }

            #IMAGE30>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s1200x600/5d3c13acdc09063fd1918045/logo-hacom-20230118015050-blsof.png");
            }

            #IMAGE31,
            #IMAGE31>.ladi-image>.ladi-image-background {
                width: 566px;
                height: 600px;
            }

            #IMAGE31 {
                top: 0px;
                left: 936px;
            }

            #IMAGE31>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s900x950/5d3c13acdc09063fd1918045/bg-header-20230118014927-fpgqj.png");
            }

            #IMAGE32,
            #IMAGE32>.ladi-image>.ladi-image-background {
                width: 507.813px;
                height: 412.186px;
            }

            #IMAGE32 {
                top: 23.716px;
                left: 755.22px;
            }

            #IMAGE32>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s850x750/5d3c13acdc09063fd1918045/pay-mobiles-20230118020027-tjakh.png");
            }

            #HEADLINE35 {
                width: 661px;
                top: 219.998px;
                left: 0px;
            }

            #HEADLINE35>.ladi-headline {
                font-size: 48px;
                text-align: left;
            }

            #HEADLINE36 {
                width: 653px;
                top: 299.998px;
                left: 0px;
            }

            #HEADLINE36>.ladi-headline {
                font-size: 16px;
                color: rgb(236, 30, 36);
                text-align: left;
            }

            #IMAGE692,
            #IMAGE692>.ladi-image>.ladi-image-background {
                width: 780.8px;
                height: 488px;
            }

            #IMAGE692 {
                top: 123px;
                left: 631px;
            }

            #IMAGE692>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s1100x800/5d3c13acdc09063fd1918045/kinh-doanh-hacom-20230130050428-0weus.png");
            }

            #Cachinhthucthanhtoan {
                height: 430.8px;
            }

            #GROUP649,
            #BOX41,
            #GROUP648,
            #BOX48,
            #GROUP651,
            #BOX115,
            #GROUP650,
            #BOX116 {
                width: 460px;
                height: 175px;
            }

            #GROUP649 {
                top: 17px;
                left: 0px;
            }

            #GROUP114,
            #GROUP117,
            #GROUP123,
            #GROUP129 {
                width: 425.5px;
                height: 121px;
                top: 27px;
                left: 17.25px;
            }

            #IMAGE42,
            #IMAGE42>.ladi-image>.ladi-image-background,
            #IMAGE118,
            #IMAGE118>.ladi-image>.ladi-image-background,
            #IMAGE124,
            #IMAGE124>.ladi-image>.ladi-image-background,
            #IMAGE130,
            #IMAGE130>.ladi-image>.ladi-image-background {
                width: 63px;
                height: 63px;
            }

            #HEADLINE43,
            #HEADLINE44,
            #HEADLINE119,
            #HEADLINE120,
            #HEADLINE125,
            #HEADLINE126,
            #HEADLINE131,
            #HEADLINE132 {
                width: 347px;
            }

            #HEADLINE43,
            #HEADLINE119,
            #HEADLINE125,
            #HEADLINE131 {
                left: 78.5px;
            }

            #HEADLINE44,
            #HEADLINE120,
            #HEADLINE132 {
                top: 34px;
                left: 78.5px;
            }

            #HEADLINE44>.ladi-headline,
            #HEADLINE120>.ladi-headline,
            #HEADLINE126>.ladi-headline,
            #HEADLINE132>.ladi-headline,
            #HEADLINE138>.ladi-headline,
            #HEADLINE386>.ladi-headline,
            #HEADLINE392>.ladi-headline,
            #HEADLINE462>.ladi-headline,
            #HEADLINE400>.ladi-headline,
            #HEADLINE413>.ladi-headline,
            #HEADLINE421>.ladi-headline,
            #HEADLINE424>.ladi-headline,
            #HEADLINE418>.ladi-headline,
            #HEADLINE474>.ladi-headline,
            #HEADLINE493>.ladi-headline,
            #HEADLINE580>.ladi-headline,
            #HEADLINE582>.ladi-headline,
            #HEADLINE561>.ladi-headline,
            #HEADLINE568>.ladi-headline,
            #HEADLINE573>.ladi-headline,
            #HEADLINE578>.ladi-headline {
                font-size: 16px;
            }

            #BUTTON112,
            #BUTTON121,
            #BUTTON127,
            #BUTTON133 {
                width: 160px;
                height: 40px;
            }

            #BUTTON112 {
                top: 81px;
                left: 51.5px;
            }

            #BUTTON_TEXT112,
            #BUTTON_TEXT121,
            #BUTTON_TEXT127,
            #BUTTON_TEXT133 {
                width: 160px;
                top: 9px;
            }

            #GROUP648 {
                top: 17px;
                left: 500px;
            }

            #BUTTON121,
            #BUTTON127,
            #BUTTON133 {
                top: 81px;
                left: 53.5px;
            }

            #BUTTON_TEXT121>.ladi-headline,
            #BUTTON_TEXT133>.ladi-headline,
            #HEADLINE397>.ladi-headline,
            #HEADLINE482>.ladi-headline,
            #HEADLINE487>.ladi-headline,
            #HEADLINE489>.ladi-headline,
            #HEADLINE521>.ladi-headline,
            #HEADLINE526>.ladi-headline,
            #HEADLINE510>.ladi-headline,
            #HEADLINE514>.ladi-headline,
            #HEADLINE517>.ladi-headline {
                font-size: 18px;
            }

            #GROUP651 {
                top: 232px;
                left: 0px;
            }

            #HEADLINE125>.ladi-headline {
                font-size: 22px;
            }

            #HEADLINE126 {
                top: 35px;
                left: 78.5px;
            }

            #GROUP650 {
                top: 232px;
                left: 500px;
            }

            #Thanhtoantructiep {
                height: 1115.8px;
            }

            #HEADLINE137,
            #HEADLINE138,
            #HEADLINE391,
            #HEADLINE392,
            #HEADLINE465,
            #HEADLINE530,
            #HEADLINE534 {
                width: 960px;
            }

            #HEADLINE137 {
                top: 11.7px;
                left: 0px;
            }

            #HEADLINE137>.ladi-headline,
            #HEADLINE391>.ladi-headline,
            #HEADLINE465>.ladi-headline,
            #HEADLINE530>.ladi-headline {
                font-size: 28px;
            }

            #HEADLINE138 {
                top: 68.7px;
                left: 0px;
            }

            #IMAGE388,
            #IMAGE388>.ladi-image>.ladi-image-background {
                width: 960px;
                height: 54.4px;
            }

            #IMAGE388 {
                top: 861.1px;
                left: 0px;
            }

            #IMAGE388>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s1300x400/5d3c13acdc09063fd1918045/chinh-sach-thanh-toan-20230118044102-_nu2z.png");
            }

            #GROUP654,
            #BOX389 {
                width: 960px;
                height: 122px;
            }

            #GROUP654 {
                top: 949.8px;
                left: 0px;
            }

            #HEADLINE386 {
                width: 919px;
                top: 9px;
                left: 20.5px;
            }

            #GROUP672 {
                height: 138px;
                top: 578.4px;
                left: 328px;
            }

            #BUTTON343 {
                height: 39px;
            }

            #HEADLINE345 {
                top: 80px;
            }

            #GROUP665,
            #GROUP666,
            #GROUP667 {
                height: 121px;
            }

            #GROUP665 {
                top: 446.4px;
                left: 0px;
            }

            #GROUP666 {
                top: 578.4px;
                left: 0px;
            }

            #GROUP667 {
                top: 716.4px;
                left: 0px;
            }

            #GROUP660 {
                height: 140px;
                top: 578.4px;
                left: 660px;
            }

            #GROUP659 {
                top: 446.4px;
                left: 660px;
            }

            #GROUP658 {
                top: 340.4px;
                left: 660px;
            }

            #GROUP657,
            #GROUP663,
            #GROUP664,
            #GROUP668 {
                height: 101px;
            }

            #GROUP657 {
                top: 340.4px;
                left: 0px;
            }

            #GROUP656 {
                top: 231.4px;
                left: 0px;
            }

            #GROUP655 {
                top: 123.1px;
                left: 0px;
            }

            #GROUP662 {
                top: 123.1px;
                left: 328px;
            }

            #GROUP663 {
                top: 231.4px;
                left: 328px;
            }

            #GROUP664 {
                top: 340.4px;
                left: 330px;
            }

            #GROUP668 {
                top: 123.1px;
                left: 660px;
            }

            #GROUP669 {
                top: 231.4px;
                left: 660px;
            }

            #GROUP671 {
                height: 131px;
                top: 446.4px;
                left: 330px;
            }

            #BUTTON316 {
                height: 43.12px;
                top: 36px;
            }

            #HEADLINE318 {
                top: 73px;
            }

            #thanhtoanchuyenkhoan {
                height: 1402.8px;
            }

            #HEADLINE391 {
                top: 8px;
                left: 0px;
            }

            #HEADLINE392 {
                top: 60px;
                left: 0px;
            }

            #GROUP460 {
                width: 960px;
                height: 220px;
                top: 155.4px;
                left: 0px;
            }

            #BOX436,
            #BOX445,
            #BOX447,
            #BOX448,
            #BOX454 {
                width: 225px;
                height: 100px;
            }

            #BOX436 {
                left: 490px;
            }

            #BOX445 {
                left: 735px;
            }

            #BOX448 {
                top: 120px;
                left: 367.5px;
            }

            #IMAGE449,
            #IMAGE449>.ladi-image>.ladi-image-background {
                width: 160.64px;
                height: 33.2875px;
            }

            #IMAGE449 {
                top: 33.357px;
                left: 32.18px;
            }

            #IMAGE449>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s500x350/5d3c13acdc09063fd1918045/logo-vietcombank-20230118081810-6cb2m.png");
            }

            #IMAGE451,
            #IMAGE451>.ladi-image>.ladi-image-background {
                width: 160.64px;
                height: 53.5467px;
            }

            #IMAGE451 {
                top: 23.227px;
                left: 522.18px;
            }

            #IMAGE451>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-techcombank-20230118080838-dr0ad.png");
            }

            #IMAGE452,
            #IMAGE452>.ladi-image>.ladi-image-background {
                width: 71.3758px;
                height: 29.3973px;
            }

            #IMAGE452 {
                top: 33.357px;
                left: 811.812px;
            }

            #IMAGE452>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x350/5d3c13acdc09063fd1918045/logo-acb-20230118080838-ou0ah.png");
            }

            #IMAGE453,
            #IMAGE453>.ladi-image>.ladi-image-background {
                width: 160.64px;
                height: 41.2749px;
            }

            #IMAGE453 {
                top: 153.356px;
                left: 399.68px;
            }

            #IMAGE453>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s500x350/5d3c13acdc09063fd1918045/logo-tpbank-20230118080838-56mjb.png");
            }

            #BOX454 {
                top: 2px;
                left: 245px;
            }

            #IMAGE455,
            #IMAGE455>.ladi-image>.ladi-image-background {
                width: 115.257px;
                height: 51.8245px;
            }

            #IMAGE455 {
                top: 26.0877px;
                left: 299.871px;
            }

            #IMAGE455>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/logo-mb-bank-20230118080838-mogve.png");
            }

            #GROUP682,
            #BOX461 {
                width: 960px;
                height: 84px;
            }

            #GROUP682 {
                top: 1271px;
                left: 0px;
            }

            #HEADLINE462 {
                width: 909px;
                top: 16px;
                left: 25.5px;
            }

            #BOX396 {
                width: 606px;
                height: 120px;
                top: 407.4px;
                left: 193.5px;
            }

            #HEADLINE397 {
                width: 570px;
                top: 424.4px;
                left: 211.5px;
            }

            #GROUP694,
            #GROUP674,
            #BOX393,
            #GROUP695,
            #GROUP677,
            #BOX412,
            #GROUP696,
            #GROUP678,
            #BOX420,
            #GROUP698,
            #GROUP679,
            #BOX423,
            #GROUP699,
            #GROUP676,
            #BOX416 {
                width: 470px;
                height: 210px;
            }

            #GROUP694 {
                top: 555.9px;
                left: 0px;
            }

            #BOX393>.ladi-box {
                background-image: url("https://w.ladicdn.com/s800x550/5d3c13acdc09063fd1918045/vietcombank-20230118070120-u7eaz.png");
            }

            #HEADLINE400,
            #HEADLINE413,
            #HEADLINE421,
            #HEADLINE424,
            #HEADLINE418 {
                width: 381px;
            }

            #HEADLINE400 {
                top: 16.5px;
                left: 9.5px;
            }

            #HEADLINE403,
            #HEADLINE414,
            #HEADLINE422,
            #HEADLINE425,
            #HEADLINE419 {
                width: 272px;
            }

            #HEADLINE403 {
                top: 78.5px;
                left: 16.5px;
            }

            #HEADLINE403>.ladi-headline,
            #HEADLINE414>.ladi-headline,
            #HEADLINE422>.ladi-headline,
            #HEADLINE425>.ladi-headline,
            #HEADLINE419>.ladi-headline {
                font-size: 15px;
            }

            #IMAGE694 {
                top: 25px;
                left: 383px;
            }

            #GROUP695 {
                top: 786.9px;
                left: 0px;
            }

            #BOX412>.ladi-box {
                background-image: url("https://w.ladicdn.com/s800x550/5d3c13acdc09063fd1918045/techcombank-20230118071326-x2r8i.png");
            }

            #HEADLINE413,
            #HEADLINE418 {
                top: 18.5px;
                left: 9.5px;
            }

            #HEADLINE414 {
                top: 75.5px;
                left: 16.5px;
            }

            #IMAGE695 {
                top: 16.5px;
                left: 377px;
            }

            #GROUP696 {
                top: 1018.9px;
                left: 0px;
            }

            #BOX420>.ladi-box {
                background-image: url("https://w.ladicdn.com/s800x550/5d3c13acdc09063fd1918045/tpbank-20230118073616-69k12.png");
            }

            #HEADLINE421,
            #HEADLINE424 {
                top: 19.5px;
                left: 9.5px;
            }

            #HEADLINE422 {
                top: 74.5px;
                left: 16.5px;
            }

            #IMAGE696,
            #IMAGE698 {
                top: 22.5px;
                left: 380px;
            }

            #GROUP698 {
                top: 787.9px;
                left: 490px;
            }

            #BOX423>.ladi-box {
                background-image: url("https://w.ladicdn.com/s800x550/5d3c13acdc09063fd1918045/mbbank-20230118074736-jhgda.png");
            }

            #HEADLINE425 {
                top: 74.5px;
                left: 17.5px;
            }

            #GROUP699 {
                top: 555.9px;
                left: 490px;
            }

            #BOX416>.ladi-box {
                background-image: url("https://w.ladicdn.com/s800x550/5d3c13acdc09063fd1918045/acb-20230118072920-ygn53.png");
            }

            #HEADLINE419 {
                top: 75.5px;
                left: 17.5px;
            }

            #IMAGE699 {
                top: 16.5px;
                left: 380px;
            }

            #thanhtoantragop {
                height: 726.8px;
            }

            #HEADLINE465 {
                top: 8.2px;
                left: 0px;
            }

            #GROUP480 {
                top: 116.156px;
                left: 306.5px;
            }

            #HEADLINE473>.ladi-headline,
            #HEADLINE492>.ladi-headline {
                font-size: 24px;
            }

            #BOX491 {
                top: 412.156px;
                left: 306.5px;
            }

            #HEADLINE492 {
                top: 416.656px;
                left: 361px;
            }

            #HEADLINE493 {
                top: 464.767px;
                left: 350px;
            }

            #GROUP685,
            #BOX476,
            #GROUP683,
            #BOX479,
            #GROUP684,
            #BOX478,
            #GROUP690,
            #BOX518,
            #GROUP689,
            #BOX524,
            #GROUP686,
            #BOX508,
            #GROUP687,
            #BOX512,
            #GROUP688,
            #BOX515 {
                width: 281px;
                height: 69px;
            }

            #GROUP685 {
                top: 277.156px;
                left: 0px;
            }

            #IMAGE481,
            #IMAGE481>.ladi-image>.ladi-image-background,
            #IMAGE483,
            #IMAGE483>.ladi-image>.ladi-image-background,
            #IMAGE488,
            #IMAGE488>.ladi-image>.ladi-image-background,
            #IMAGE520,
            #IMAGE520>.ladi-image>.ladi-image-background,
            #IMAGE525,
            #IMAGE525>.ladi-image>.ladi-image-background,
            #IMAGE509,
            #IMAGE509>.ladi-image>.ladi-image-background,
            #IMAGE513,
            #IMAGE513>.ladi-image>.ladi-image-background,
            #IMAGE516,
            #IMAGE516>.ladi-image>.ladi-image-background {
                width: 55.9792px;
                height: 55.9792px;
            }

            #IMAGE481,
            #IMAGE488,
            #IMAGE509 {
                top: 6.51px;
                left: 10px;
            }

            #IMAGE481>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/click-icon-20230118090203-jgkt-.png");
            }

            #HEADLINE482,
            #HEADLINE487,
            #HEADLINE489,
            #HEADLINE521,
            #HEADLINE526,
            #HEADLINE510,
            #HEADLINE514,
            #HEADLINE517 {
                width: 200px;
            }

            #HEADLINE482,
            #HEADLINE510 {
                top: 20px;
                left: 74px;
            }

            #SHAPE485,
            #SHAPE531 {
                width: 21.7632px;
                height: 57.2765px;
            }

            #SHAPE485 {
                top: 283.018px;
                left: 302px;
            }

            #GROUP683 {
                top: 277.156px;
                left: 339.5px;
            }

            #IMAGE483 {
                top: 6.51px;
                left: 10.5px;
            }

            #IMAGE483>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/calling-icon-20230118091151-cjnhu.png");
            }

            #HEADLINE487 {
                top: 13px;
                left: 75.5px;
            }

            #GROUP684 {
                top: 277.156px;
                left: 679px;
            }

            #IMAGE488>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/nhan-sp-20230118091600-p1hj-.png");
            }

            #HEADLINE489 {
                top: 13px;
                left: 75px;
            }

            #SHAPE531 {
                top: 283.666px;
                left: 640.938px;
            }

            #SHAPE643 {
                top: 519.018px;
                left: 299px;
            }

            #SHAPE644 {
                top: 519.018px;
                left: 637px;
            }

            #SHAPE645 {
                top: 604.018px;
                left: 471.072px;
            }

            #SHAPE646 {
                top: 604.018px;
                left: 141.072px;
            }

            #GROUP690 {
                top: 598.156px;
                left: 172.453px;
            }

            #IMAGE520 {
                top: 6.51px;
                left: 13.547px;
            }

            #IMAGE520>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/infor-icon-20230118093910-jsyg1.png");
            }

            #HEADLINE521 {
                top: 13px;
                left: 75.547px;
            }

            #GROUP689 {
                top: 598.156px;
                left: 510.454px;
            }

            #IMAGE525 {
                top: 6.51px;
                left: 10.546px;
            }

            #IMAGE525>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/pay-icon-20230118094328-qvw21.png");
            }

            #HEADLINE526 {
                top: 23.5px;
                left: 74.546px;
            }

            #GROUP686 {
                top: 513.156px;
                left: 0px;
            }

            #IMAGE509>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/bank-icon-20230118093135-kcstl.png");
            }

            #GROUP687 {
                top: 513.156px;
                left: 335.5px;
            }

            #IMAGE513 {
                top: 6.51px;
                left: 14.5px;
            }

            #IMAGE513>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/bank-card-icon-20230118093335-y_vrx.png");
            }

            #HEADLINE514 {
                top: 12.9996px;
                left: 81px;
            }

            #GROUP688 {
                top: 513.156px;
                left: 679px;
            }

            #IMAGE516 {
                top: 6.101px;
                left: 10px;
            }

            #IMAGE516>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/money-icon-20230118093553-u9m1g.png");
            }

            #HEADLINE517 {
                top: 20px;
                left: 75px;
            }

            #HEADLINE693 {
                width: 811px;
                top: 53.2px;
                left: 74.5px;
            }

            #HEADLINE693>.ladi-headline {
                font-size: 18px;
                text-align: center;
            }

            #thanhtoanhinhthuckhac {
                height: 696.8px;
            }

            #HEADLINE530 {
                top: 10.4px;
                left: 0px;
            }

            #HEADLINE534 {
                top: 55.4px;
                left: 0px;
            }

            #HEADLINE534>.ladi-headline,
            #HEADLINE581>.ladi-headline {
                font-size: 16px;
                text-align: center;
            }

            #GROUP691,
            #BOX579 {
                width: 960px;
                height: 57px;
            }

            #GROUP691 {
                top: 483.4px;
                left: 0px;
            }

            #HEADLINE580 {
                width: 932px;
                top: 15px;
                left: 20px;
            }

            #HEADLINE581,
            #HEADLINE582 {
                width: 567px;
            }

            #HEADLINE581 {
                top: 559.3px;
                left: 196.5px;
            }

            #HEADLINE582 {
                top: 588.3px;
                left: 196.5px;
            }

            #GROUP590 {
                top: 622.8px;
                left: 380px;
            }

            #GROUP590.ladi-animation>.ladi-group {
                animation-name: pulse;
                animation-iteration-count: infinite;
            }

            #HEADLINE587 {
                top: 3.5px;
            }

            #HEADLINE587>.ladi-headline {
                font-size: 27px;
            }

            #GROUP562,
            #BOX540,
            #GROUP563,
            #BOX558,
            #GROUP564,
            #BOX565,
            #GROUP569,
            #BOX570,
            #GROUP574,
            #BOX575 {
                width: 470px;
                height: 100px;
            }

            #GROUP562 {
                top: 120.467px;
                left: -1.4175px;
            }

            #IMAGE554,
            #IMAGE554>.ladi-image>.ladi-image-background,
            #IMAGE559,
            #IMAGE559>.ladi-image>.ladi-image-background,
            #IMAGE566,
            #IMAGE566>.ladi-image>.ladi-image-background,
            #IMAGE571,
            #IMAGE571>.ladi-image>.ladi-image-background,
            #IMAGE576,
            #IMAGE576>.ladi-image>.ladi-image-background {
                width: 60px;
                height: 60px;
            }

            #IMAGE554,
            #IMAGE566 {
                top: 20px;
                left: 18.021px;
            }

            #HEADLINE556,
            #HEADLINE560,
            #HEADLINE567,
            #HEADLINE572,
            #HEADLINE577 {
                width: 254px;
            }

            #HEADLINE556 {
                top: 9.995px;
                left: 101.699px;
            }

            #HEADLINE556>.ladi-headline,
            #HEADLINE560>.ladi-headline,
            #HEADLINE567>.ladi-headline,
            #HEADLINE572>.ladi-headline,
            #HEADLINE577>.ladi-headline {
                font-size: 21px;
            }

            #HEADLINE557,
            #HEADLINE561,
            #HEADLINE568,
            #HEADLINE573,
            #HEADLINE578 {
                width: 345px;
            }

            #HEADLINE557 {
                top: 46.995px;
                left: 101.699px;
            }

            #HEADLINE557>.ladi-headline {
                font-size: 17px;
            }

            #GROUP563 {
                top: 120.467px;
                left: 488.582px;
            }

            #IMAGE559 {
                top: 20px;
                left: 19.021px;
            }

            #HEADLINE560 {
                top: 20.504px;
                left: 104px;
            }

            #HEADLINE561 {
                top: 57.504px;
                left: 104px;
            }

            #GROUP564 {
                top: 240.467px;
                left: -1.4175px;
            }

            #HEADLINE567 {
                top: 22.005px;
                left: 100.699px;
            }

            #HEADLINE568 {
                top: 59.005px;
                left: 100.699px;
            }

            #GROUP569 {
                top: 240.467px;
                left: 491.418px;
            }

            #IMAGE571 {
                top: 20px;
                left: 21.021px;
            }

            #HEADLINE572 {
                top: 20.497px;
                left: 107px;
            }

            #HEADLINE573 {
                top: 57.497px;
                left: 107px;
            }

            #GROUP574 {
                top: 359.4px;
                left: -1.4175px;
            }

            #IMAGE576 {
                top: 20px;
                left: 17.021px;
            }

            #HEADLINE577 {
                top: 9.998px;
                left: 101.699px;
            }

            #HEADLINE578 {
                top: 46.998px;
                left: 101.699px;
            }
        }

        @media (max-width: 767px) {
            #Header {
                height: 489.154px;
            }

            #IMAGE29,
            #IMAGE29>.ladi-image>.ladi-image-background {
                width: 400px;
                height: 170.068px;
            }

            #IMAGE29 {
                top: 150.086px;
                left: 10px;
            }

            #IMAGE29>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s750x500/5d3c13acdc09063fd1918045/technology-20230118015051-no9qp.png");
            }

            #IMAGE30,
            #IMAGE30>.ladi-image>.ladi-image-background {
                width: 400px;
                height: 116.009px;
            }

            #IMAGE30 {
                top: 20.3159px;
                left: 12.767px;
            }

            #IMAGE30>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/logo-hacom-20230118015050-blsof.png");
            }

            #IMAGE31 {
                width: 420px;
                height: 323.23px;
                top: 159.798px;
                left: 0px;
            }

            #IMAGE31>.ladi-image>.ladi-image-background {
                width: 420px;
                height: 445.23px;
                background-image: url("https://w.ladicdn.com/s750x750/5d3c13acdc09063fd1918045/bg-header-20230118014927-fpgqj.png");
            }

            #IMAGE32,
            #IMAGE32>.ladi-image>.ladi-image-background {
                width: 316.653px;
                height: 257.023px;
            }

            #IMAGE32 {
                top: 184.325px;
                left: 51.6735px;
            }

            #IMAGE32>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s650x600/5d3c13acdc09063fd1918045/pay-mobiles-20230118020027-tjakh.png");
            }

            #HEADLINE35 {
                width: 357px;
                top: 41.16px;
                left: 31.5px;
            }

            #HEADLINE35>.ladi-headline {
                font-size: 21px;
                text-align: center;
            }

            #HEADLINE36 {
                width: 343px;
                top: 75.16px;
                left: 31.5px;
            }

            #HEADLINE36>.ladi-headline {
                font-size: 14px;
                color: rgb(0, 0, 0);
                text-align: center;
            }

            #IMAGE692,
            #IMAGE692>.ladi-image>.ladi-image-background {
                width: 400px;
                height: 250px;
            }

            #IMAGE692 {
                top: 239.154px;
                left: 12.767px;
            }

            #IMAGE692>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/kinh-doanh-hacom-20230130050428-0weus.png");
            }

            #Cachinhthucthanhtoan {
                height: 667.276px;
            }

            #GROUP649,
            #BOX41,
            #GROUP648,
            #BOX48,
            #GROUP651,
            #BOX115,
            #GROUP650,
            #BOX116 {
                width: 394.466px;
                height: 150.069px;
            }

            #GROUP649 {
                top: 172.069px;
                left: 12.767px;
            }

            #GROUP114,
            #GROUP117,
            #GROUP129 {
                width: 365.317px;
                height: 97.4577px;
                top: 26.3057px;
                left: 14.5747px;
            }

            #IMAGE42,
            #IMAGE42>.ladi-image>.ladi-image-background,
            #IMAGE118,
            #IMAGE118>.ladi-image>.ladi-image-background,
            #IMAGE124,
            #IMAGE124>.ladi-image>.ladi-image-background,
            #IMAGE130,
            #IMAGE130>.ladi-image>.ladi-image-background {
                width: 54.0247px;
                height: 54.0248px;
            }

            #HEADLINE43,
            #HEADLINE44,
            #HEADLINE119,
            #HEADLINE120,
            #HEADLINE125,
            #HEADLINE126,
            #HEADLINE131,
            #HEADLINE132 {
                width: 298px;
            }

            #HEADLINE43,
            #HEADLINE119,
            #HEADLINE125,
            #HEADLINE131 {
                left: 67.3165px;
            }

            #HEADLINE44,
            #HEADLINE120,
            #HEADLINE132 {
                top: 29.1562px;
                left: 67.3165px;
            }

            #HEADLINE44>.ladi-headline,
            #HEADLINE120>.ladi-headline,
            #HEADLINE126>.ladi-headline,
            #HEADLINE132>.ladi-headline,
            #HEADLINE138>.ladi-headline,
            #HEADLINE386>.ladi-headline,
            #HEADLINE392>.ladi-headline,
            #HEADLINE462>.ladi-headline,
            #HEADLINE397>.ladi-headline,
            #HEADLINE403>.ladi-headline,
            #HEADLINE414>.ladi-headline,
            #HEADLINE422>.ladi-headline,
            #HEADLINE425>.ladi-headline,
            #HEADLINE419>.ladi-headline,
            #HEADLINE474>.ladi-headline,
            #HEADLINE493>.ladi-headline,
            #HEADLINE482>.ladi-headline,
            #HEADLINE487>.ladi-headline,
            #HEADLINE489>.ladi-headline,
            #HEADLINE521>.ladi-headline,
            #HEADLINE526>.ladi-headline,
            #HEADLINE510>.ladi-headline,
            #HEADLINE514>.ladi-headline,
            #HEADLINE517>.ladi-headline,
            #HEADLINE580>.ladi-headline,
            #HEADLINE582>.ladi-headline,
            #HEADLINE557>.ladi-headline,
            #HEADLINE561>.ladi-headline,
            #HEADLINE568>.ladi-headline,
            #HEADLINE573>.ladi-headline,
            #HEADLINE578>.ladi-headline {
                font-size: 14px;
            }

            #BUTTON112,
            #BUTTON121,
            #BUTTON127,
            #BUTTON133 {
                width: 137.206px;
                height: 34.3015px;
            }

            #BUTTON112 {
                top: 63.1562px;
                left: 50.1631px;
            }

            #BUTTON_TEXT112,
            #BUTTON_TEXT121,
            #BUTTON_TEXT127,
            #BUTTON_TEXT133 {
                width: 137px;
                top: 7.71784px;
            }

            #GROUP648 {
                top: 10px;
                left: 12.767px;
            }

            #BUTTON121,
            #BUTTON133 {
                top: 63.1562px;
                left: 54.0247px;
            }

            #BUTTON_TEXT121>.ladi-headline,
            #BUTTON_TEXT133>.ladi-headline {
                font-size: 17px;
            }

            #GROUP651 {
                top: 334.207px;
                left: 12.767px;
            }

            #GROUP123 {
                width: 365.317px;
                height: 98.3153px;
                top: 25.8768px;
                left: 14.5747px;
            }

            #HEADLINE125>.ladi-headline,
            #HEADLINE137>.ladi-headline,
            #HEADLINE473>.ladi-headline,
            #HEADLINE492>.ladi-headline {
                font-size: 21px;
            }

            #HEADLINE126 {
                top: 30.0138px;
                left: 67.3165px;
            }

            #BUTTON127 {
                top: 64.0138px;
                left: 54.0247px;
            }

            #GROUP650 {
                top: 498.138px;
                left: 12.767px;
            }

            #Thanhtoantructiep {
                height: 2131.75px;
            }

            #HEADLINE137,
            #HEADLINE138,
            #HEADLINE386,
            #HEADLINE391,
            #HEADLINE392,
            #HEADLINE462,
            #HEADLINE465,
            #HEADLINE530,
            #HEADLINE534,
            #HEADLINE581 {
                width: 400px;
            }

            #HEADLINE137,
            #HEADLINE391,
            #HEADLINE465,
            #HEADLINE530 {
                top: 10px;
                left: 10px;
            }

            #HEADLINE138 {
                top: 86px;
                left: 12.767px;
            }

            #IMAGE388,
            #IMAGE388>.ladi-image>.ladi-image-background {
                width: 400px;
                height: 22.6667px;
            }

            #IMAGE388 {
                top: 1913.67px;
                left: 8.92895px;
            }

            #IMAGE388>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s750x350/5d3c13acdc09063fd1918045/chinh-sach-thanh-toan-20230118044102-_nu2z.png");
            }

            #GROUP654,
            #BOX389 {
                width: 410px;
                height: 155.417px;
            }

            #GROUP654 {
                top: 1948.34px;
                left: 3.92895px;
            }

            #HEADLINE386 {
                top: 7.41px;
                left: 5px;
            }

            #GROUP672,
            #GROUP665,
            #GROUP666,
            #GROUP667,
            #GROUP657,
            #GROUP663,
            #GROUP664,
            #GROUP668 {
                height: 82px;
            }

            #GROUP672 {
                top: 1512.67px;
                left: 61.4289px;
            }

            #BUTTON343 {
                height: 20px;
            }

            #HEADLINE345 {
                top: 63px;
            }

            #GROUP665 {
                top: 1006.67px;
                left: 55.767px;
            }

            #GROUP666 {
                top: 1385.67px;
                left: 60.6619px;
            }

            #GROUP667 {
                top: 1783.67px;
                left: 61.4289px;
            }

            #GROUP660 {
                height: 101px;
                top: 1639.67px;
                left: 60.6619px;
            }

            #GROUP659 {
                top: 1270.67px;
                left: 60.6619px;
            }

            #GROUP658 {
                top: 912.667px;
                left: 55.767px;
            }

            #GROUP657 {
                top: 694.667px;
                left: 58.5454px;
            }

            #GROUP656 {
                top: 408.667px;
                left: 60px;
            }

            #GROUP655 {
                top: 130.667px;
                left: 60.767px;
            }

            #GROUP662 {
                top: 219.667px;
                left: 60.767px;
            }

            #GROUP663 {
                top: 493.667px;
                left: 60px;
            }

            #GROUP664 {
                top: 804.667px;
                left: 54.3124px;
            }

            #GROUP668 {
                top: 306.667px;
                left: 60.767px;
            }

            #GROUP669 {
                top: 601.667px;
                left: 60.767px;
            }

            #GROUP671 {
                height: 137px;
                top: 1128.67px;
                left: 56.4289px;
            }

            #BUTTON316 {
                height: 40px;
                top: 43px;
            }

            #HEADLINE318 {
                top: 79px;
            }

            #thanhtoanchuyenkhoan {
                height: 1514.53px;
            }

            #HEADLINE391>.ladi-headline,
            #HEADLINE465>.ladi-headline,
            #HEADLINE530>.ladi-headline,
            #HEADLINE587>.ladi-headline {
                font-size: 24px;
            }

            #HEADLINE392 {
                top: 56px;
                left: 10.767px;
            }

            #GROUP460 {
                width: 397.858px;
                height: 91.1758px;
                top: 186.824px;
                left: 10px;
            }

            #BOX436,
            #BOX445,
            #BOX447,
            #BOX448,
            #BOX454 {
                width: 93.2479px;
                height: 41.4435px;
            }

            #BOX436 {
                left: 203.073px;
            }

            #BOX445 {
                left: 304.61px;
            }

            #BOX448 {
                top: 49.7323px;
                left: 0px;
            }

            #IMAGE449,
            #IMAGE449>.ladi-image>.ladi-image-background {
                width: 66.5749px;
                height: 13.7955px;
            }

            #IMAGE449 {
                top: 13.8243px;
                left: 13.3365px;
            }

            #IMAGE449>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x350/5d3c13acdc09063fd1918045/logo-vietcombank-20230118081810-6cb2m.png");
            }

            #IMAGE451,
            #IMAGE451>.ladi-image>.ladi-image-background {
                width: 66.5749px;
                height: 22.1917px;
            }

            #IMAGE451 {
                top: 9.62611px;
                left: 216.41px;
            }

            #IMAGE451>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x350/5d3c13acdc09063fd1918045/logo-techcombank-20230118080838-dr0ad.png");
            }

            #IMAGE452,
            #IMAGE452>.ladi-image>.ladi-image-background {
                width: 29.5806px;
                height: 12.1833px;
            }

            #IMAGE452 {
                top: 13.8243px;
                left: 336.444px;
            }

            #IMAGE452>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/logo-acb-20230118080838-ou0ah.png");
            }

            #IMAGE453,
            #IMAGE453>.ladi-image>.ladi-image-background {
                width: 66.5749px;
                height: 17.1058px;
            }

            #IMAGE453 {
                top: 63.5562px;
                left: 13.3365px;
            }

            #IMAGE453>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x350/5d3c13acdc09063fd1918045/logo-tpbank-20230118080838-56mjb.png");
            }

            #BOX454 {
                top: 49.7323px;
                left: 101.536px;
            }

            #IMAGE455,
            #IMAGE455>.ladi-image>.ladi-image-background {
                width: 47.7666px;
                height: 21.4779px;
            }

            #IMAGE455 {
                top: 61.37px;
                left: 124.277px;
            }

            #IMAGE455>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/logo-mb-bank-20230118080838-mogve.png");
            }

            #GROUP682,
            #BOX461 {
                width: 408px;
                height: 104.417px;
            }

            #GROUP682 {
                top: 1397.11px;
                left: 6.0005px;
            }

            #HEADLINE462 {
                top: 5.42px;
                left: 8px;
            }

            #BOX396 {
                width: 398.445px;
                height: 122.9px;
                top: 292.1px;
                left: 10px;
            }

            #HEADLINE397 {
                width: 378px;
                top: 298.05px;
                left: 21.767px;
            }

            #GROUP694,
            #GROUP674,
            #BOX393 {
                width: 396.024px;
                height: 176.947px;
            }

            #GROUP694 {
                top: 429.053px;
                left: 12.755px;
            }

            #BOX393>.ladi-box {
                background-image: url("https://w.ladicdn.com/s700x500/5d3c13acdc09063fd1918045/vietcombank-20230118070120-u7eaz.png");
            }

            #HEADLINE400 {
                width: 321px;
                top: 13.903px;
                left: 8.00474px;
            }

            #HEADLINE400>.ladi-headline,
            #HEADLINE413>.ladi-headline,
            #HEADLINE421>.ladi-headline,
            #HEADLINE424>.ladi-headline,
            #HEADLINE418>.ladi-headline {
                font-size: 15px;
            }

            #HEADLINE403,
            #HEADLINE414,
            #HEADLINE422,
            #HEADLINE425 {
                width: 230px;
            }

            #HEADLINE403 {
                top: 66.1445px;
                left: 13.9029px;
            }

            #IMAGE694 {
                top: 18.947px;
                left: 318.012px;
            }

            #GROUP695,
            #GROUP677,
            #BOX412,
            #GROUP696,
            #GROUP678,
            #BOX420,
            #GROUP698,
            #GROUP679,
            #BOX423 {
                width: 398.13px;
                height: 177.888px;
            }

            #GROUP695 {
                top: 618.112px;
                left: 12.935px;
            }

            #BOX412>.ladi-box {
                background-image: url("https://w.ladicdn.com/s700x500/5d3c13acdc09063fd1918045/techcombank-20230118071326-x2r8i.png");
            }

            #HEADLINE413,
            #HEADLINE421,
            #HEADLINE424 {
                width: 323px;
            }

            #HEADLINE413 {
                top: 9.6711px;
                left: 9.04731px;
            }

            #HEADLINE414 {
                top: 64.6711px;
                left: 14.9769px;
            }

            #IMAGE695 {
                top: 10.888px;
                left: 316.065px;
            }

            #GROUP696 {
                top: 1009.11px;
                left: 10.587px;
            }

            #BOX420>.ladi-box {
                background-image: url("https://w.ladicdn.com/s700x500/5d3c13acdc09063fd1918045/tpbank-20230118073616-69k12.png");
            }

            #HEADLINE421,
            #HEADLINE424 {
                top: 10.5886px;
                left: 8.04731px;
            }

            #HEADLINE422 {
                top: 53.7899px;
                left: 14.824px;
            }

            #IMAGE696 {
                top: 25.888px;
                left: 314.413px;
            }

            #GROUP698 {
                top: 1203.11px;
                left: 11.587px;
            }

            #BOX423>.ladi-box {
                background-image: url("https://w.ladicdn.com/s700x500/5d3c13acdc09063fd1918045/mbbank-20230118074736-jhgda.png");
            }

            #HEADLINE425 {
                top: 63.1079px;
                left: 14.824px;
            }

            #IMAGE698 {
                top: 22.888px;
                left: 313.413px;
            }

            #GROUP699,
            #GROUP676,
            #BOX416 {
                width: 399.434px;
                height: 178.47px;
            }

            #GROUP699 {
                top: 815.53px;
                left: 12.935px;
            }

            #BOX416>.ladi-box {
                background-image: url("https://w.ladicdn.com/s700x500/5d3c13acdc09063fd1918045/acb-20230118072920-ygn53.png");
            }

            #HEADLINE418 {
                width: 324px;
                top: 15.7224px;
                left: 8.07367px;
            }

            #HEADLINE419 {
                width: 231px;
                top: 64.164px;
                left: 14.8725px;
            }

            #IMAGE699 {
                top: 22.47px;
                left: 316.065px;
            }

            #thanhtoantragop {
                height: 882.788px;
            }

            #GROUP480 {
                top: 102px;
                left: 36.5005px;
            }

            #BOX491 {
                top: 441.793px;
                left: 36.5005px;
            }

            #HEADLINE492 {
                top: 448.293px;
                left: 88.9548px;
            }

            #HEADLINE493 {
                top: 494.788px;
                left: 77.9548px;
            }

            #GROUP685,
            #BOX476,
            #GROUP683,
            #BOX479,
            #GROUP684,
            #BOX478 {
                width: 224.136px;
                height: 55.0368px;
            }

            #GROUP685 {
                top: 238.611px;
                left: 95.0005px;
            }

            #IMAGE481,
            #IMAGE481>.ladi-image>.ladi-image-background,
            #IMAGE483,
            #IMAGE483>.ladi-image>.ladi-image-background,
            #IMAGE488,
            #IMAGE488>.ladi-image>.ladi-image-background {
                width: 44.651px;
                height: 44.651px;
            }

            #IMAGE481 {
                top: 5.19261px;
                left: 7.97635px;
            }

            #IMAGE481>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/click-icon-20230118090203-jgkt-.png");
            }

            #HEADLINE482,
            #HEADLINE487,
            #HEADLINE489 {
                width: 160px;
            }

            #HEADLINE482 {
                top: 15.9527px;
                left: 59.0251px;
            }

            #SHAPE485,
            #SHAPE531 {
                width: 20.6643px;
                height: 54.3844px;
            }

            #SHAPE485 {
                top: 303.611px;
                left: 68.2905px;
            }

            #GROUP683 {
                top: 303.611px;
                left: 97.9325px;
            }

            #IMAGE483 {
                top: 5.19261px;
                left: 8.375px;
            }

            #IMAGE483>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/calling-icon-20230118091151-cjnhu.png");
            }

            #HEADLINE487 {
                top: 10.3693px;
                left: 60.221px;
            }

            #GROUP684 {
                top: 368.611px;
                left: 97.933px;
            }

            #IMAGE488 {
                top: 5.19261px;
                left: 7.977px;
            }

            #IMAGE488>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/nhan-sp-20230118091600-p1hj-.png");
            }

            #HEADLINE489 {
                top: 10.3693px;
                left: 59.824px;
            }

            #SHAPE531 {
                top: 368.611px;
                left: 68.2905px;
            }

            #SHAPE643 {
                top: 603.26px;
                left: 68.2905px;
            }

            #SHAPE644 {
                top: 737.928px;
                left: 67.1916px;
            }

            #SHAPE645 {
                top: 669.508px;
                left: 67.1916px;
            }

            #SHAPE646 {
                top: 810.65px;
                left: 67.1916px;
            }

            #GROUP690,
            #BOX518 {
                width: 231.56px;
                height: 56.86px;
            }

            #GROUP690 {
                top: 737.928px;
                left: 97.933px;
            }

            #IMAGE520,
            #IMAGE520>.ladi-image>.ladi-image-background {
                width: 46.13px;
                height: 46.1301px;
            }

            #IMAGE520 {
                top: 5.36462px;
                left: 11.1635px;
            }

            #IMAGE520>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/infor-icon-20230118093910-jsyg1.png");
            }

            #HEADLINE521 {
                width: 165px;
                top: 11.43px;
                left: 62.6283px;
            }

            #GROUP689,
            #BOX524 {
                width: 232.7px;
                height: 57.14px;
            }

            #GROUP689 {
                top: 807.648px;
                left: 97.933px;
            }

            #IMAGE525,
            #IMAGE525>.ladi-image>.ladi-image-background {
                width: 46.3572px;
                height: 46.3573px;
            }

            #IMAGE525 {
                top: 5.39103px;
                left: 8.73329px;
            }

            #IMAGE525>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/pay-icon-20230118094328-qvw21.png");
            }

            #HEADLINE526 {
                width: 166px;
                top: 19.4607px;
                left: 61.7326px;
            }

            #GROUP686,
            #BOX508 {
                width: 228.057px;
                height: 55.9999px;
            }

            #GROUP686 {
                top: 533.788px;
                left: 97.933px;
            }

            #IMAGE509,
            #IMAGE509>.ladi-image>.ladi-image-background {
                width: 45.4322px;
                height: 45.4323px;
            }

            #IMAGE509 {
                top: 5.28347px;
                left: 8.11591px;
            }

            #IMAGE509>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/bank-icon-20230118093135-kcstl.png");
            }

            #HEADLINE510,
            #HEADLINE514 {
                width: 162px;
            }

            #HEADLINE510 {
                top: 16.2319px;
                left: 60.0577px;
            }

            #GROUP687,
            #BOX512 {
                width: 228.058px;
                height: 55.9999px;
            }

            #GROUP687 {
                top: 603.26px;
                left: 97.933px;
            }

            #IMAGE513,
            #IMAGE513>.ladi-image>.ladi-image-background {
                width: 45.4324px;
                height: 45.4323px;
            }

            #IMAGE513 {
                top: 4px;
                left: 7.90604px;
            }

            #IMAGE513>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/bank-card-icon-20230118093335-y_vrx.png");
            }

            #HEADLINE514 {
                top: 10.3024px;
                left: 58.9805px;
            }

            #GROUP688,
            #BOX515 {
                width: 229.198px;
                height: 56.28px;
            }

            #GROUP688 {
                top: 669.508px;
                left: 97.363px;
            }

            #IMAGE516,
            #IMAGE516>.ladi-image>.ladi-image-background {
                width: 45.6595px;
                height: 45.6596px;
            }

            #IMAGE516 {
                top: 4.97629px;
                left: 8.15651px;
            }

            #IMAGE516>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/money-icon-20230118093553-u9m1g.png");
            }

            #HEADLINE517 {
                width: 163px;
                top: 17.14px;
                left: 60.2521px;
            }

            #HEADLINE693 {
                width: 354px;
                top: 58px;
                left: 36.5px;
            }

            #HEADLINE693>.ladi-headline,
            #HEADLINE534>.ladi-headline,
            #HEADLINE581>.ladi-headline {
                font-size: 14px;
                text-align: left;
            }

            #thanhtoanhinhthuckhac {
                height: 882.35px;
            }

            #HEADLINE534 {
                top: 91px;
                left: 9.9995px;
            }

            #GROUP691,
            #BOX579 {
                width: 400px;
                height: 82.4167px;
            }

            #GROUP691 {
                top: 651.933px;
                left: 9.999px;
            }

            #HEADLINE580 {
                width: 377px;
                top: 8.417px;
                left: 18.5px;
            }

            #HEADLINE581 {
                top: 748.35px;
                left: 10.249px;
            }

            #HEADLINE582 {
                width: 399px;
                top: 777.35px;
                left: 9.999px;
            }

            #GROUP590 {
                top: 809.35px;
                left: 109.499px;
            }

            #GROUP590.ladi-animation>.ladi-group {
                animation-name: tada;
                animation-iteration-count: 1;
            }

            #HEADLINE587 {
                top: 6px;
            }

            #GROUP562,
            #BOX540 {
                width: 399.501px;
                height: 85px;
            }

            #GROUP562 {
                top: 172px;
                left: 9.999px;
            }

            #IMAGE554,
            #IMAGE554>.ladi-image>.ladi-image-background {
                width: 51.0001px;
                height: 51px;
            }

            #IMAGE554 {
                top: 17px;
                left: 15.3178px;
            }

            #HEADLINE556,
            #HEADLINE560,
            #HEADLINE567,
            #HEADLINE572,
            #HEADLINE577 {
                width: 216px;
            }

            #HEADLINE556 {
                top: 17px;
                left: 86.4444px;
            }

            #HEADLINE556>.ladi-headline,
            #HEADLINE560>.ladi-headline,
            #HEADLINE567>.ladi-headline,
            #HEADLINE572>.ladi-headline,
            #HEADLINE577>.ladi-headline {
                font-size: 18px;
            }

            #HEADLINE557,
            #HEADLINE561,
            #HEADLINE568,
            #HEADLINE573,
            #HEADLINE578 {
                width: 293px;
            }

            #HEADLINE557 {
                top: 39.9458px;
                left: 86.4444px;
            }

            #GROUP563,
            #BOX558 {
                width: 399.5px;
                height: 85.0001px;
            }

            #GROUP563 {
                top: 267px;
                left: 10.2495px;
            }

            #IMAGE559,
            #IMAGE559>.ladi-image>.ladi-image-background {
                width: 51px;
                height: 51.0001px;
            }

            #IMAGE559 {
                top: 17px;
                left: 16.1679px;
            }

            #HEADLINE560 {
                top: 22.9534px;
                left: 88.4px;
            }

            #HEADLINE561 {
                top: 47.6035px;
                left: 88.4px;
            }

            #GROUP564,
            #BOX565 {
                width: 399.25px;
                height: 84.9468px;
            }

            #GROUP564 {
                top: 363.053px;
                left: 10.3745px;
            }

            #IMAGE566,
            #IMAGE566>.ladi-image>.ladi-image-background {
                width: 50.9681px;
                height: 50.9681px;
            }

            #IMAGE566 {
                top: 16.9894px;
                left: 15.3083px;
            }

            #HEADLINE567 {
                top: 21.235px;
                left: 85.5406px;
            }

            #HEADLINE568 {
                top: 45.8696px;
                left: 85.5406px;
            }

            #GROUP569,
            #BOX570 {
                width: 399.375px;
                height: 84.9734px;
            }

            #GROUP569 {
                top: 458.027px;
                left: 10.3745px;
            }

            #IMAGE571,
            #IMAGE571>.ladi-image>.ladi-image-background {
                width: 50.984px;
                height: 50.984px;
            }

            #IMAGE571 {
                top: 16.9947px;
                left: 17.8623px;
            }

            #HEADLINE572 {
                top: 22.9437px;
                left: 90.0718px;
            }

            #HEADLINE573 {
                top: 47.586px;
                left: 90.0718px;
            }

            #GROUP574,
            #BOX575 {
                width: 399.75px;
                height: 85.0532px;
            }

            #GROUP574 {
                top: 553.88px;
                left: 10.3745px;
            }

            #IMAGE576,
            #IMAGE576>.ladi-image>.ladi-image-background {
                width: 51.0319px;
                height: 51.0319px;
            }

            #IMAGE576 {
                top: 17.0106px;
                left: 14.4769px;
            }

            #HEADLINE577 {
                top: 15.3079px;
                left: 86.4982px;
            }

            #HEADLINE578 {
                top: 39.9733px;
                left: 86.4982px;
            }
        }
    </style>
    <style id="style_lazyload" type="text/css">
        body.lazyload .ladi-overlay,
        body.lazyload .ladi-box,
        body.lazyload .ladi-button-background,
        body.lazyload .ladi-collection-item:before,
        body.lazyload .ladi-countdown-background,
        body.lazyload .ladi-form-item-background,
        body.lazyload .ladi-form-label-container .ladi-form-label-item.image,
        body.lazyload .ladi-frame-background,
        body.lazyload .ladi-gallery-view-item,
        body.lazyload .ladi-gallery-control-item,
        body.lazyload .ladi-headline,
        body.lazyload .ladi-image-background,
        body.lazyload .ladi-image-compare,
        body.lazyload .ladi-list-paragraph ul li:before,
        body.lazyload .ladi-section-background,
        body.lazyload .ladi-survey-option-background,
        body.lazyload .ladi-survey-option-image,
        body.lazyload .ladi-tabs-background,
        body.lazyload .ladi-video-background,
        body.lazyload .ladi-banner,
        body.lazyload .ladi-spin-lucky-screen,
        body.lazyload .ladi-spin-lucky-start {
            background-image: none !important;
        }
    </style>
    <script>!function (e, t, r, n, c) { if (!e.ztrq) { c = e.ztrq = function () { c.queue ? c.queue.push(arguments) : c.call(c, arguments) }, e._ztrk || (e._ztrk = c), c.queue = []; var u = t.createElement(r); u.async = !0, u.src = n; var a = t.getElementsByTagName(r)[0]; a.parentNode.insertBefore(u, a) } }(window, document, "script", "https://s.zzcdn.me/ztr/ztracker.js?id=7056840457216708608"); window.LadiPageZaloAds = { auto_tracking: true }; ztrq("track", "ViewContent");</script>
    <style>
        .khaipv-buildpc a,
        khaipv-buildpc span,
        .khaipv-buildpc a .buildpc-link-right span {
        color: black !important;
        }
        .khaipv-copyright p {
        line-height: 2;
        }
        .header-2019 .header-top .header-top-item .top-header-span {
        font-size: 10px;
        }
        .links-group-container p {
        line-height: 2;
        }
        .footer-newsletter-title {
        line-height: 4;
        }
        .sep-item,
        .header-seo-links a,
        .khaipv-buildpc {
        color: white !important;
        }
        .showroom-container p {
        line-height: 2;
        }
        .header-2019 .taikhoan-text a {
        line-height: 1.5;
        }
        .header-hotline b {
        font-weight: 700;
        line-height: 1.5;
        }
    </style>
</head>

<body class="lazyload"><svg xmlns="http://www.w3.org/2000/svg"
        style="width: 0px; height: 0px; position: absolute; overflow: hidden; display: none;">
        <symbol id="shape_NdGXqnCpam" viewBox="0 0 720.451 1896.0833">
            <path
                d="M576 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45V448q0-26 19-45t45-19 45 19l448 448q19 19 19 45z">
            </path>
        </symbol>
    </svg>
    <div class="ladi-wraper">
        <div id="Header" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="IMAGE29" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="IMAGE30" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="IMAGE31" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="IMAGE32" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="HEADLINE35" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>HƯỚNG DẪN THANH TOÁN</h3>
                </div>
                <div id="HEADLINE36" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Trang nội dung mang đến cho quý khách hàng thông tin hướng
                        dẫn thanh toán khi mua hàng tại HACOM</h3>
                </div>
                <div id="IMAGE692" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Cachinhthucthanhtoan" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="GROUP649" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX41" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="GROUP114" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="IMAGE42" class='ladi-element'>
                                    <div class='ladi-image ladi-transition'>
                                        <div class="ladi-image-background"></div>
                                    </div>
                                </div>
                                <div id="HEADLINE43" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Thanh toán trực tiếp</h3>
                                </div>
                                <div id="HEADLINE44" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng vui lòng thanh toán trực
                                        tiếp tại Chi nhánh ngay khi mua hàng.&nbsp;</h3>
                                </div>
                                <div data-action="true" id="BUTTON112" class='ladi-element'>
                                    <div class='ladi-button ladi-transition'>
                                        <div class="ladi-button-background"></div>
                                        <div id="BUTTON_TEXT112" class='ladi-element ladi-button-headline'>
                                            <p class='ladi-headline ladi-transition'>Xem chi tiết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP648" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX48" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="GROUP117" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="IMAGE118" class='ladi-element'>
                                    <div class='ladi-image ladi-transition'>
                                        <div class="ladi-image-background"></div>
                                    </div>
                                </div>
                                <div id="HEADLINE119" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Thanh toán chuyển khoản</h3>
                                </div>
                                <div id="HEADLINE120" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng vui lòng chuyển khoản qua
                                        tài khoản chính thức của HACOM.&nbsp;</h3>
                                </div>
                                <div data-action="true" id="BUTTON121" class='ladi-element'>
                                    <div class='ladi-button ladi-transition'>
                                        <div class="ladi-button-background"></div>
                                        <div id="BUTTON_TEXT121" class='ladi-element ladi-button-headline'>
                                            <p class='ladi-headline ladi-transition'>Xem chi tiết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP651" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX115" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="GROUP123" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="IMAGE124" class='ladi-element'>
                                    <div class='ladi-image ladi-transition'>
                                        <div class="ladi-image-background"></div>
                                    </div>
                                </div>
                                <div id="HEADLINE125" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Thanh toán trả góp</h3>
                                </div>
                                <div id="HEADLINE126" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng có thể thanh toán trực tiếp
                                        qua cổng thanh toán ngân lượng.&nbsp;<br></h3>
                                </div>
                                <div data-action="true" id="BUTTON127" class='ladi-element'>
                                    <div class='ladi-button ladi-transition'>
                                        <div class="ladi-button-background"></div>
                                        <div id="BUTTON_TEXT127" class='ladi-element ladi-button-headline'>
                                            <p class='ladi-headline ladi-transition'>Xem chi tiết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP650" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX116" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="GROUP129" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="IMAGE130" class='ladi-element'>
                                    <div class='ladi-image ladi-transition'>
                                        <div class="ladi-image-background"></div>
                                    </div>
                                </div>
                                <div id="HEADLINE131" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Thanh toán hình thức khác</h3>
                                </div>
                                <div id="HEADLINE132" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng có thể thanh toán trực tiếp
                                        qua cổng thanh toán&nbsp;ngân lượng.<br></h3>
                                </div>
                                <div data-action="true" id="BUTTON133" class='ladi-element'>
                                    <div class='ladi-button ladi-transition'>
                                        <div class="ladi-button-background"></div>
                                        <div id="BUTTON_TEXT133" class='ladi-element ladi-button-headline'>
                                            <p class='ladi-headline ladi-transition'>Xem chi tiết</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="Thanhtoantructiep" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="HEADLINE137" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Thanh toán trực tiếp bằng tiền mặt hoặc quẹt thẻ ngân
                        hàng<br></h3>
                </div>
                <div id="HEADLINE138" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng có thể đến trực tiếp các chi nhánh HACOM
                        <br>để thanh toán bằng tiền mặt hoặc quẹt thẻ ngân hàng.<br>
                    </h3>
                </div>
                <div id="IMAGE388" class='ladi-element'>
                    <div class='ladi-image ladi-transition'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="GROUP654" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="HEADLINE386" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>- Ngay khi quý khách thanh toán xong, nhân viên kế
                                toán sẽ gửi lại quý khách HĐTC và nhân viên kinh doanh sẽ hướng dẫn quý khách hình thức
                                giao nhận hàng.<br>- Nếu địa điểm giao hàng không nằm trong phạm vi được giao hàng miễn
                                phí chúng tôi sẽ thu thêm chi phí vận chuyển (có thông báo trước với khách hàng).<br>
                            </h3>
                        </div>
                        <div id="BOX389" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP672" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE342" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+VINH+NGH%E1%BB%86+AN/@18.6785334,105.6761903,16z/data=!4m5!3m4!1s0x3139cfe902ac214f:0xb5b816b6531e0e81!8m2!3d18.6816899!4d105.6743803"
                            target="_blank" id="BUTTON343" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT343" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 156 Nguyễn Sỹ Sách - Thành Phố Vinh -
                                        Nghệ An</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE345" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa
                                nghỉ từ 12h đến 13h30)
                            </h3>
                        </div>
                        <div id="BOX346" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX347" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE348" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - VINH</h3>
                        </div>
                        <div id="HEADLINE349" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>14</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP665" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE306" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+%C4%90%C3%94NG+ANH/@21.1406222,105.8467489,17z/data=!3m1!4b1!4m5!3m4!1s0x313501d22a837f4d:0xf5785954f9b573c9!8m2!3d21.1406222!4d105.8489376?hl=vi-VN"
                            target="_blank" id="BUTTON307" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT307" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 77 Cao Lỗ - Đông Anh - Hà Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE309" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa
                                nghỉ từ 12h đến 13h30)</h3>
                        </div>
                        <div id="BOX310" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX311" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE312" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - ĐÔNG ANH</h3>
                        </div>
                        <div id="HEADLINE313" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>10</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP666" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE333" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+PH%E1%BB%A6+L%C3%9D/@20.5424012,105.9129829,15z/data=!4m5!3m4!1s0x0:0xad7e6525c164e77a!8m2!3d20.5422685!4d105.9128279"
                            target="_blank" id="BUTTON334" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT334" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>&nbsp;Số 145B Trường Chinh - Phủ Lý - Hà
                                        Nam</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE336" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa
                                nghỉ từ 12h đến 13h30)
                            </h3>
                        </div>
                        <div id="BOX337" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX338" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE339" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - PHỦ LÝ</h3>
                        </div>
                        <div id="HEADLINE340" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>13</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP667" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE360" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+THANH+H%C3%93A/@19.8617167,105.7355097,12.12z/data=!4m6!3m5!1s0x3136f7d9c91d2b81:0xd28061b6b3f8484c!8m2!3d19.8110861!4d105.7770846!16s%2Fg%2F11tfh4mzvd?shorturl=1"
                            target="_blank" id="BUTTON361" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT361" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 164 Lạc Long Quân - Đông Vệ - Thanh Hóa
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE363" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa
                                nghỉ từ 12h đến 13h30)
                            </h3>
                        </div>
                        <div id="BOX364" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX365" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE366" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - THANH HÓA</h3>
                        </div>
                        <div id="HEADLINE367" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>16</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP660" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE351" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+Th%C3%A1i+Nguy%C3%AAn/@21.5952408,105.8222472,17z/data=!3m1!4b1!4m5!3m4!1s0x3135273d95f81c13:0x152c171f9ce8d19d!8m2!3d21.5952358!4d105.8244359?shorturl=1"
                            target="_blank" id="BUTTON352" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT352" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 118 Lương Ngọc Quyến - Quang Trung -
                                        Thái Nguyên</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE354" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa
                                nghỉ từ 12h đến 13h30)
                            </h3>
                        </div>
                        <div id="BOX355" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX356" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE357" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - THÁI NGUYÊN</h3>
                        </div>
                        <div id="HEADLINE358" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>15</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP659" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE324" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+H%C3%80+%C4%90%C3%94NG+2/@20.9842097,105.7933684,15z/data=!4m5!3m4!1s0x0:0x689baf48a6c19c4a!8m2!3d20.9842097!4d105.7933684"
                            target="_blank" id="BUTTON325" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT325" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 57 Trần Phú - Hà Đông - Hà Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE327" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 9h-18h30 hàng ngày<br>(trưa
                                đóng cửa nghỉ từ 12h đến 13h30)<br></h3>
                        </div>
                        <div id="BOX328" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX329" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE330" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - HÀ ĐÔNG 2</h3>
                        </div>
                        <div id="HEADLINE331" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>12</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP658" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE297" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+THANH+TR%C3%8C/@20.9696075,105.826887,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ada660ac598b:0x2b67437cca19ba1e!8m2!3d20.9696025!4d105.8290757?gidzl=bHOi3Noi17cG32aEVh85UfK48GrXiWvqsLvm0cMrMdE8NoK4Pk0D88yDAGLckbObZGmhNMJQZXn1VQq8T0"
                            target="_blank" id="BUTTON298" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT298" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE300" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h-20h</h3>
                        </div>
                        <div id="BOX301" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX302" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE303" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - THANH TRÌ</h3>
                        </div>
                        <div id="HEADLINE304" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>9</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP657" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE270" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl"
                            target="_blank" id="BUTTON271" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT271" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 398 Nguyễn Văn Cừ - Long Biên - Hà Nội
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE273" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h hàng ngày<br>(trưa
                                đóng cửa nghỉ từ 12h đến 13h30)<br></h3>
                        </div>
                        <div id="BOX274" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX275" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE276" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - LONG BIÊN</h3>
                        </div>
                        <div id="HEADLINE277" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>7</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP656" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE216" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+C%E1%BA%A6U+GI%E1%BA%A4Y/@21.0353189,105.7978706,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab4764432ddb:0x63e02e8abee5b42d!8m2!3d21.035436!4d105.797729"
                            target="_blank" id="BUTTON217" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT217" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE219" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h-20h</h3>
                        </div>
                        <div id="BOX220" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX221" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE222" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - CẦU GIẤY</h3>
                        </div>
                        <div id="HEADLINE223" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>4</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP655" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE159" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575"
                            target="_blank" id="BUTTON160" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT160" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà
                                        Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE163" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h-20h</h3>
                        </div>
                        <div id="BOX142" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX143" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE144" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - HAI BÀ TRƯNG</h3>
                        </div>
                        <div id="HEADLINE146" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>1</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP662" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE189" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+%C4%90%E1%BB%90NG+%C4%90A/@21.0112649,105.8216092,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d94ae54b9:0x21aae6c934d53ad6!8m2!3d21.0112846!4d105.8216329"
                            target="_blank" id="BUTTON190" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT190" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 43 Thái Hà - Đống Đa - Hà Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE192" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h-21h30</h3>
                        </div>
                        <div id="BOX193" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX194" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE195" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - ĐỐNG ĐA</h3>
                        </div>
                        <div id="HEADLINE196" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>2<br><br></h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP663" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE252" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+H%C3%80+%C4%90%C3%94NG+1/@20.9628131,105.7658942,17z/data=!3m1!4b1!4m5!3m4!1s0x313453d657ddcc97:0xcff513b765db57d2!8m2!3d20.9629562!4d105.7661158"
                            target="_blank" id="BUTTON253" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT253" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 511 Quang Trung - Hà Đông - Hà Nội</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE255" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h-20h hàng ngày<br>(trưa
                                đóng cửa nghỉ từ 12h đến 13h30)<br></h3>
                        </div>
                        <div id="BOX256" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX257" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE258" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - HÀ ĐÔNG 1</h3>
                        </div>
                        <div id="HEADLINE259" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>5</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP664" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE279" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+-+T%E1%BB%AA+S%C6%A0N+t%E1%BB%89nh+B%E1%BA%AEC+NINH/@21.1237504,105.9679756,17z/data=!3m1!4b1!4m5!3m4!1s0x313509a55c6f4181:0x77c807a762169222!8m2!3d21.1237454!4d105.9701643?shorturl=1"
                            target="_blank" id="BUTTON280" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT280" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 299 Minh Khai - Từ Sơn - Bắc Ninh</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE282" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-19h hàng ngày<br>(trưa
                                đóng cửa nghỉ từ 12h đến 13h30)<br></h3>
                        </div>
                        <div id="BOX283" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX284" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE285" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - TỪ SƠN</h3>
                        </div>
                        <div id="HEADLINE286" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>8</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP668" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE207" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+H%E1%BA%A2I+PH%C3%92NG/@20.8499141,106.6729997,17z/data=!3m1!4b1!4m5!3m4!1s0x314a7abbbe6693df:0x67aa66d57ba2ba77!8m2!3d20.8499141!4d106.6729997?hl=vi-VN"
                            target="_blank" id="BUTTON208" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT208" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 406 Tô Hiệu - Lê Chân - Hải Phòng</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE210" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h hàng ngày<br>(trưa
                                đóng&nbsp; cửa nghỉ từ 12h đến 13h30)<br></h3>
                        </div>
                        <div id="BOX211" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX212" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE213" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - HẢI PHÒNG</h3>
                        </div>
                        <div id="HEADLINE214" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>3</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP669" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE261" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+QU%E1%BA%ACN+3+H%E1%BB%92+CH%C3%8D+MINH/@11.634788,106.5267121,7z/data=!4m5!3m4!1s0x31752ed17e3c9185:0x1e37f7c97db47fce!8m2!3d10.7855288!4d106.667641"
                            target="_blank" id="BUTTON262" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT262" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 478 Cách Mạng Tháng 8 - Quận 3 - TP. HCM
                                    </p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE264" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-20h30</h3>
                        </div>
                        <div id="BOX265" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX266" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE267" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - Q3, TP. HỒ CHÍ MINH</h3>
                        </div>
                        <div id="HEADLINE268" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>6</h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP671" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="IMAGE315" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div><a
                            href="https://www.google.com/maps/place/HACOM+B%E1%BA%AEC+GIANG/@21.2762191,106.1991847,17z/data=!3m1!4b1!4m5!3m4!1s0x31356d80e4650dd5:0xc1f134797990d25f!8m2!3d21.2762191!4d106.2013734?hl=vi-VN&shorturl=1"
                            target="_blank" id="BUTTON316" class='ladi-element'>
                            <div class='ladi-button ladi-transition'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT316" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline ladi-transition'>Số 356 Nguyễn Thị Minh Khai – Dĩnh Kế -
                                        <br>Bắc Giang</p>
                                </div>
                            </div>
                        </a>
                        <div id="HEADLINE318" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thời gian mở cửa: Từ 8h30-18h<br>(trưa đóng cửa nghỉ
                                từ 12h đến 13h30)</h3>
                        </div>
                        <div id="BOX319" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX320" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE321" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>HACOM - BẮC GIANG</h3>
                        </div>
                        <div id="HEADLINE322" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>11</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="thanhtoanchuyenkhoan" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="HEADLINE391" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Thanh toán chuyển khoản</h3>
                </div>
                <div id="HEADLINE392" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>- Chỉ thanh toán mua hàng trên Website, các kênh online và
                        cửa hàng chính thống của HACOM.
                        <br>- Khi thanh toán bằng hình thức chuyển khoản, chỉ thanh toán qua số tài khoản tên chính thức
                        của HACOM.
                        <br><span style="font-weight: bold;">HACOM sẽ không chịu trách nhiệm với những sai lệch hình
                            thức thanh toán chuyển khoản không đúng số tài khoản tên chính thức của chúng tôi. Xin cảm
                            ơn!</span><br>
                    </h3>
                </div>
                <div id="GROUP460" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX436" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX445" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX447" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="BOX448" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE449" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="IMAGE451" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="IMAGE452" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="IMAGE453" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="BOX454" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE455" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP682" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX461" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE462" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Để hàng hóa và giá cả được chính xác, ngay sau khi
                                quý khách chuyển tiền xin vui lòng fax giấy ủy nhiệm chi có dấu ngân hàng chuyển tiền để
                                nhân viên kinh doanh làm căn cứ giữ hàng và giá tiền theo đúng thỏa thuận cho quý khách.
                            </h3>
                        </div>
                    </div>
                </div>
                <div id="BOX396" class='ladi-element'>
                    <div class='ladi-box ladi-transition'></div>
                </div>
                <div id="HEADLINE397" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>"Tên Khách hàng <span style="font-weight: normal;">[dấu
                            cách]</span> Số điện thoại khách hàng<br><span style="font-weight: normal;">[dấu
                            cách]</span> Số phiếu xuất kho <span style="font-weight: normal;">[dấu cách]</span> Mã điểm
                        kinh doanh".
                        <br>Ví dụ: NGUYEN VAN A 0986123456 thanh toan FX12345 HNC101<br>
                    </h3>
                </div>
                <div id="GROUP694" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP674" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX393" class='ladi-element element-click-selected'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE400" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Ngân hàng TMCP Ngoại Thương Việt Nam
                                        (Vietcombank)</h3>
                                </div>
                                <div id="HEADLINE403" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'><span style="font-weight: normal;">Tên tài
                                            khoản: CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM<br>Chi nhánh: Tây Hồ<br>Số tài khoản VNĐ:</span> 0991000000930<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE694" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP695" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP677" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX412" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE413" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Ngân hàng TMCP Kỹ Thương Việt Nam
                                        (Techcombank)</h3>
                                </div>
                                <div id="HEADLINE414" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'><span style="font-weight: normal;">Tên tài
                                            khoản: CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM<br>Trung tâm giao dịch Hội sở<br>Số tài
                                            khoản:</span>&nbsp;10823610928999<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE695" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP696" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP678" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX420" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE421" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Ngân hàng TMCP Tiên Phong<br>(TPBANK)</h3>
                                </div>
                                <div id="HEADLINE422" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'><span style="font-weight: normal;">Tên tài
                                            khoản: CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM<br>PGD Nam Hà Nội - CN Hoàn Kiếm<br>Số tài khoản
                                            VNĐ:</span>&nbsp;00118668001<br><span style="font-weight: normal;">Số tài
                                            khoản USD:</span> 00118668002<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE696" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP698" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP679" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX423" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE424" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Ngân hàng Quân đội <br>(MBBANK)</h3>
                                </div>
                                <div id="HEADLINE425" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'><span style="font-weight: normal;">Tên tài
                                            khoản: CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM<br>Chi nhánh: Giải Phóng<br>Số tài khoản
                                            VNĐ:</span>&nbsp;0631100948001<br><span style="font-weight: normal;">Số tài
                                            khoản USD:</span> 0631100949008<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE698" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP699" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP676" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX416" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE418" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'>Ngân hàng TMCP Á Châu<br>&nbsp;(ACB)</h3>
                                </div>
                                <div id="HEADLINE419" class='ladi-element'>
                                    <h3 class='ladi-headline ladi-transition'><span style="font-weight: normal;">Tên tài
                                            khoản: CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM<br>Chi nhánh: Hà Nội<br>Số tài khoản
                                            VNĐ:</span>&nbsp;174420119<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE699" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="thanhtoantragop" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="HEADLINE465" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Thanh toán trả góp</h3>
                </div>
                <div id="GROUP480" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX472" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE473" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Công ty tài chính</h3>
                        </div>
                        <div id="HEADLINE474" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Duyệt hồ sơ qua điện thoại</h3>
                        </div>
                        <div id="IMAGE475" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="BOX491" class='ladi-element'>
                    <div class='ladi-box ladi-transition'></div>
                </div>
                <div id="HEADLINE492" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Thẻ tín dụng</h3>
                </div>
                <div id="HEADLINE493" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Không cần xét duyệt</h3>
                </div>
                <div id="GROUP685" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX476" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE481" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE482" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Bấm vào mua trả góp</h3>
                        </div>
                    </div>
                </div>
                <div id="SHAPE485" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="GROUP683" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX479" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE483" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE487" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Chờ điện thoại Tổng đài viên</h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP684" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX478" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE488" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE489" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'><span style="font-weight: bold;">Nhận sản
                                    phẩm</span><br>(Sau khi được duyệt)<br></h3>
                        </div>
                    </div>
                </div>
                <div id="SHAPE531" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="SHAPE643" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="SHAPE644" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="SHAPE645" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="SHAPE646" class='ladi-element'>
                    <div class='ladi-shape ladi-transition'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                            height="100%" preserveAspectRatio="none" viewBox="0 0 720.451 1896.08" class=""
                            fill="rgba(236, 29, 34, 1)">
                            <use xlink:href="#shape_NdGXqnCpam"></use>
                        </svg></div>
                </div>
                <div id="GROUP690" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX518" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE520" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE521" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Nhập thông tin khách hàng</h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP689" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX524" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE525" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE526" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán ngay<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP686" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX508" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE509" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE510" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Chọn ngân hàng</h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP687" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX512" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE513" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE514" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Chọn loại thẻ<br><span
                                    style="font-weight: normal;">(VISA/MASTER/JCB)</span><br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP688" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX515" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE516" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE517" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Chọn số tiền trả góp<br></h3>
                        </div>
                    </div>
                </div><a href="https://hacom.vn/huong-dan-mua-hang-tra-gop" target="_blank" id="HEADLINE693"
                    class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>https://hacom.vn/huong-dan-mua-hang-tra-gop</h3>
                </a>
            </div>
        </div>
        <div id="thanhtoanhinhthuckhac" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="HEADLINE530" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Thanh toán trực tuyến qua cổng thanh toán ngân lượng</h3>
                </div>
                <div id="HEADLINE534" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Quý khách hàng đang sử dụng các loại thẻ của ngân hàng có
                        thể thanh toán trực tuyến trên website một cách nhanh chóng và tiện lợi nhất.</h3>
                </div>
                <div id="GROUP691" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX579" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE580" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Quý khách lưu ý khi thanh toán qua các loại thẻ
                                ngân hàng: Điền đúng nội dung chuyển tiền theo hướng dẫn của Ngân lượng.</h3>
                        </div>
                    </div>
                </div>
                <div id="HEADLINE581" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Mọi thắc mắc cần được hỗ trợ quý khách vui lòng liên
                        hệ:<br></h3>
                </div>
                <div id="HEADLINE582" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>Công Ty Cổ Phần Đầu Tư Công Nghệ HACOM</h3>
                </div>
                <div id="GROUP590" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX586" class='ladi-element element-click-selected'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE587" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>1900 1903</h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP562" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX540" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE554" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE556" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thẻ tín dụng quốc tế</h3>
                        </div>
                        <div id="HEADLINE557" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán bằng thẻ tín dụng quốc tế: Visa, Master
                                card…<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP563" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX558" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE559" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE560" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thẻ ATM online</h3>
                        </div>
                        <div id="HEADLINE561" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán bằng thẻ ATM online.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP564" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX565" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE566" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE567" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Internet Banking</h3>
                        </div>
                        <div id="HEADLINE568" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán bằng internet banking.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP569" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX570" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE571" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE572" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Cây ATM</h3>
                        </div>
                        <div id="HEADLINE573" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán qua cây ATM.</h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP574" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX575" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="IMAGE576" class='ladi-element'>
                            <div class='ladi-image ladi-transition'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                        <div id="HEADLINE577" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Số dư khả dụng</h3>
                        </div>
                        <div id="HEADLINE578" class='ladi-element'>
                            <h3 class='ladi-headline ladi-transition'>Thanh toán bằng số dư khả dụng trên tài khoản Ngân
                                lượng.<br></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="backdrop-popup" class="backdrop-popup"></div>
    <div id="backdrop-dropbox" class="backdrop-dropbox"></div>
    <div id="lightbox-screen" class="lightbox-screen"></div>
    <script id="script_lazyload"
        type="text/javascript">window.lazyload_run = function (dom, is_first, check_dom_rect) { if (check_dom_rect && (document.body.clientWidth <= 0 || document.body.clientheight <= 0)) { return setTimeout(function () { window.lazyload_run(dom, is_first, check_dom_rect); }, 1); } var style_lazyload = document.getElementById('style_lazyload'); var list_element_lazyload = dom.querySelectorAll('body.lazyload .ladi-overlay, body.lazyload .ladi-box, body.lazyload .ladi-button-background, body.lazyload .ladi-collection-item, body.lazyload .ladi-countdown-background, body.lazyload .ladi-form-item-background, body.lazyload .ladi-form-label-container .ladi-form-label-item.image, body.lazyload .ladi-frame-background, body.lazyload .ladi-gallery-view-item, body.lazyload .ladi-gallery-control-item, body.lazyload .ladi-headline, body.lazyload .ladi-image-background, body.lazyload .ladi-image-compare, body.lazyload .ladi-list-paragraph ul li, body.lazyload .ladi-section-background, body.lazyload .ladi-survey-option-background, body.lazyload .ladi-survey-option-image, body.lazyload .ladi-tabs-background, body.lazyload .ladi-video-background, body.lazyload .ladi-banner, body.lazyload .ladi-spin-lucky-screen, body.lazyload .ladi-spin-lucky-start'); var docEventScroll = window; for (var i = 0; i < list_element_lazyload.length; i++) { var rect = list_element_lazyload[i].getBoundingClientRect(); if (rect.x == "undefined" || rect.x == undefined || rect.y == "undefined" || rect.y == undefined) { rect.x = rect.left; rect.y = rect.top; } var offset_top = rect.y + window.scrollY; if (offset_top >= window.scrollY + window.innerHeight || window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight) { list_element_lazyload[i].classList.add('ladi-lazyload'); } } if (typeof style_lazyload != "undefined" && style_lazyload != undefined) { style_lazyload.parentElement.removeChild(style_lazyload); } document.body.classList.remove("lazyload"); var currentScrollY = window.scrollY; var stopLazyload = function (event) { if (event.type == "scroll" && window.scrollY == currentScrollY) { currentScrollY = -1; return; } docEventScroll.removeEventListener('scroll', stopLazyload); list_element_lazyload = document.getElementsByClassName('ladi-lazyload'); while (list_element_lazyload.length > 0) { list_element_lazyload[0].classList.remove('ladi-lazyload'); } }; if (is_first) { var scrollEventPassive = null; try { var opts = Object.defineProperty({}, 'passive', { get: function () { scrollEventPassive = { passive: true }; } }); window.addEventListener('testPassive', null, opts); window.removeEventListener('testPassive', null, opts); } catch (e) { } docEventScroll.addEventListener('scroll', stopLazyload, scrollEventPassive); } return dom; }; window.lazyload_run(document, true, true);</script>
    <!--[if lt IE 9]><script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1702029891767"></script><script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1702029891767"></script><![endif]-->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"
        type="text/css">
    <style type="text/css">
        @-webkit-keyframes bounceInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                transform: translateX(2000px);
            }

            60% {
                opacity: 1;
                -webkit-transform: translateX(-30px);
                transform: translateX(-30px);
            }

            80% {
                -webkit-transform: translateX(10px);
                transform: translateX(10px);
            }

            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }

        @keyframes bounceInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                -ms-transform: translateX(2000px);
                transform: translateX(2000px);
            }

            60% {
                opacity: 1;
                -webkit-transform: translateX(-30px);
                -ms-transform: translateX(-30px);
                transform: translateX(-30px);
            }

            80% {
                -webkit-transform: translateX(10px);
                -ms-transform: translateX(10px);
                transform: translateX(10px);
            }

            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }

        @-webkit-keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-20px);
                transform: translateY(-20px);
            }

            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }

        @keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-20px);
                -ms-transform: translateY(-20px);
                transform: translateY(-20px);
            }

            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }

        @-webkit-keyframes bounceInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }

            60% {
                opacity: 1;
                -webkit-transform: translateX(30px);
                transform: translateX(30px);
            }

            80% {
                -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
            }

            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }

        @keyframes bounceInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                -ms-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }

            60% {
                opacity: 1;
                -webkit-transform: translateX(30px);
                -ms-transform: translateX(30px);
                transform: translateX(30px);
            }

            80% {
                -webkit-transform: translateX(-10px);
                -ms-transform: translateX(-10px);
                transform: translateX(-10px);
            }

            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }

        @-webkit-keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }

            50% {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }

            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }

        @keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }

            50% {
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
            }

            100% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
        }

        @-webkit-keyframes tada {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }

            10%,
            20% {
                -webkit-transform: scale(0.9) rotate(-3deg);
                transform: scale(0.9) rotate(-3deg);
            }

            30%,
            50%,
            70%,
            90% {
                -webkit-transform: scale(1.1) rotate(3deg);
                transform: scale(1.1) rotate(3deg);
            }

            40%,
            60%,
            80% {
                -webkit-transform: scale(1.1) rotate(-3deg);
                transform: scale(1.1) rotate(-3deg);
            }

            100% {
                -webkit-transform: scale(1) rotate(0);
                transform: scale(1) rotate(0);
            }
        }

        @keyframes tada {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }

            10%,
            20% {
                -webkit-transform: scale(0.9) rotate(-3deg);
                -ms-transform: scale(0.9) rotate(-3deg);
                transform: scale(0.9) rotate(-3deg);
            }

            30%,
            50%,
            70%,
            90% {
                -webkit-transform: scale(1.1) rotate(3deg);
                -ms-transform: scale(1.1) rotate(3deg);
                transform: scale(1.1) rotate(3deg);
            }

            40%,
            60%,
            80% {
                -webkit-transform: scale(1.1) rotate(-3deg);
                -ms-transform: scale(1.1) rotate(-3deg);
                transform: scale(1.1) rotate(-3deg);
            }

            100% {
                -webkit-transform: scale(1) rotate(0);
                -ms-transform: scale(1) rotate(0);
                transform: scale(1) rotate(0);
            }
        }
    </style>
    <script src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1702029891767" type="text/javascript"></script>
    <script id="script_event_data"
        type="application/json">{"IMAGE32":{"a":"image","F":"bounceInRight","C":"1s"},"HEADLINE35":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE44":{"a":"headline","F":"fadeInDown","C":"1s"},"BUTTON112":{"a":"button","cs":[{"dr":"action","dw":"Thanhtoantructiep","a":"section"}]},"HEADLINE120":{"a":"headline","F":"fadeInDown","C":"1s"},"BUTTON121":{"a":"button","cs":[{"dr":"action","dw":"thanhtoanchuyenkhoan","a":"section"}]},"HEADLINE126":{"a":"headline","F":"fadeInDown","C":"1s"},"BUTTON127":{"a":"button","cs":[{"dr":"action","dw":"thanhtoantragop","a":"section"}]},"HEADLINE132":{"a":"headline","F":"fadeInDown","C":"1s"},"BUTTON133":{"a":"button","cs":[{"dr":"action","dw":"thanhtoanhinhthuckhac","a":"section"}]},"HEADLINE137":{"a":"headline","F":"fadeInDown","C":"1s"},"BUTTON160":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575","a":"link"}]},"BUTTON190":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+%C4%90%E1%BB%90NG+%C4%90A/@21.0112649,105.8216092,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab7d94ae54b9:0x21aae6c934d53ad6!8m2!3d21.0112846!4d105.8216329","a":"link"}]},"BUTTON208":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+H%E1%BA%A2I+PH%C3%92NG/@20.8499141,106.6729997,17z/data=!3m1!4b1!4m5!3m4!1s0x314a7abbbe6693df:0x67aa66d57ba2ba77!8m2!3d20.8499141!4d106.6729997?hl=vi-VN","a":"link"}]},"BUTTON217":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+C%E1%BA%A6U+GI%E1%BA%A4Y/@21.0353189,105.7978706,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ab4764432ddb:0x63e02e8abee5b42d!8m2!3d21.035436!4d105.797729","a":"link"}]},"BUTTON253":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+H%C3%80+%C4%90%C3%94NG+1/@20.9628131,105.7658942,17z/data=!3m1!4b1!4m5!3m4!1s0x313453d657ddcc97:0xcff513b765db57d2!8m2!3d20.9629562!4d105.7661158","a":"link"}]},"BUTTON262":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+QU%E1%BA%ACN+3+H%E1%BB%92+CH%C3%8D+MINH/@11.634788,106.5267121,7z/data=!4m5!3m4!1s0x31752ed17e3c9185:0x1e37f7c97db47fce!8m2!3d10.7855288!4d106.667641","a":"link"}]},"BUTTON271":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+LONG+BI%C3%8AN/@21.0460439,105.8761233,18z/data=!4m9!1m2!2m1!1shacom!3m5!1s0x3135a940b1bef6c5:0x7d7a31525a472ab8!8m2!3d21.0460221!4d105.8769376!15sCgVoYWNvbVoHIgVoYWNvbZIBDmNvbXB1dGVyX3N0b3Jl","a":"link"}]},"BUTTON280":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+-+T%E1%BB%AA+S%C6%A0N+t%E1%BB%89nh+B%E1%BA%AEC+NINH/@21.1237504,105.9679756,17z/data=!3m1!4b1!4m5!3m4!1s0x313509a55c6f4181:0x77c807a762169222!8m2!3d21.1237454!4d105.9701643?shorturl=1","a":"link"}]},"BUTTON298":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+THANH+TR%C3%8C/@20.9696075,105.826887,17z/data=!3m1!4b1!4m5!3m4!1s0x3135ada660ac598b:0x2b67437cca19ba1e!8m2!3d20.9696025!4d105.8290757?gidzl=bHOi3Noi17cG32aEVh85UfK48GrXiWvqsLvm0cMrMdE8NoK4Pk0D88yDAGLckbObZGmhNMJQZXn1VQq8T0","a":"link"}]},"BUTTON316":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+B%E1%BA%AEC+GIANG/@21.2762191,106.1991847,17z/data=!3m1!4b1!4m5!3m4!1s0x31356d80e4650dd5:0xc1f134797990d25f!8m2!3d21.2762191!4d106.2013734?hl=vi-VN&shorturl=1","a":"link"}]},"BUTTON325":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+H%C3%80+%C4%90%C3%94NG+2/@20.9842097,105.7933684,15z/data=!4m5!3m4!1s0x0:0x689baf48a6c19c4a!8m2!3d20.9842097!4d105.7933684","a":"link"}]},"BUTTON334":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+PH%E1%BB%A6+L%C3%9D/@20.5424012,105.9129829,15z/data=!4m5!3m4!1s0x0:0xad7e6525c164e77a!8m2!3d20.5422685!4d105.9128279","a":"link"}]},"BUTTON343":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+VINH+NGH%E1%BB%86+AN/@18.6785334,105.6761903,16z/data=!4m5!3m4!1s0x3139cfe902ac214f:0xb5b816b6531e0e81!8m2!3d18.6816899!4d105.6743803","a":"link"}]},"BUTTON352":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+Th%C3%A1i+Nguy%C3%AAn/@21.5952408,105.8222472,17z/data=!3m1!4b1!4m5!3m4!1s0x3135273d95f81c13:0x152c171f9ce8d19d!8m2!3d21.5952358!4d105.8244359?shorturl=1","a":"link"}]},"BUTTON361":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+THANH+H%C3%93A/@19.8617167,105.7355097,12.12z/data=!4m6!3m5!1s0x3136f7d9c91d2b81:0xd28061b6b3f8484c!8m2!3d19.8110861!4d105.7770846!16s%2Fg%2F11tfh4mzvd?shorturl=1","a":"link"}]},"HEADLINE391":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE465":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE474":{"a":"headline","F":"bounceInRight","C":"1s"},"HEADLINE482":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE487":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE489":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE493":{"a":"headline","F":"bounceInRight","C":"1s"},"HEADLINE510":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE514":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE517":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE521":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE526":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE530":{"a":"headline","F":"fadeInDown","C":"1s"},"HEADLINE557":{"a":"headline","F":"bounceInLeft","C":"1s"},"HEADLINE561":{"a":"headline","F":"bounceInLeft","C":"1s"},"GROUP563":{"a":"group","F":"fadeInDown","C":"1s"},"HEADLINE568":{"a":"headline","F":"bounceInLeft","C":"1s"},"HEADLINE573":{"a":"headline","F":"bounceInLeft","C":"1s"},"GROUP569":{"a":"group","F":"fadeInDown","C":"1s"},"HEADLINE578":{"a":"headline","F":"bounceInLeft","C":"1s"},"GROUP590":{"a":"group","E":"pulse","D":"tada","C":"1s"},"HEADLINE693":{"a":"headline","cs":[{"dr":"action","dv":"_blank","dw":"https://hacom.vn/huong-dan-mua-hang-tra-gop","a":"link"}]},"BUTTON307":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+%C4%90%C3%94NG+ANH/@21.1406222,105.8467489,17z/data=!3m1!4b1!4m5!3m4!1s0x313501d22a837f4d:0xf5785954f9b573c9!8m2!3d21.1406222!4d105.8489376?hl=vi-VN","a":"link"}]}}</script>
    <script id="script_ladipage_run"
        type="text/javascript">(function () { var run = function () { if (typeof window.LadiPageScript == "undefined" || typeof window.ladi == "undefined" || window.ladi == undefined) { setTimeout(run, 100); return; } window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2(); window.LadiPageScript.runtime.ladipage_id = '649be2be70d01d001202faa4'; window.LadiPageScript.runtime.publish_platform = 'LADIPAGE'; window.LadiPageScript.runtime.version = '1702029891767'; window.LadiPageScript.runtime.cdn_url = 'https://w.ladicdn.com/v2/source/'; window.LadiPageScript.runtime.DOMAIN_FREE = ["preview.ladipage.me", "ldp.link", "ldp.page"]; window.LadiPageScript.runtime.bodyFontSize = 12; window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045"; window.LadiPageScript.runtime.time_zone = 7; window.LadiPageScript.runtime.currency = "VND"; window.LadiPageScript.runtime.convert_replace_str = true; window.LadiPageScript.runtime.desktop_width = 960; window.LadiPageScript.runtime.mobile_width = 420; window.LadiPageScript.runtime.tracking_button_click = true; window.LadiPageScript.runtime.publish_time = 1702261284394; window.LadiPageScript.runtime.lang = "vi"; window.LadiPageScript.run(true); window.LadiPageScript.runEventScroll(); }; run(); })();</script>
</body>

</html><!--Publish time: Mon, 11 Dec 2023 02:21:25 GMT--><!--LadiPage build time: Fri, 08 Dec 2023 10:04:51 GMT-->
  `;

  return (
    <div>
      <div
        className="text-container"
        dangerouslySetInnerHTML={{ __html: aaa }}
      />
    </div>
  );
};

export default page;
