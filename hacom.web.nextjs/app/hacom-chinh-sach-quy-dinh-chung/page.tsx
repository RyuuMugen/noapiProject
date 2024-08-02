import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Chính sách cho doanh nghiệp",
  description: "HACOM - Chính sách cho doanh nghiệp",
};
const page = () => {
  const aaa = `
  <!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <title>Chính sách cho doanh nghiệp</title>
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Expires" content="-1">
    <meta name="keywords" content="">
    <meta name="description" content="HACOM - Chính Sách, Quy Định Chung">
    <meta id='viewport' name='viewport' content='width=device-width, initial-scale=1' />
    <script
        type='text/javascript'>window.ladi_viewport = function (i) { var a = document; var b = window.ladi_screen_width || window.screen.width; i = i ? i : 'innerWidth'; var c = window[i] > 0 ? window[i] : b; var d = c; var e = c >= 768; var f = ""; if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) { window.ladi_is_desktop = e; } if (!e) { d = 420; } else { d = 1200; } f = "width=" + d + ",user-scalable=no"; var g = 1; if (!e && d != b && b > 0) { g = b / d; } if (g != 1) { f += ",initial-scale=" + g + ",minimum-scale=" + g + ",maximum-scale=" + g; } var h = a.getElementById("viewport"); if (!h) { h = a.createElement("meta"); h.setAttribute("id", "viewport"); h.setAttribute("name", "viewport"); a.head.appendChild(h); } h.setAttribute("content", f); }; window.ladi_viewport(); window.ladi_fbq_data = []; window.ladi_fbq = function () { window.ladi_fbq_data.push(arguments); }; window.ladi_ttq_data = []; window.ladi_ttq = function () { window.ladi_ttq_data.push(arguments); };</script>
    <link rel="canonical" href="http://preview.ladipage.me/649bf4d770d01d00120423fd" />
    <meta property="og:url" content="http://preview.ladipage.me/649bf4d770d01d00120423fd" />
    <meta property="og:title" content="Chính sách cho doanh nghiệp" />
    <meta property="og:type" content="website" />
    <meta property="og:image"
        content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png">
    <meta property="og:description" content="HACOM - Chính Sách, Quy Định Chung" />
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
    <link rel="preload" href="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1697884475394" as="script">
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
            #HEADLINE20 {
                opacity: 0 !important;
                pointer-events: none !important;
            }
        }

        @media (max-width: 767px) {
            #HEADLINE20 {
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
                width: 1200px;
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
        #IMAGE519>.ladi-image>.ladi-image-background,
        #IMAGE535>.ladi-image>.ladi-image-background,
        #IMAGE536>.ladi-image>.ladi-image-background,
        #BOX464,
        #BOX467,
        #BOX468,
        #BOX469,
        #GROUP469,
        #BOX471,
        #GROUP473,
        #BOX474,
        #BOX475,
        #BOX476,
        #HEADLINE512 {
            top: 0px;
            left: 0px;
        }

        #HEADLINE20>.ladi-headline {
            font-family: VVRNIEFbJvbGQudHRm;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #HEADLINE20.ladi-animation>.ladi-headline {
            animation-name: bounceInLeft;
            animation-delay: 0s;
            animation-duration: 1s;
            animation-iteration-count: 1;
        }

        #HEADLINE20>.ladi-headline:hover,
        #BOX464>.ladi-box:hover,
        #BOX467>.ladi-box:hover,
        #BOX468>.ladi-box:hover,
        #BOX469>.ladi-box:hover,
        #BOX471>.ladi-box:hover,
        #BOX474>.ladi-box:hover,
        #BOX475>.ladi-box:hover,
        #BOX476>.ladi-box:hover {
            opacity: 1;
        }

        #SECTION403>.ladi-section-background {
            background-color: rgb(255, 255, 255);
        }

        #GROUP465,
        #BUTTON_TEXT405,
        #GROUP466,
        #GROUP471 {
            left: 0px;
        }

        #BOX464>.ladi-box,
        #BOX467>.ladi-box,
        #BOX468>.ladi-box,
        #BOX469>.ladi-box,
        #BOX471>.ladi-box,
        #BOX474>.ladi-box,
        #BOX475>.ladi-box,
        #BOX476>.ladi-box {
            border-width: 1px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(245, 245, 245);
        }

        #BOX464>.ladi-box,
        #BOX467>.ladi-box,
        #BOX468>.ladi-box,
        #BOX469>.ladi-box,
        #BOX471>.ladi-box,
        #BOX474>.ladi-box,
        #BOX475>.ladi-box {
            background-color: rgb(245, 245, 245);
        }

        #HEADLINE472>.ladi-headline,
        #HEADLINE476>.ladi-headline,
        #HEADLINE480>.ladi-headline,
        #HEADLINE484>.ladi-headline,
        #HEADLINE487>.ladi-headline,
        #HEADLINE498>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 28, 36);
            text-align: left;
        }

        #HEADLINE473>.ladi-headline,
        #HEADLINE474>.ladi-headline,
        #HEADLINE475>.ladi-headline,
        #HEADLINE478>.ladi-headline,
        #HEADLINE479>.ladi-headline,
        #HEADLINE482>.ladi-headline,
        #HEADLINE483>.ladi-headline,
        #HEADLINE485>.ladi-headline,
        #HEADLINE488>.ladi-headline,
        #HEADLINE489>.ladi-headline,
        #HEADLINE490>.ladi-headline,
        #HEADLINE491>.ladi-headline,
        #HEADLINE500>.ladi-headline,
        #HEADLINE501>.ladi-headline,
        #HEADLINE502>.ladi-headline,
        #HEADLINE507>.ladi-headline {
            font-size: 16px;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BUTTON405>.ladi-button>.ladi-button-background,
        #BOX476>.ladi-box {
            background-color: rgb(236, 28, 36);
        }

        #BUTTON405>.ladi-button {
            border-width: 1px;
            border-radius: 5px;
            border-style: solid;
            border-color: rgb(236, 28, 36);
        }

        #BUTTON_TEXT405>.ladi-headline {
            font-size: 24px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: center;
        }

        #GROUP468,
        #BOX469 {
            height: 245px;
        }

        #HEADLINE492>.ladi-headline,
        #HEADLINE493>.ladi-headline,
        #HEADLINE494>.ladi-headline,
        #HEADLINE504>.ladi-headline,
        #HEADLINE505>.ladi-headline {
            font-size: 16px;
            line-height: 1.6;
            color: rgb(236, 28, 36);
            text-align: left;
        }

        #HEADLINE506>.ladi-headline {
            font-size: 24px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 28, 36);
            text-align: left;
        }

        #GROUP477 {
            height: 156.362px;
        }

        #HEADLINE514 {
            top: 97.362px;
        }

        #HEADLINE514>.ladi-headline,
        #HEADLINE515>.ladi-headline,
        #HEADLINE513>.ladi-headline {
            font-size: 16px;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #HEADLINE515,
        #SHAPE418 {
            top: 130.362px;
        }

        #SHAPE416,
        #SHAPE418 {
            height: 26px;
        }

        #SHAPE416 {
            top: 61.472px;
        }

        #SHAPE416 svg:last-child,
        #SHAPE417 svg:last-child,
        #SHAPE418 svg:last-child {
            fill: rgb(255, 255, 255);
        }

        #SHAPE417 {
            height: 20.893px;
            top: 98.362px;
        }

        #HEADLINE512>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
        }

        #HEADLINE513 {
            top: 63.5px;
        }

        @media (min-width: 768px) {
            #Header {
                height: 565.893px;
            }

            #IMAGE519,
            #IMAGE519>.ladi-image>.ladi-image-background {
                width: 1921.78px;
                height: 565.893px;
            }

            #IMAGE519 {
                top: 0px;
                left: -360px;
            }

            #IMAGE519>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s2250x900/5d3c13acdc09063fd1918045/header-20230628090801-xagbf.png");
            }

            #HEADLINE20 {
                width: 917px;
                top: 222.947px;
                left: 142.39px;
            }

            #HEADLINE20>.ladi-headline {
                font-size: 55px;
            }

            #IMAGE535,
            #IMAGE535>.ladi-image>.ladi-image-background {
                width: 371.97px;
                height: 491px;
            }

            #IMAGE535 {
                top: 74.893px;
                left: -166.97px;
            }

            #IMAGE535>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s700x800/5d3c13acdc09063fd1918045/man-1-20230628090843-xv3ws.png");
            }

            #IMAGE536,
            #IMAGE536>.ladi-image>.ladi-image-background {
                width: 305.347px;
                height: 491px;
            }

            #IMAGE536 {
                top: 74.893px;
                left: 974.346px;
            }

            #IMAGE536>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s650x800/5d3c13acdc09063fd1918045/girl-1-20230628090843-rznex.png");
            }

            #SECTION403 {
                height: 1803.6px;
            }

            #GROUP465,
            #BOX464 {
                width: 578.627px;
                height: 443px;
            }

            #GROUP465 {
                top: 33px;
            }

            #HEADLINE472,
            #HEADLINE480 {
                width: 495px;
                top: 13.607px;
                left: 32.2035px;
            }

            #HEADLINE472>.ladi-headline,
            #HEADLINE476>.ladi-headline,
            #HEADLINE480>.ladi-headline,
            #HEADLINE484>.ladi-headline,
            #HEADLINE487>.ladi-headline,
            #HEADLINE498>.ladi-headline {
                font-size: 24px;
            }

            #HEADLINE473 {
                width: 310px;
                top: 66.607px;
                left: 32.2035px;
            }

            #HEADLINE474,
            #HEADLINE475,
            #HEADLINE478,
            #HEADLINE479,
            #HEADLINE482,
            #HEADLINE483,
            #HEADLINE485,
            #HEADLINE488 {
                width: 506px;
            }

            #HEADLINE474 {
                top: 181.5px;
                left: 32.2035px;
            }

            #HEADLINE475 {
                top: 310px;
                left: 32.2035px;
            }

            #BUTTON405 {
                width: 264px;
                height: 60px;
                top: 103.607px;
                left: 147.704px;
            }

            #BUTTON_TEXT405 {
                width: 262px;
                top: 9px;
            }

            #GROUP466,
            #BOX467 {
                width: 578.627px;
                height: 352px;
            }

            #GROUP466 {
                top: 506px;
            }

            #HEADLINE476,
            #HEADLINE487,
            #HEADLINE498,
            #HEADLINE506 {
                width: 380px;
            }

            #HEADLINE476 {
                top: 16.607px;
                left: 89.704px;
            }

            #HEADLINE478 {
                top: 75.5px;
                left: 32.2035px;
            }

            #HEADLINE479 {
                top: 224px;
                left: 32.2035px;
            }

            #GROUP467,
            #BOX468 {
                width: 578.627px;
                height: 245px;
            }

            #GROUP467 {
                top: 33px;
                left: 621.373px;
            }

            #HEADLINE482,
            #HEADLINE485 {
                top: 78.5px;
                left: 32.2035px;
            }

            #HEADLINE483 {
                top: 170px;
                left: 32.2035px;
            }

            #GROUP468,
            #BOX469 {
                width: 578.627px;
            }

            #GROUP468 {
                top: 308px;
                left: 621.373px;
            }

            #HEADLINE484 {
                width: 364px;
                top: 16.607px;
                left: 103.203px;
            }

            #GROUP471,
            #GROUP469,
            #BOX471 {
                width: 578.627px;
                height: 591px;
            }

            #GROUP471 {
                top: 888px;
            }

            #HEADLINE487,
            #HEADLINE506 {
                top: 17.7161px;
                left: 89.704px;
            }

            #HEADLINE488 {
                top: 75.5424px;
                left: 32.2035px;
            }

            #HEADLINE489,
            #HEADLINE490,
            #HEADLINE491,
            #HEADLINE500,
            #HEADLINE501,
            #HEADLINE502,
            #HEADLINE507 {
                width: 487px;
            }

            #HEADLINE489 {
                top: 229.228px;
                left: 51.2035px;
            }

            #HEADLINE490 {
                top: 308.5px;
                left: 48.8135px;
            }

            #HEADLINE491 {
                top: 508.5px;
                left: 48.8135px;
            }

            #HEADLINE492 {
                width: 320px;
                top: 390.5px;
                left: 71.8135px;
            }

            #HEADLINE493 {
                width: 289px;
                top: 419.5px;
                left: 71.8135px;
            }

            #HEADLINE494,
            #HEADLINE505 {
                width: 464px;
            }

            #HEADLINE494 {
                top: 450.5px;
                left: 71.8135px;
            }

            #GROUP472,
            #GROUP473,
            #BOX474 {
                width: 578.627px;
                height: 441px;
            }

            #GROUP472 {
                top: 583px;
                left: 621.373px;
            }

            #HEADLINE498 {
                top: 18.47px;
                left: 89.704px;
            }

            #HEADLINE500 {
                top: 66.2165px;
                left: 36.204px;
            }

            #HEADLINE501 {
                top: 147.5px;
                left: 36.8135px;
            }

            #HEADLINE502 {
                top: 315.5px;
                left: 36.8135px;
            }

            #HEADLINE504 {
                width: 422px;
                top: 202.5px;
                left: 57.3165px;
            }

            #HEADLINE505 {
                top: 233.5px;
                left: 57.3165px;
            }

            #GROUP475,
            #BOX475 {
                width: 578.627px;
                height: 423px;
            }

            #GROUP475 {
                top: 1056px;
                left: 621.373px;
            }

            #HEADLINE507 {
                top: 63.5138px;
                left: 36.204px;
            }

            #GROUP478,
            #BOX476 {
                width: 578.627px;
                height: 254px;
            }

            #GROUP478 {
                top: 1512px;
                left: 310.687px;
            }

            #GROUP477,
            #HEADLINE512 {
                width: 566px;
            }

            #GROUP477 {
                top: 41.638px;
                left: 12.627px;
            }

            #HEADLINE514,
            #HEADLINE515,
            #HEADLINE513 {
                width: 483px;
            }

            #HEADLINE514,
            #HEADLINE513 {
                left: 42.1506px;
            }

            #HEADLINE515 {
                left: 40.7686px;
            }

            #SHAPE416 {
                width: 35.9315px;
                left: 4.83694px;
            }

            #SHAPE417 {
                width: 28.8739px;
                left: 8.9829px;
            }

            #SHAPE418 {
                width: 26.6823px;
                left: 10.365px;
            }

            #HEADLINE512>.ladi-headline {
                font-size: 32px;
                text-align: center;
            }
        }

        @media (max-width: 767px) {
            #Header {
                height: 118.674px;
            }

            #IMAGE519,
            #IMAGE519>.ladi-image>.ladi-image-background {
                width: 420px;
                height: 123.674px;
            }

            #IMAGE519 {
                top: -2.5px;
                left: 0px;
            }

            #IMAGE519>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/header-20230628090801-xagbf.png");
            }

            #HEADLINE20 {
                width: 255px;
                top: 35.674px;
                left: 82.5px;
            }

            #HEADLINE20>.ladi-headline {
                font-size: 15px;
            }

            #IMAGE535,
            #IMAGE535>.ladi-image>.ladi-image-background {
                width: 83.3331px;
                height: 110px;
            }

            #IMAGE535 {
                top: 8.674px;
                left: 10.167px;
            }

            #IMAGE535>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x450/5d3c13acdc09063fd1918045/man-1-20230628090843-xv3ws.png");
            }

            #IMAGE536,
            #IMAGE536>.ladi-image>.ladi-image-background {
                width: 68.4078px;
                height: 110px;
            }

            #IMAGE536 {
                top: 8.674px;
                left: 326.327px;
            }

            #IMAGE536>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s400x450/5d3c13acdc09063fd1918045/girl-1-20230628090843-rznex.png");
            }

            #SECTION403 {
                height: 3210.18px;
            }

            #GROUP465,
            #BOX464 {
                width: 420.582px;
                height: 494px;
            }

            #GROUP465 {
                top: 0px;
            }

            #HEADLINE472 {
                width: 411px;
                top: 16.6479px;
                left: 9px;
            }

            #HEADLINE472>.ladi-headline,
            #HEADLINE476>.ladi-headline,
            #HEADLINE480>.ladi-headline,
            #HEADLINE484>.ladi-headline,
            #HEADLINE487>.ladi-headline,
            #HEADLINE498>.ladi-headline {
                font-size: 20px;
            }

            #HEADLINE473 {
                width: 315px;
                top: 61.4921px;
                left: 23.4075px;
            }

            #HEADLINE474,
            #HEADLINE475 {
                width: 368px;
            }

            #HEADLINE474 {
                top: 176.062px;
                left: 23.4075px;
            }

            #HEADLINE475 {
                top: 314.277px;
                left: 23.4075px;
            }

            #BUTTON405 {
                width: 254.892px;
                height: 57.4085px;
                top: 102.76px;
                left: 82.845px;
            }

            #BUTTON_TEXT405 {
                width: 190px;
                top: 11.0113px;
            }

            #GROUP466,
            #BOX467 {
                width: 420px;
                height: 361px;
            }

            #GROUP466 {
                top: 756.143px;
            }

            #HEADLINE476 {
                width: 381px;
                top: 11.607px;
                left: 23.3751px;
            }

            #HEADLINE478,
            #HEADLINE479,
            #HEADLINE482,
            #HEADLINE483,
            #HEADLINE484,
            #HEADLINE485,
            #HEADLINE488 {
                width: 367px;
            }

            #HEADLINE478 {
                top: 48.5px;
                left: 23.3751px;
            }

            #HEADLINE479 {
                top: 210px;
                left: 23.3751px;
            }

            #GROUP467,
            #BOX468 {
                width: 420px;
                height: 235px;
            }

            #GROUP467 {
                top: 507.571px;
                left: 0px;
            }

            #HEADLINE480 {
                width: 400px;
                top: 11.0085px;
                left: 11.6876px;
            }

            #HEADLINE482 {
                top: 42.7878px;
                left: 23.3751px;
            }

            #HEADLINE483 {
                top: 137.545px;
                left: 23.3751px;
            }

            #GROUP468,
            #BOX469 {
                width: 420px;
            }

            #GROUP468 {
                top: 1130.71px;
                left: 0px;
            }

            #HEADLINE484 {
                top: 15.607px;
                left: 23.3751px;
            }

            #HEADLINE485 {
                top: 57.5px;
                left: 23.3751px;
            }

            #GROUP471,
            #GROUP469,
            #BOX471 {
                width: 420px;
                height: 739px;
            }

            #GROUP471 {
                top: 1389.29px;
            }

            #HEADLINE487,
            #HEADLINE498 {
                width: 325px;
            }

            #HEADLINE487 {
                top: 16.0141px;
                left: 44.3751px;
            }

            #HEADLINE488 {
                top: 59.0921px;
                left: 23.3751px;
            }

            #HEADLINE489,
            #HEADLINE490,
            #HEADLINE491,
            #HEADLINE500,
            #HEADLINE501,
            #HEADLINE502,
            #HEADLINE507 {
                width: 353px;
            }

            #HEADLINE489 {
                top: 270.918px;
                left: 37.1664px;
            }

            #HEADLINE490 {
                top: 386.465px;
                left: 35.4316px;
            }

            #HEADLINE491 {
                top: 658.162px;
                left: 35.4316px;
            }

            #HEADLINE492 {
                width: 317px;
                top: 506.631px;
                left: 52.1263px;
            }

            #HEADLINE493 {
                width: 296px;
                top: 537.592px;
                left: 52.1263px;
            }

            #HEADLINE494,
            #HEADLINE505 {
                width: 337px;
            }

            #HEADLINE494 {
                top: 571.24px;
                left: 52.1263px;
            }

            #GROUP472,
            #GROUP473,
            #BOX474 {
                width: 420px;
                height: 597px;
            }

            #GROUP472 {
                top: 2141.86px;
                left: 0px;
            }

            #HEADLINE498 {
                top: 23.9796px;
                left: 40.2789px;
            }

            #HEADLINE500 {
                top: 72.2318px;
                left: 26.2789px;
            }

            #HEADLINE501 {
                top: 179.995px;
                left: 26.7213px;
            }

            #HEADLINE502 {
                top: 422.089px;
                left: 26.7213px;
            }

            #HEADLINE504 {
                width: 306px;
                top: 259.704px;
                left: 41.6035px;
            }

            #HEADLINE505 {
                top: 314.686px;
                left: 41.6035px;
            }

            #GROUP475,
            #BOX475 {
                width: 419.999px;
                height: 210px;
            }

            #GROUP475 {
                top: 2752.43px;
                left: 0.0005px;
            }

            #HEADLINE506 {
                width: 318px;
                top: 26.7161px;
                left: 44.1121px;
            }

            #HEADLINE507 {
                top: 78.5138px;
                left: 33.4995px;
            }

            #GROUP478 {
                width: 423px;
                height: 214.553px;
                top: 2976px;
                left: 0.0005px;
            }

            #BOX476 {
                width: 420px;
                height: 214.553px;
            }

            #GROUP477,
            #HEADLINE512 {
                width: 410px;
            }

            #GROUP477 {
                top: 22.55px;
                left: 13px;
            }

            #HEADLINE514,
            #HEADLINE515,
            #HEADLINE513 {
                width: 349px;
            }

            #HEADLINE514,
            #HEADLINE513 {
                left: 30.5px;
            }

            #HEADLINE515 {
                left: 29.5px;
            }

            #SHAPE416 {
                width: 26px;
                left: 3.5px;
            }

            #SHAPE417 {
                width: 20.893px;
                left: 6.5px;
            }

            #SHAPE418 {
                width: 19.3072px;
                left: 7.5px;
            }

            #HEADLINE512>.ladi-headline {
                font-size: 29px;
                text-align: left;
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

<body class="lazyload">
    <div class="ladi-wraper">
        <div id="Header" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="IMAGE519" class='ladi-element'>
                    <div class='ladi-image'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="HEADLINE20" class='ladi-element'>
                    <h3 class='ladi-headline ladi-transition'>CHÍNH SÁCH, QUY ĐỊNH CHUNG<br></h3>
                </div>
                <div id="IMAGE535" class='ladi-element'>
                    <div class='ladi-image'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
                <div id="IMAGE536" class='ladi-element'>
                    <div class='ladi-image'>
                        <div class="ladi-image-background"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="SECTION403" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div data-action="true" id="GROUP465" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX464" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE472" class='ladi-element'>
                            <h3 class='ladi-headline'>1. CHẤP THUẬN CÁC ĐIỀU KIỆN SỬ DỤNG<br></h3>
                        </div>
                        <div id="HEADLINE473" class='ladi-element'>
                            <h3 class='ladi-headline'>● Khi sử dụng Website của HACOM:<br></h3>
                        </div>
                        <div id="HEADLINE474" class='ladi-element'>
                            <h3 class='ladi-headline'>● Quý khách đã mặc nhiên chấp thuận các điều khoản và điều kiện sử
                                dụng được quy định dưới đây. Để biết được các sửa đổi mới nhất, Quý khách nên thường
                                xuyên kiểm tra lại “Điều Kiện Sử Dụng”.<br></h3>
                        </div>
                        <div id="HEADLINE475" class='ladi-element'>
                            <h3 class='ladi-headline'>● HACOM có quyền thay đổi, điều chỉnh, thêm hay bớt các nội dung
                                của “Điều Kiện Sử dụng” tại bất kỳ thời điểm nào. Nếu Quý khách vẫn tiếp tục sử dụng
                                Website sau khi có các thay đổi như vậy thì có nghĩa là Quý khách đã chấp thuận các thay
                                đổi đó.<br></h3>
                        </div><a href="https://hacom.vn/" target="_blank" id="BUTTON405" class='ladi-element'>
                            <div class='ladi-button'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT405" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline'>www.hacom.vn</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="GROUP466" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX467" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE476" class='ladi-element'>
                            <h3 class='ladi-headline'>3. LIÊN KẾT ĐẾN WEBSITE KHÁC<br></h3>
                        </div>
                        <div id="HEADLINE478" class='ladi-element'>
                            <h3 class='ladi-headline'>● Website cung cấp một số liên kết tới trang Web hoặc nguồn dữ
                                liệu khác. Quý khách tự chịu trách nhiệm khi sử dụng các liên kết này. HACOM không tiến
                                hành thẩm định hay xác thực nội dung, tính chính xác, quan điểm thể hiện tại các trang
                                Web và nguồn dữ liệu liên kết này.<br></h3>
                        </div>
                        <div id="HEADLINE479" class='ladi-element'>
                            <h3 class='ladi-headline'>● HACOM từ chối bất cứ trách nhiệm pháp lý nào liên quan tới tính
                                chính xác, nội dung thể hiện, mức độ an toàn và việc cho hiển thị hay che đi các thông
                                tin trên các trang Web và nguồn dữ liệu nói trên.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP467" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX468" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE480" class='ladi-element'>
                            <h3 class='ladi-headline'>2. TÍNH CHẤT CỦA THÔNG TIN HIỂN THỊ<br></h3>
                        </div>
                        <div id="HEADLINE482" class='ladi-element'>
                            <h3 class='ladi-headline'>● Các nội dung hiển thị trên Website nhằm mục đích cung cấp thông
                                tin về HACOM, về thông tin sản phẩm và dịch vụ mà mà HACOM đang cung cấp.<br></h3>
                        </div>
                        <div id="HEADLINE483" class='ladi-element'>
                            <h3 class='ladi-headline'>● Các thông tin khác liên quan nhằm phục vụ nhu cầu tìm hiểu của
                                khách hàng đều được ghi rõ nguồn cung cấp.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP468" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX469" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE484" class='ladi-element'>
                            <h3 class='ladi-headline'>4. LIÊN KẾT TỪ WEBSITE KHÁC<br></h3>
                        </div>
                        <div id="HEADLINE485" class='ladi-element'>
                            <h3 class='ladi-headline'>HACOM không cho phép bất kỳ nhà cung cấp dịch vụ internet nào được
                                phép “đặt toàn bộ” hay “nhúng” bất kỳ thành tố nào của Website này sang một trang khác
                                hoặc sử dụng các kỹ thuật làm thay đổi giao diện / hiển thị mặc định của Website mà chưa
                                có sự đồng ý của HACOM.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP471" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP469" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX471" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE487" class='ladi-element'>
                                    <h3 class='ladi-headline'>5. MIỄN TRỪ TRÁCH NHIỆM<br></h3>
                                </div>
                                <div id="HEADLINE488" class='ladi-element'>
                                    <h3 class='ladi-headline'>Khi truy cập vào website này, quý khách mặc nhiên đồng ý
                                        rằng HACOM, các nhà cung cấp khác cùng với đối tác liên kết, nhân viên của họ
                                        không chịu bất cứ trách nhiệm nào liên quan đến thương tật, mất mát, khiếu kiện,
                                        thiệt hại trực tiếp hoặc gián tiếp do không lường trước hoặc do hậu quả để lại
                                        dưới bất cứ hình thức nào phát sinh từ việc:<br></h3>
                                </div>
                                <div id="HEADLINE489" class='ladi-element'>
                                    <h3 class='ladi-headline'>● HACOM từ chối trách nhiệm hay đưa ra đảm bảo rằng
                                        website sẽ không có lỗi vận hành, an toàn, không bị gián đoạn hay tính chính
                                        xác, đầy đủ và đúng hạn của các thông tin hiển thị.<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="HEADLINE490" class='ladi-element'>
                            <h3 class='ladi-headline'>● Thông tin hiển thị tại website này không đi kèm bất kỳ đảm bảo
                                hay cam kết trách nhiệm từ phía HACOM về sự phù hợp của sản phẩm, dịch vụ mà người mua
                                đã lựa chọn:<br></h3>
                        </div>
                        <div id="HEADLINE491" class='ladi-element'>
                            <h3 class='ladi-headline'>● Các điều kiện và hạn chế nêu trên chỉ có hiệu lực trong khuôn
                                khổ pháp luật hiện hành.<br></h3>
                        </div>
                        <div id="HEADLINE492" class='ladi-element'>
                            <h3 class='ladi-headline'>(1) Sử dụng các thông tin trên website này;<br></h3>
                        </div>
                        <div id="HEADLINE493" class='ladi-element'>
                            <h3 class='ladi-headline'>(2) các truy cập kết nối từ website này;<br></h3>
                        </div>
                        <div id="HEADLINE494" class='ladi-element'>
                            <h3 class='ladi-headline'>(3) Đăng ký thành viên, đăng ký nhận thư điện tử hay tham gia vào
                                chương trình khách hàng thường xuyên của HACOM<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP472" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP473" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX474" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE498" class='ladi-element'>
                                    <h3 class='ladi-headline'>6. QUYỀN SỞ HỮU TRÍ TUỆ<br></h3>
                                </div>
                                <div id="HEADLINE500" class='ladi-element'>
                                    <h3 class='ladi-headline'>● Website này và mọi nội dung xếp đặt, hiển thị đều thuộc
                                        sở hữu và là tài sản độc quyền khai thác của HACOM và các nhà cung cấp có liên
                                        quan khác.<br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="HEADLINE501" class='ladi-element'>
                            <h3 class='ladi-headline'>● Mọi sử dụng, trích dẫn phải không gây thiệt hại cho HACOM và đều
                                phải tuân thủ các điều kiện sau:<br></h3>
                        </div>
                        <div id="HEADLINE502" class='ladi-element'>
                            <h3 class='ladi-headline'>● Tất cả các nội dung được cung cấp tại Website này không được
                                phép nhân bản, hiển thị, công bố, phổ biến, đưa tin tức hay lưu hành cho bất cứ ai, dưới
                                bất kỳ hình thức nào, kể cả trên các Website độc lập khác mà không được sự chấp thuận
                                của HACOM.<br></h3>
                        </div>
                        <div id="HEADLINE504" class='ladi-element'>
                            <h3 class='ladi-headline'>(1) Chỉ sử dụng cho mục đích cá nhân, phi thương mại.<br></h3>
                        </div>
                        <div id="HEADLINE505" class='ladi-element'>
                            <h3 class='ladi-headline'>(2) các sao chép hoặc trích dẫn đều phải giữ nguyên dấu hiệu bản
                                quyền hoặc các yết thị về quyền sở hữu trí tuệ như đã thể hiện trong phiên bản gốc.<br>
                            </h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP475" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX475" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE506" class='ladi-element'>
                            <h3 class='ladi-headline'>7. ĐIỀU CHỈNH VÀ SỬA ĐỔI<br></h3>
                        </div>
                        <div id="HEADLINE507" class='ladi-element'>
                            <h3 class='ladi-headline'>HACOM bảo lưu quyền thay đổi, chỉnh sửa hoặc chấm dứt hoạt động
                                của Website này vào bất cứ thời điểm nào.
                                <br><br>
                            </h3>
                        </div>
                    </div>
                </div>
                <div data-action="true" id="GROUP478" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX476" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div data-action="true" id="GROUP477" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="HEADLINE514" class='ladi-element'>
                                    <h3 class='ladi-headline'>dichvukhachhang@hacom.vn<br></h3>
                                </div>
                                <div id="HEADLINE515" class='ladi-element'>
                                    <h3 class='ladi-headline'>1900 1903 (máy lẻ: 0) hoặc 097 858 0088<br></h3>
                                </div>
                                <div id="SHAPE416" class='ladi-element'>
                                    <div class='ladi-shape'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                            height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" class=""
                                            fill="#FFFFFF">
                                            <path
                                                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z">
                                            </path>
                                        </svg></div>
                                </div>
                                <div id="SHAPE417" class='ladi-element'>
                                    <div class='ladi-shape'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                            height="100%" preserveAspectRatio="none" viewBox="0 0 24 24" class=""
                                            fill="#FFFFFF">
                                            <path
                                                d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z">
                                            </path>
                                        </svg></div>
                                </div>
                                <div id="SHAPE418" class='ladi-element'>
                                    <div class='ladi-shape'><svg xmlns="http://www.w3.org/2000/svg" width="100%"
                                            height="100%" preserveAspectRatio="none" viewBox="0 0 1408 1896.0833"
                                            class="" fill="#FFFFFF">
                                            <path
                                                d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z">
                                            </path>
                                        </svg></div>
                                </div>
                                <div id="HEADLINE512" class='ladi-element'>
                                    <h3 class='ladi-headline'>CHĂM SÓC KHÁCH HÀNG<br></h3>
                                </div><a
                                    href="https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575"
                                    target="_blank" id="HEADLINE513" class='ladi-element'>
                                    <h3 class='ladi-headline'>Tầng 3 Tòa nhà LILAMA, 124 Minh Khai, Hai Bà Trưng, Hà Nội.<br></h3>
                                </a>
                            </div>
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
    <!--[if lt IE 9]><script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1697884475394"></script><script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1697884475394"></script><![endif]-->
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet"
        type="text/css">
    <style type="text/css">
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
    </style>
    <script src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1697884475394" type="text/javascript"></script>
    <script id="script_event_data"
        type="application/json">{"HEADLINE20":{"a":"headline","F":"bounceInLeft","C":"0s"},"BUTTON405":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://hacom.vn/","a":"link"}]},"HEADLINE513":{"a":"headline","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575","a":"link"}]}}</script>
    <script id="script_ladipage_run"
        type="text/javascript">(function () { var run = function () { if (typeof window.LadiPageScript == "undefined" || typeof window.ladi == "undefined" || window.ladi == undefined) { setTimeout(run, 100); return; } window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2(); window.LadiPageScript.runtime.ladipage_id = '649bf4d770d01d00120423fd'; window.LadiPageScript.runtime.publish_platform = 'LADIPAGE'; window.LadiPageScript.runtime.version = '1697884475394'; window.LadiPageScript.runtime.cdn_url = 'https://w.ladicdn.com/v2/source/'; window.LadiPageScript.runtime.DOMAIN_FREE = ["preview.ladipage.me", "ldp.link", "ldp.page"]; window.LadiPageScript.runtime.bodyFontSize = 12; window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045"; window.LadiPageScript.runtime.time_zone = 7; window.LadiPageScript.runtime.currency = "VND"; window.LadiPageScript.runtime.convert_replace_str = true; window.LadiPageScript.runtime.desktop_width = 1200; window.LadiPageScript.runtime.mobile_width = 420; window.LadiPageScript.runtime.tracking_button_click = true; window.LadiPageScript.runtime.lang = "vi"; window.LadiPageScript.run(true); window.LadiPageScript.runEventScroll(); }; run(); })();</script>
</body>

</html><!--Publish time: Mon, 23 Oct 2023 08:28:23 GMT--><!--LadiPage build time: Sat, 21 Oct 2023 10:34:35 GMT-->
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
