import React from "react";
import { Metadata } from "next";
import AppContainer from "@/common/AppContainer";
import style from "./style.module.scss";
export const metadata: Metadata = {
  title: "HACOM - Chính Sách Nhập Lại Tính Phí",
  description: "HACOM - Chính Sách Nhập Lại Tính Phí",
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
    <meta name="description" content="HACOM - Chính Sách Nhập Lại Tính Phí">
    <meta id='viewport' name='viewport' content='width=device-width, initial-scale=1' />
    <script
        type='text/javascript'>window.ladi_viewport = function (i) { var a = document; var b = window.ladi_screen_width || window.screen.width; i = i ? i : 'innerWidth'; var c = window[i] > 0 ? window[i] : b; var d = c; var e = c >= 768; var f = ""; if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) { window.ladi_is_desktop = e; } if (!e) { d = 420; } else { d = 1200; } f = "width=" + d + ",user-scalable=no"; var g = 1; if (!e && d != b && b > 0) { g = b / d; } if (g != 1) { f += ",initial-scale=" + g + ",minimum-scale=" + g + ",maximum-scale=" + g; } var h = a.getElementById("viewport"); if (!h) { h = a.createElement("meta"); h.setAttribute("id", "viewport"); h.setAttribute("name", "viewport"); a.head.appendChild(h); } h.setAttribute("content", f); }; window.ladi_viewport(); window.ladi_fbq_data = []; window.ladi_fbq = function () { window.ladi_fbq_data.push(arguments); }; window.ladi_ttq_data = []; window.ladi_ttq = function () { window.ladi_ttq_data.push(arguments); };</script>
    <link rel="canonical" href="http://preview.ladipage.me/649d30f165e5360012208665" />
    <meta property="og:url" content="http://preview.ladipage.me/649d30f165e5360012208665" />
    <meta property="og:title" content="Chính sách cho doanh nghiệp" />
    <meta property="og:type" content="website" />
    <meta property="og:image"
        content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png">
    <meta property="og:description" content="HACOM - Chính Sách Nhập Lại Tính Phí" />
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
        #IMAGE541>.ladi-image>.ladi-image-background,
        #BOX464,
        #GROUP479,
        #BOX478,
        #BOX479,
        #GROUP481,
        #BOX480,
        #GROUP500,
        #GROUP499,
        #BOX482,
        #IMAGE546>.ladi-image>.ladi-image-background,
        #GROUP498,
        #GROUP508,
        #GROUP485,
        #BOX485,
        #IMAGE549>.ladi-image>.ladi-image-background,
        #GROUP501,
        #GROUP486,
        #BOX487,
        #IMAGE550>.ladi-image>.ladi-image-background,
        #GROUP493,
        #GROUP504,
        #BOX489,
        #IMAGE554>.ladi-image>.ladi-image-background,
        #GROUP491,
        #GROUP505,
        #BOX488,
        #IMAGE555>.ladi-image>.ladi-image-background,
        #GROUP495,
        #BOX490,
        #IMAGE556>.ladi-image>.ladi-image-background,
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
        #BOX478>.ladi-box:hover,
        #BOX479>.ladi-box:hover,
        #BOX480>.ladi-box:hover,
        #BOX482>.ladi-box:hover,
        #BOX485>.ladi-box:hover,
        #BOX487>.ladi-box:hover,
        #BOX489>.ladi-box:hover,
        #BOX488>.ladi-box:hover,
        #BOX490>.ladi-box:hover {
            opacity: 1;
        }

        #HEADLINE517>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #SECTION403>.ladi-section-background,
        #BOX479>.ladi-box,
        #SECTION405>.ladi-section-background {
            background-color: rgb(255, 255, 255);
        }

        #BOX464>.ladi-box,
        #BOX478>.ladi-box {
            border-width: 1px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(245, 245, 245);
        }

        #BOX464>.ladi-box,
        #BOX478>.ladi-box,
        #SECTION404>.ladi-section-background {
            background-color: rgb(245, 245, 245);
        }

        #HEADLINE474>.ladi-headline,
        #HEADLINE519>.ladi-headline,
        #HEADLINE520>.ladi-headline,
        #HEADLINE521>.ladi-headline,
        #HEADLINE514>.ladi-headline,
        #HEADLINE515>.ladi-headline,
        #HEADLINE513>.ladi-headline {
            font-size: 16px;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BUTTON405>.ladi-button>.ladi-button-background,
        #BUTTON408>.ladi-button>.ladi-button-background,
        #BOX482>.ladi-box,
        #BOX485>.ladi-box,
        #BOX487>.ladi-box,
        #BOX489>.ladi-box,
        #BOX488>.ladi-box,
        #BOX490>.ladi-box {
            background-color: rgb(236, 28, 36);
        }

        #BUTTON405>.ladi-button,
        #BUTTON408>.ladi-button {
            border-width: 1px;
            border-radius: 5px;
            border-style: solid;
            border-color: rgb(236, 28, 36);
        }

        #BUTTON_TEXT405 {
            left: 0px;
        }

        #BUTTON_TEXT405>.ladi-headline,
        #BUTTON_TEXT408>.ladi-headline,
        #HEADLINE528>.ladi-headline,
        #HEADLINE529>.ladi-headline,
        #HEADLINE530>.ladi-headline,
        #HEADLINE532>.ladi-headline,
        #HEADLINE531>.ladi-headline,
        #HEADLINE533>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: center;
        }

        #HEADLINE518>.ladi-headline,
        #HEADLINE525>.ladi-headline,
        #HEADLINE512>.ladi-headline {
            font-weight: bold;
            line-height: 1.6;
            color: rgb(236, 28, 36);
        }

        #HEADLINE519 {
            top: 132.5px;
        }

        #BUTTON408 {
            height: 80px;
        }

        #BUTTON_TEXT408 {
            width: 395px;
            top: 9px;
            left: 0px;
        }

        #BOX479>.ladi-box {
            border-width: 1px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(236, 28, 36);
        }

        #HEADLINE522>.ladi-headline {
            font-size: 16px;
            font-style: italic;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BOX480>.ladi-box {
            border-width: 1px;
            border-radius: 10px;
            border-style: solid;
            border-color: rgb(19, 9, 126);
            background-color: rgb(19, 9, 126);
        }

        #HEADLINE523>.ladi-headline {
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #HEADLINE524>.ladi-headline {
            font-size: 16px;
            line-height: 1.6;
            color: rgb(255, 255, 255);
            text-align: left;
        }

        #HEADLINE526>.ladi-headline,
        #HEADLINE538>.ladi-headline {
            font-size: 18px;
            font-weight: bold;
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #BOX482>.ladi-box,
        #BOX485>.ladi-box,
        #BOX487>.ladi-box,
        #BOX489>.ladi-box,
        #BOX488>.ladi-box,
        #BOX490>.ladi-box {
            border-width: 1px;
            border-radius: 350px;
            border-style: solid;
            border-color: rgb(236, 28, 36);
        }

        #HEADLINE539>.ladi-headline {
            line-height: 1.6;
            color: rgb(0, 0, 0);
            text-align: left;
        }

        #GROUP477 {
            height: 156.362px;
        }

        #HEADLINE514 {
            top: 97.362px;
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
            fill: rgb(0, 0, 0);
        }

        #SHAPE417 {
            height: 20.893px;
            top: 98.362px;
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
                top: 199.947px;
                left: 0px;
            }

            #HEADLINE20>.ladi-headline {
                font-size: 55px;
            }

            #HEADLINE517 {
                width: 603px;
                top: 280.5px;
                left: 0px;
            }

            #HEADLINE517>.ladi-headline,
            #HEADLINE523>.ladi-headline {
                font-size: 32px;
            }

            #IMAGE541,
            #IMAGE541>.ladi-image>.ladi-image-background {
                width: 450.283px;
                height: 466.493px;
            }

            #IMAGE541 {
                top: 99.4px;
                left: 863.319px;
            }

            #IMAGE541>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s800x800/5d3c13acdc09063fd1918045/nv-1-20230629073419-hz66z.png");
            }

            #SECTION403 {
                height: 1803.6px;
            }

            #GROUP465,
            #BOX464,
            #GROUP496,
            #GROUP479,
            #BOX478 {
                width: 578.627px;
                height: 279px;
            }

            #GROUP465 {
                top: 137px;
                left: 0px;
            }

            #HEADLINE474 {
                width: 506px;
                top: 135.5px;
                left: 39.3135px;
            }

            #BUTTON405 {
                width: 500px;
                height: 80px;
            }

            #BUTTON405,
            #BUTTON408 {
                top: 33.607px;
                left: 39.3135px;
            }

            #BUTTON_TEXT405 {
                width: 390px;
                top: 9px;
            }

            #BUTTON_TEXT405>.ladi-headline,
            #BUTTON_TEXT408>.ladi-headline {
                font-size: 21px;
            }

            #HEADLINE518 {
                width: 819px;
                top: 40.607px;
                left: 191.39px;
            }

            #HEADLINE518>.ladi-headline,
            #HEADLINE525>.ladi-headline,
            #HEADLINE512>.ladi-headline {
                font-size: 32px;
                text-align: left;
            }

            #GROUP496 {
                top: 137px;
                left: 621.373px;
            }

            #HEADLINE519 {
                width: 365px;
                left: 48.3135px;
            }

            #BUTTON408 {
                width: 500px;
            }

            #HEADLINE520,
            #HEADLINE521 {
                width: 369px;
            }

            #HEADLINE520 {
                top: 164.5px;
                left: 50.314px;
            }

            #HEADLINE521 {
                top: 198.5px;
                left: 50.314px;
            }

            #GROUP480,
            #BOX479 {
                width: 1200px;
                height: 90px;
            }

            #GROUP480 {
                top: 448.107px;
                left: 0px;
            }

            #HEADLINE522 {
                width: 1129px;
                top: 19.5px;
                left: 36.39px;
            }

            #GROUP497,
            #GROUP481,
            #BOX480 {
                width: 1200px;
                height: 236px;
            }

            #GROUP497 {
                top: 586.107px;
                left: 0px;
            }

            #HEADLINE523 {
                width: 538px;
                top: 19.1833px;
                left: 331px;
            }

            #HEADLINE524 {
                width: 1088px;
                top: 88.183px;
                left: 56px;
            }

            #HEADLINE525 {
                width: 1001px;
                top: 860.8px;
                left: 99.5px;
            }

            #HEADLINE526,
            #HEADLINE538 {
                width: 352px;
            }

            #HEADLINE526 {
                top: 934.607px;
                left: 0px;
            }

            #GROUP484,
            #GROUP500,
            #GROUP499,
            #BOX482,
            #GROUP487,
            #GROUP498,
            #GROUP508,
            #GROUP485,
            #BOX485,
            #GROUP488,
            #GROUP501,
            #GROUP486,
            #BOX487,
            #GROUP503,
            #GROUP493,
            #GROUP504,
            #BOX489,
            #GROUP509,
            #GROUP491,
            #GROUP505,
            #BOX488,
            #GROUP502,
            #GROUP495,
            #BOX490 {
                width: 350px;
                height: 350px;
            }

            #GROUP484 {
                top: 992.11px;
                left: 2px;
            }

            #IMAGE546,
            #IMAGE546>.ladi-image>.ladi-image-background {
                width: 234px;
                height: 234px;
            }

            #IMAGE546 {
                top: 17px;
                left: 58px;
            }

            #IMAGE546>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x550/5d3c13acdc09063fd1918045/laptop-20230629085339-muhxn.png");
            }

            #HEADLINE528,
            #HEADLINE531 {
                width: 200px;
                top: 222px;
                left: 74px;
            }

            #HEADLINE528>.ladi-headline,
            #HEADLINE529>.ladi-headline,
            #HEADLINE530>.ladi-headline,
            #HEADLINE532>.ladi-headline,
            #HEADLINE531>.ladi-headline,
            #HEADLINE533>.ladi-headline {
                font-size: 18px;
            }

            #GROUP487 {
                top: 992.11px;
                left: 426px;
            }

            #HEADLINE529,
            #HEADLINE532 {
                width: 243px;
                top: 225px;
                left: 53.5px;
            }

            #IMAGE549,
            #IMAGE549>.ladi-image>.ladi-image-background {
                width: 224.431px;
                height: 138.978px;
            }

            #IMAGE549 {
                top: 64.51px;
                left: 61.785px;
            }

            #IMAGE549>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/pc-20230629085339-1r7nj.png");
            }

            #GROUP488 {
                top: 992.11px;
                left: 850px;
            }

            #HEADLINE530,
            #HEADLINE533 {
                width: 260px;
                top: 222px;
                left: 45px;
            }

            #IMAGE550,
            #IMAGE550>.ladi-image>.ladi-image-background {
                width: 224.66px;
                height: 173.098px;
            }

            #IMAGE550 {
                top: 47.45px;
                left: 62.67px;
            }

            #IMAGE550>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x500/5d3c13acdc09063fd1918045/linh-kien-may-tinh-20230629085339-rpscd.png");
            }

            #GROUP503 {
                top: 1391.11px;
                left: 424px;
            }

            #IMAGE554,
            #IMAGE554>.ladi-image>.ladi-image-background {
                width: 230.797px;
                height: 127.4px;
            }

            #IMAGE554 {
                top: 66.82px;
                left: 61.601px;
            }

            #IMAGE554>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/wifi-20230629085339-28fzd.png");
            }

            #GROUP509 {
                top: 1391.11px;
                left: 0px;
            }

            #IMAGE555,
            #IMAGE555>.ladi-image>.ladi-image-background {
                width: 231.557px;
                height: 183.442px;
            }

            #IMAGE555 {
                top: 30.78px;
                left: 60.2215px;
            }

            #IMAGE555>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x500/5d3c13acdc09063fd1918045/man-hinh-may-tinh-1-20230629085339-p2amp.png");
            }

            #GROUP502 {
                top: 1391.11px;
                left: 848px;
            }

            #IMAGE556,
            #IMAGE556>.ladi-image>.ladi-image-background {
                width: 240.862px;
                height: 100.206px;
            }

            #IMAGE556 {
                top: 94.01px;
                left: 56.569px;
            }

            #IMAGE556>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/chuot-va-ban-phim-20230629085339-vofrk.png");
            }

            #SECTION404 {
                height: 150.6px;
            }

            #HEADLINE538 {
                top: 10.01px;
                left: 0px;
            }

            #HEADLINE539 {
                width: 650px;
                top: 43.3px;
                left: 2px;
            }

            #HEADLINE539>.ladi-headline {
                font-size: 17px;
            }

            #SECTION405 {
                height: 246.6px;
            }

            #GROUP477 {
                width: 521.5px;
                top: 42.038px;
                left: 395px;
            }

            #HEADLINE514,
            #HEADLINE515 {
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

            #HEADLINE512 {
                width: 410px;
            }

            #HEADLINE513 {
                width: 491px;
            }
        }

        @media (max-width: 767px) {
            #Header {
                height: 121.174px;
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
                top: 38.1738px;
                left: 10px;
            }

            #HEADLINE20>.ladi-headline {
                font-size: 15px;
            }

            #HEADLINE517 {
                width: 267px;
                top: 66.1738px;
                left: 9px;
            }

            #HEADLINE517>.ladi-headline {
                font-size: 14px;
            }

            #IMAGE541,
            #IMAGE541>.ladi-image>.ladi-image-background {
                width: 116.312px;
                height: 120.5px;
            }

            #IMAGE541 {
                top: 0px;
                left: 290.688px;
            }

            #IMAGE541>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x450/5d3c13acdc09063fd1918045/nv-1-20230629073419-hz66z.png");
            }

            #SECTION403 {
                height: 1971px;
            }

            #GROUP465,
            #BOX464 {
                width: 424px;
                height: 258px;
            }

            #GROUP465 {
                top: 109px;
                left: -4px;
            }

            #HEADLINE474 {
                width: 371px;
                top: 104.062px;
                left: 23.5977px;
            }

            #BUTTON405 {
                width: 395.186px;
                height: 57.4085px;
                top: 25.76px;
                left: 18.1463px;
            }

            #BUTTON_TEXT405 {
                width: 393px;
                top: 11.0113px;
            }

            #BUTTON_TEXT405>.ladi-headline,
            #BUTTON_TEXT408>.ladi-headline,
            #HEADLINE539>.ladi-headline {
                font-size: 18px;
            }

            #HEADLINE518 {
                width: 420px;
                top: 25px;
                left: 0.5px;
            }

            #HEADLINE518>.ladi-headline,
            #HEADLINE525>.ladi-headline {
                font-size: 20px;
                text-align: center;
            }

            #GROUP496,
            #GROUP479,
            #BOX478 {
                width: 420px;
                height: 259px;
            }

            #GROUP496 {
                top: 400px;
                left: 0px;
            }

            #HEADLINE519 {
                width: 362px;
                left: 20.0686px;
            }

            #BUTTON408 {
                width: 397.464px;
                top: 32.607px;
                left: 11.268px;
            }

            #HEADLINE520,
            #HEADLINE521 {
                width: 359px;
            }

            #HEADLINE520 {
                top: 166.5px;
                left: 20.5207px;
            }

            #HEADLINE521 {
                top: 200.5px;
                left: 20.5207px;
            }

            #GROUP480,
            #BOX479 {
                width: 389px;
                height: 124px;
            }

            #GROUP480 {
                top: 681px;
                left: 16px;
            }

            #HEADLINE522 {
                width: 366px;
                top: 10.5px;
                left: 11.7964px;
            }

            #GROUP497,
            #GROUP481,
            #BOX480 {
                width: 420px;
                height: 330px;
            }

            #GROUP497 {
                top: 832px;
                left: 0.5px;
            }

            #HEADLINE523 {
                width: 376px;
                top: 26.8241px;
                left: 28.85px;
            }

            #HEADLINE523>.ladi-headline {
                font-size: 22px;
            }

            #HEADLINE524 {
                width: 381px;
                top: 71.8329px;
                left: 23.6px;
            }

            #HEADLINE525 {
                width: 421px;
                top: 1205px;
                left: -0.5px;
            }

            #HEADLINE526 {
                width: 388px;
                top: 1286px;
                left: 0.5px;
            }

            #GROUP484,
            #GROUP500,
            #GROUP499,
            #BOX482,
            #GROUP487,
            #GROUP498,
            #GROUP508,
            #GROUP485,
            #BOX485,
            #GROUP488,
            #GROUP501,
            #GROUP486,
            #BOX487,
            #GROUP503,
            #GROUP493,
            #GROUP504,
            #BOX489,
            #GROUP509,
            #GROUP491,
            #GROUP505,
            #BOX488,
            #GROUP502,
            #GROUP495,
            #BOX490 {
                width: 183px;
                height: 183px;
            }

            #GROUP484 {
                top: 1337px;
                left: 13.5px;
            }

            #IMAGE546,
            #IMAGE546>.ladi-image>.ladi-image-background {
                width: 122.349px;
                height: 122.349px;
            }

            #IMAGE546 {
                top: 8.88857px;
                left: 30.3257px;
            }

            #IMAGE546>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x450/5d3c13acdc09063fd1918045/laptop-20230629085339-muhxn.png");
            }

            #HEADLINE528 {
                width: 105px;
            }

            #HEADLINE528,
            #HEADLINE531 {
                top: 116.074px;
                left: 38.6914px;
            }

            #HEADLINE528>.ladi-headline,
            #HEADLINE529>.ladi-headline,
            #HEADLINE530>.ladi-headline,
            #HEADLINE532>.ladi-headline,
            #HEADLINE531>.ladi-headline,
            #HEADLINE533>.ladi-headline {
                font-size: 12px;
            }

            #GROUP487 {
                top: 1747px;
                left: 219px;
            }

            #HEADLINE529 {
                width: 165px;
                top: 117.643px;
                left: 9px;
            }

            #IMAGE549,
            #IMAGE549>.ladi-image>.ladi-image-background {
                width: 117.345px;
                height: 72.6656px;
            }

            #IMAGE549 {
                top: 33.7295px;
                left: 32.3047px;
            }

            #IMAGE549>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/pc-20230629085339-1r7nj.png");
            }

            #GROUP488 {
                top: 1747px;
                left: 13.5px;
            }

            #HEADLINE530 {
                width: 164px;
                top: 108.074px;
                left: 10.7643px;
            }

            #IMAGE550,
            #IMAGE550>.ladi-image>.ladi-image-background {
                width: 117.465px;
                height: 90.5055px;
            }

            #IMAGE550 {
                top: 24.8096px;
                left: 32.7675px;
            }

            #IMAGE550>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/linh-kien-may-tinh-20230629085339-rpscd.png");
            }

            #GROUP503 {
                top: 1337px;
                left: 219px;
            }

            #HEADLINE532 {
                width: 127px;
                top: 117.643px;
                left: 27.9729px;
            }

            #IMAGE554,
            #IMAGE554>.ladi-image>.ladi-image-background {
                width: 120.674px;
                height: 66.612px;
            }

            #IMAGE554 {
                top: 34.9373px;
                left: 32.2085px;
            }

            #IMAGE554>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/wifi-20230629085339-28fzd.png");
            }

            #GROUP509 {
                top: 1538px;
                left: 13.5px;
            }

            #HEADLINE531 {
                width: 104px;
            }

            #IMAGE555,
            #IMAGE555>.ladi-image>.ladi-image-background {
                width: 121.071px;
                height: 95.9144px;
            }

            #IMAGE555 {
                top: 16.0936px;
                left: 31.4873px;
            }

            #IMAGE555>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/man-hinh-may-tinh-1-20230629085339-p2amp.png");
            }

            #GROUP502 {
                top: 1538px;
                left: 219px;
            }

            #HEADLINE533 {
                width: 175px;
                top: 106.074px;
                left: 5px;
            }

            #IMAGE556,
            #IMAGE556>.ladi-image>.ladi-image-background {
                width: 125.936px;
                height: 52.3934px;
            }

            #IMAGE556 {
                top: 49.1538px;
                left: 29.5775px;
            }

            #IMAGE556>.ladi-image>.ladi-image-background {
                background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/chuot-va-ban-phim-20230629085339-vofrk.png");
            }

            #SECTION404 {
                height: 183.56px;
            }

            #HEADLINE538 {
                width: 310px;
                top: 11px;
                left: 13.5px;
            }

            #HEADLINE539 {
                width: 414px;
                top: 48px;
                left: 20px;
            }

            #SECTION405 {
                height: 194.462px;
            }

            #GROUP477,
            #HEADLINE512 {
                width: 418px;
            }

            #GROUP477 {
                top: 10px;
                left: 1px;
            }

            #HEADLINE514,
            #HEADLINE515,
            #HEADLINE513 {
                width: 356px;
            }

            #HEADLINE514,
            #HEADLINE513 {
                left: 31.0951px;
            }

            #HEADLINE515 {
                left: 30.0756px;
            }

            #SHAPE416 {
                width: 26.5073px;
                left: 3.56829px;
            }

            #SHAPE417 {
                width: 21.3007px;
                left: 6.62683px;
            }

            #SHAPE418 {
                width: 19.6839px;
                left: 7.64634px;
            }

            #HEADLINE512>.ladi-headline {
                font-size: 29px;
                text-align: center;
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
                    <h3 class='ladi-headline ladi-transition'>CHÍNH SÁCH NHẬP LẠI TÍNH PHÍ<br></h3>
                </div>
                <div id="HEADLINE517" class='ladi-element'>
                    <h3 class='ladi-headline'>CAM KẾT GIÁ TỐT NHẤT THỊ TRƯỜNG<br></h3>
                </div>
                <div id="IMAGE541" class='ladi-element'>
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
                        <div id="HEADLINE474" class='ladi-element'>
                            <h3 class='ladi-headline'>● Trong 15 ngày đầu mua và sử dụng sản phẩm, nếu thấy không phù
                                hợp khách hàng có thể trả lại sản phẩm và được hoàn lại tiền sau khi trừ đi khoản chi
                                phí khấu hao dựa trên số ngày thực tế đã sử dụng sản phẩm.<br></h3>
                        </div><a href="https://hacom.vn/" target="_blank" id="BUTTON405" class='ladi-element'>
                            <div class='ladi-button'>
                                <div class="ladi-button-background"></div>
                                <div id="BUTTON_TEXT405" class='ladi-element ladi-button-headline'>
                                    <p class='ladi-headline'>THỜI GIAN ÁP DỤNG CHÍNH SÁCH</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div id="HEADLINE518" class='ladi-element'>
                    <h3 class='ladi-headline'>NỘI DUNG CHÍNH SÁCH ĐỔI TRẢ VÀ CÁCH TÍNH PHÍ<br></h3>
                </div>
                <div data-action="true" id="GROUP496" class='ladi-element'>
                    <div class='ladi-group'>
                        <div data-action="true" id="GROUP479" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX478" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE519" class='ladi-element'>
                                    <h3 class='ladi-headline'>● Thời gian sử dụng từ 01-05 ngày: Tính phí 10%<br></h3>
                                </div><a href="https://hacom.vn/" target="_blank" id="BUTTON408" class='ladi-element'>
                                    <div class='ladi-button'>
                                        <div class="ladi-button-background"></div>
                                        <div id="BUTTON_TEXT408" class='ladi-element ladi-button-headline'>
                                            <p class='ladi-headline'>QUY ĐỊNH CÁCH TÍNH CHO PHÍ KHẤU HAO</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div id="HEADLINE520" class='ladi-element'>
                            <h3 class='ladi-headline'>● Thời gian sử dụng từ 06-10 ngày: Tính phí 15%<br></h3>
                        </div>
                        <div id="HEADLINE521" class='ladi-element'>
                            <h3 class='ladi-headline'>● Thời gian sử dụng từ 11-15 ngày: Tính phí 20%<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP480" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="BOX479" class='ladi-element'>
                            <div class='ladi-box ladi-transition'></div>
                        </div>
                        <div id="HEADLINE522" class='ladi-element'>
                            <h3 class='ladi-headline'><span style="font-weight: bold;">Lưu ý</span>: Chính sách chỉ áp
                                dụng trong 15 ngày đầu sử dụng, số ngày được tính từ lúc khách hàng nhận được sản phẩm.
                                Chi phí % khấu hao trả hàng được tính theo giá bán trên hóa đơn.<br></h3>
                        </div>
                    </div>
                </div>
                <div id="GROUP497" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP481" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX480" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE523" class='ladi-element'>
                                    <h3 class='ladi-headline'><span style="font-weight: 700;">ĐIỀU KIỆN ÁP DỤNG CHÍNH
                                            SÁCH</span><br></h3>
                                </div>
                            </div>
                        </div>
                        <div id="HEADLINE524" class='ladi-element'>
                            <h3 class='ladi-headline'>● Sản phẩm trả lại phải còn đủ vỏ hộp và không rách nát. Sạc, phụ
                                kiện và các sản phẩm khuyến mại đi kèm theo vẫn còn đầy đủ (nếu có).
                                <br>● Sản phẩm không móp, không méo, không trầy xước và không ngấm chất lỏng.
                                <br>● Tổng quan còn đủ điều kiện bảo hành chính hãng.
                                <br>● Sẽ được hỗ trợ nhanh và đầy đủ việc thu hồi hóa đơn VAT (nếu có)<br>
                            </h3>
                        </div>
                    </div>
                </div>
                <div id="HEADLINE525" class='ladi-element'>
                    <h3 class='ladi-headline'>QUY ĐỊNH CÁC DÒNG SẢN PHẨM ĐƯỢC ÁP DỤNG CHÍNH SÁCH<br></h3>
                </div>
                <div id="HEADLINE526" class='ladi-element'>
                    <h3 class='ladi-headline'>1. Danh sách sản phẩm được nhập lại<br></h3>
                </div>
                <div id="GROUP484" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP500" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="GROUP499" class='ladi-element'>
                                    <div class='ladi-group'>
                                        <div id="BOX482" class='ladi-element'>
                                            <div class='ladi-box ladi-transition'></div>
                                        </div>
                                        <div id="IMAGE546" class='ladi-element'>
                                            <div class='ladi-image'>
                                                <div class="ladi-image-background"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="HEADLINE528" class='ladi-element'>
                                    <h3 class='ladi-headline'>Các dòng Laptop<br></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP487" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP498" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="GROUP508" class='ladi-element'>
                                    <div class='ladi-group'>
                                        <div id="GROUP485" class='ladi-element'>
                                            <div class='ladi-group'>
                                                <div id="BOX485" class='ladi-element'>
                                                    <div class='ladi-box ladi-transition'></div>
                                                </div>
                                                <div id="HEADLINE529" class='ladi-element'>
                                                    <h3 class='ladi-headline'>Các dòng PC đồng bộ Hãng<br>và PC Hacom
                                                        lắp sẵn<br></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="IMAGE549" class='ladi-element'>
                                            <div class='ladi-image'>
                                                <div class="ladi-image-background"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP488" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP501" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="GROUP486" class='ladi-element'>
                                    <div class='ladi-group'>
                                        <div id="BOX487" class='ladi-element'>
                                            <div class='ladi-box ladi-transition'></div>
                                        </div>
                                        <div id="HEADLINE530" class='ladi-element'>
                                            <h3 class='ladi-headline'>Các dòng linh kiện cao cấp:
                                                <br>Main; Chip; Ram; Ổ cứng;
                                                <br>Nguồn; VGA<br>
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                                <div id="IMAGE550" class='ladi-element'>
                                    <div class='ladi-image'>
                                        <div class="ladi-image-background"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP503" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP493" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="GROUP504" class='ladi-element'>
                                    <div class='ladi-group'>
                                        <div id="BOX489" class='ladi-element'>
                                            <div class='ladi-box ladi-transition'></div>
                                        </div>
                                        <div id="HEADLINE532" class='ladi-element'>
                                            <h3 class='ladi-headline'>Các loại Thiết bị mạng<br></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE554" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP509" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP491" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="GROUP505" class='ladi-element'>
                                    <div class='ladi-group'>
                                        <div id="BOX488" class='ladi-element'>
                                            <div class='ladi-box ladi-transition'></div>
                                        </div>
                                        <div id="HEADLINE531" class='ladi-element'>
                                            <h3 class='ladi-headline'>Các dòng Màn hình<br></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE555" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="GROUP502" class='ladi-element'>
                    <div class='ladi-group'>
                        <div id="GROUP495" class='ladi-element'>
                            <div class='ladi-group'>
                                <div id="BOX490" class='ladi-element'>
                                    <div class='ladi-box ladi-transition'></div>
                                </div>
                                <div id="HEADLINE533" class='ladi-element'>
                                    <h3 class='ladi-headline'>Các loại phím, chuột cao cấp
                                        <br>(có giá trên 1 triệu)<br>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div id="IMAGE556" class='ladi-element'>
                            <div class='ladi-image'>
                                <div class="ladi-image-background"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="SECTION404" class='ladi-section'>
            <div class='ladi-section-background'></div>
            <div class="ladi-container">
                <div id="HEADLINE538" class='ladi-element'>
                    <h3 class='ladi-headline'>2. Dòng sản phẩm không nhập lại<br></h3>
                </div>
                <div id="HEADLINE539" class='ladi-element'>
                    <h3 class='ladi-headline'>● Các sản phẩm đặt riêng theo yêu cầu.
                        <br>● Các sản phẩm không nằm trong <span style="font-weight: bold;">"Danh sách sản phẩm được
                            nhập lại"</span>.
                        <br>● Các nhóm hàng đặc biệt theo thỏa thuận.<br>
                    </h3>
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
        type="application/json">{"HEADLINE20":{"a":"headline","F":"bounceInLeft","C":"0s"},"BUTTON405":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://hacom.vn/","a":"link"}]},"BUTTON408":{"a":"button","cs":[{"dr":"action","dv":"_blank","dw":"https://hacom.vn/","a":"link"}]},"HEADLINE513":{"a":"headline","cs":[{"dr":"action","dv":"_blank","dw":"https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575","a":"link"}]}}</script>
    <script id="script_ladipage_run"
        type="text/javascript">(function () { var run = function () { if (typeof window.LadiPageScript == "undefined" || typeof window.ladi == "undefined" || window.ladi == undefined) { setTimeout(run, 100); return; } window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2(); window.LadiPageScript.runtime.ladipage_id = '649d30f165e5360012208665'; window.LadiPageScript.runtime.publish_platform = 'LADIPAGE'; window.LadiPageScript.runtime.version = '1697884475394'; window.LadiPageScript.runtime.cdn_url = 'https://w.ladicdn.com/v2/source/'; window.LadiPageScript.runtime.DOMAIN_FREE = ["preview.ladipage.me", "ldp.link", "ldp.page"]; window.LadiPageScript.runtime.bodyFontSize = 12; window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045"; window.LadiPageScript.runtime.time_zone = 7; window.LadiPageScript.runtime.currency = "VND"; window.LadiPageScript.runtime.convert_replace_str = true; window.LadiPageScript.runtime.desktop_width = 1200; window.LadiPageScript.runtime.mobile_width = 420; window.LadiPageScript.runtime.tracking_button_click = true; window.LadiPageScript.runtime.lang = "vi"; window.LadiPageScript.run(true); window.LadiPageScript.runEventScroll(); }; run(); })();</script>
</body>

</html><!--Publish time: Mon, 23 Oct 2023 08:46:35 GMT--><!--LadiPage build time: Sat, 21 Oct 2023 10:34:35 GMT-->
  `;

  return (
    <div>
      <div
        className="text-container"
        dangerouslySetInnerHTML={{ __html: aaa }}
      />
      <AppContainer>
        <div className={style.box}>
        <div className={style.contentBox}>
          <div>
            <h3 className={style.title}>CHĂM SÓC KHÁCH HÀNG</h3>
          </div>
          <div className={style.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              fill="#000000"
              className={style.icon}
            >
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path>
            </svg>
            <a
              href="https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575"
              target="_blank"
              id="HEADLINE513"
            >
              <h3>
                Tầng 3 Tòa nhà LILAMA, 124 Minh Khai, Hai Bà Trưng, Hà Nội.
              </h3>
            </a>
          </div>

          <div className={style.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              fill="#000000"
              className={style.icon}
            >
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"></path>
            </svg>
            <h3>dichvukhachhang@hacom.vn</h3>
          </div>

          <div className={style.item}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 1408 1896.0833"
              fill="#000000"
              className={style.icon}
            >
              <path d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path>
            </svg>
            <h3>1900 1903</h3>
          </div>
        </div>
        </div>
      </AppContainer>
    </div>
  );
};

export default page;
