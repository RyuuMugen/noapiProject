import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Chính Sách Bảo Hành",
  description: "HACOM - Chính Sách Bảo Hành",
};
const page = () => {
  const aaa = `
  <!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>HACOM - Chính sách bảo hành</title>
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Expires" content="-1" />
    <meta name="keywords" content="" />
    <meta name="description" content="HACOM - Chính Sách Bảo Hành" />
    <meta
      id="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    <script type="text/javascript">
      window.ladi_viewport = function () {
        var screen_width = window.ladi_screen_width || window.screen.width;
        var width = window.innerWidth > 0 ? window.innerWidth : screen_width;
        var widthDevice = width;
        var is_desktop = width >= 768;
        var content = "";
        if (
          typeof window.ladi_is_desktop == "undefined" ||
          window.ladi_is_desktop == undefined
        ) {
          window.ladi_is_desktop = is_desktop;
        }
        if (!is_desktop) {
          widthDevice = 420;
        } else {
          widthDevice = 960;
        }
        content = "width=" + widthDevice + ", user-scalable=no";
        var scale = 1;
        if (!is_desktop && widthDevice != screen_width && screen_width > 0) {
          scale = screen_width / widthDevice;
        }
        if (scale != 1) {
          content +=
            ", initial-scale=" +
            scale +
            ", minimum-scale=" +
            scale +
            ", maximum-scale=" +
            scale;
        }
        var docViewport = document.getElementById("viewport");
        if (!docViewport) {
          docViewport = document.createElement("meta");
          docViewport.setAttribute("id", "viewport");
          docViewport.setAttribute("name", "viewport");
          document.head.appendChild(docViewport);
        }
        docViewport.setAttribute("content", content);
      };
      window.ladi_viewport();
      window.ladi_fbq_data = [];
      window.ladi_fbq = function () {
        window.ladi_fbq_data.push(arguments);
      };
      window.ladi_ttq_data = [];
      window.ladi_ttq = function () {
        window.ladi_ttq_data.push(arguments);
      };
    </script>
    <meta property="og:title" content="Chính sách bảo hành" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png"
    />
    <meta property="og:description" content="HACOM - Chính Sách Bảo Hành" />
    <meta name="format-detection" content="telephone=no" />
    <link
      rel="shortcut icon"
      href="https://static.ladipage.net/5d3c13acdc09063fd1918045/favicon-hacom-20220905021812-20230302033359-dom62.png"
    />
    <link rel="dns-prefetch" />
    <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin />
    <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin />
    <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin />
    <link rel="preconnect" href="https://api.ldpform.com/" crossorigin />
    <link rel="preconnect" href="https://a.ladipage.com/" crossorigin />
    <link rel="preconnect" href="https://api.sales.ldpform.net/" crossorigin />
    <link
      rel="preload"
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
      as="style"
      onload="this.onload = null; this.rel = 'stylesheet';"
    />
    <link
      rel="preload"
      href="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1687845069506"
      as="script"
    />
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
        -moz-osx-font-smoothing: grayscale;
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
        display: block;
      }
      body {
        line-height: 1;
      }
      a {
        text-decoration: none;
      }
      ol,
      ul {
        list-style: none;
      }
      blockquote,
      q {
        quotes: none;
      }
      blockquote:after,
      blockquote:before,
      q:after,
      q:before {
        content: "";
        content: none;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
      .ladi-loading {
        z-index: 900000000000;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.1);
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
        position: absolute;
      }
      .ladi-loading .loading div {
        position: absolute;
        width: 6px;
        height: 6px;
        background: #fff;
        border-radius: 50%;
        animation: ladi-loading 1.2s linear infinite;
      }
      .ladi-loading .loading div:nth-child(1) {
        animation-delay: 0s;
        top: 37px;
        left: 66px;
      }
      .ladi-loading .loading div:nth-child(2) {
        animation-delay: -0.1s;
        top: 22px;
        left: 62px;
      }
      .ladi-loading .loading div:nth-child(3) {
        animation-delay: -0.2s;
        top: 11px;
        left: 52px;
      }
      .ladi-loading .loading div:nth-child(4) {
        animation-delay: -0.3s;
        top: 7px;
        left: 37px;
      }
      .ladi-loading .loading div:nth-child(5) {
        animation-delay: -0.4s;
        top: 11px;
        left: 22px;
      }
      .ladi-loading .loading div:nth-child(6) {
        animation-delay: -0.5s;
        top: 22px;
        left: 11px;
      }
      .ladi-loading .loading div:nth-child(7) {
        animation-delay: -0.6s;
        top: 37px;
        left: 7px;
      }
      .ladi-loading .loading div:nth-child(8) {
        animation-delay: -0.7s;
        top: 52px;
        left: 11px;
      }
      .ladi-loading .loading div:nth-child(9) {
        animation-delay: -0.8s;
        top: 62px;
        left: 22px;
      }
      .ladi-loading .loading div:nth-child(10) {
        animation-delay: -0.9s;
        top: 66px;
        left: 37px;
      }
      .ladi-loading .loading div:nth-child(11) {
        animation-delay: -1s;
        top: 62px;
        left: 52px;
      }
      .ladi-loading .loading div:nth-child(12) {
        animation-delay: -1.1s;
        top: 52px;
        left: 62px;
      }
      @keyframes ladi-loading {
        0%,
        100%,
        20%,
        80% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.5);
        }
      }
      .ladipage-message {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10000000000;
        background: rgba(0, 0, 0, 0.3);
      }
      .ladipage-message .ladipage-message-box {
        width: 400px;
        max-width: calc(100% - 50px);
        height: 160px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-color: #fff;
        position: fixed;
        top: calc(50% - 155px);
        left: 0;
        right: 0;
        margin: auto;
        border-radius: 10px;
      }
      .ladipage-message .ladipage-message-box span {
        display: block;
        background-color: rgba(6, 21, 40, 0.05);
        color: #000;
        padding: 12px 15px;
        font-weight: 600;
        font-size: 16px;
        line-height: 16px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
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
        text-overflow: ellipsis;
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
        cursor: pointer;
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
        background: rgba(0, 0, 0, 0.5);
      }
      .lightbox-screen .lightbox-close {
        position: absolute;
        z-index: 9000000090;
        cursor: pointer;
      }
      .lightbox-screen .lightbox-hidden {
        display: none;
      }
      .lightbox-screen .lightbox-close {
        width: 16px;
        height: 16px;
        margin: 10px;
        background-repeat: no-repeat;
        background-position: center center;
        background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
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
      .ladi-element {
        position: absolute;
      }
      .ladi-overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        pointer-events: none;
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
      .ladi-button > .ladi-button-headline,
      .ladi-button > .ladi-button-shape {
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
      .ladi-button > .ladi-button-shape .ladi-shape {
        margin: auto;
        top: 0;
        bottom: 0;
      }
      .ladi-button > .ladi-button-headline .ladi-headline {
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
        cursor: pointer;
      }
      a:visited {
        color: inherit;
      }
      a:link {
        color: inherit;
      }
      [data-opacity="0"] {
        opacity: 0;
      }
      [data-hidden="true"] {
        display: none;
      }
      [data-action="true"] {
        cursor: pointer;
      }
      .ladi-hidden {
        display: none;
      }
      .ladi-animation-hidden {
        visibility: hidden !important;
        opacity: 0 !important;
      }
      .element-click-selected {
        cursor: pointer;
      }
      .is-2nd-click {
        cursor: pointer;
      }
      .ladi-button-shape.is-2nd-click,
      .ladi-accordion-shape.is-2nd-click {
        z-index: 1;
      }
      .backdrop-popup {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 90000060;
      }
      .backdrop-dropbox {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 90000040;
      }
      .ladi-lazyload {
        background-image: none !important;
      }
      .ladi-list-paragraph ul li.ladi-lazyload:before {
        background-image: none !important;
      }
      @media (min-width: 768px) {
        .ladi-fullwidth {
          width: 100vw !important;
          left: calc(-50vw + 50%) !important;
          box-sizing: border-box !important;
          transform: none !important;
        }
      }
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
        #HEADLINE20,
        #HEADLINE21,
        #IMAGE25,
        #HEADLINE26,
        #HEADLINE27,
        #IMAGE28,
        #HEADLINE30,
        #HEADLINE31,
        #GROUP53,
        #HEADLINE55,
        #HEADLINE66,
        #HEADLINE77,
        #HEADLINE85,
        #HEADLINE88,
        #HEADLINE100,
        #IMAGE134,
        #HEADLINE137,
        #HEADLINE149,
        #HEADLINE213,
        #HEADLINE214,
        #HEADLINE215,
        #HEADLINE216,
        #GROUP220,
        #HEADLINE221,
        #HEADLINE226,
        #HEADLINE229,
        #HEADLINE233,
        #IMAGE234,
        #HEADLINE235,
        #IMAGE241,
        #HEADLINE242,
        #HEADLINE255 {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      }
      @media (max-width: 767px) {
        #HEADLINE20,
        #HEADLINE21,
        #IMAGE25,
        #HEADLINE26,
        #HEADLINE27,
        #IMAGE28,
        #HEADLINE30,
        #HEADLINE31,
        #GROUP53,
        #HEADLINE55,
        #HEADLINE66,
        #HEADLINE77,
        #HEADLINE85,
        #HEADLINE88,
        #HEADLINE100,
        #IMAGE134,
        #HEADLINE137,
        #HEADLINE149,
        #HEADLINE213,
        #HEADLINE214,
        #HEADLINE215,
        #HEADLINE216,
        #HEADLINE221,
        #HEADLINE226,
        #HEADLINE229,
        #HEADLINE233,
        #IMAGE234,
        #HEADLINE235,
        #IMAGE241,
        #HEADLINE242,
        #HEADLINE255 {
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
        src: url("https://w.ladicdn.com/5d3c13acdc09063fd1918045/utm-avobold-20230113032040-7gm8f.ttf")
          format("truetype");
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
    </style>
    <style id="style_element" type="text/css">
      #IMAGE17 > .ladi-image > .ladi-image-background,
      #IMAGE19 > .ladi-image > .ladi-image-background,
      #IMAGE70 > .ladi-image > .ladi-image-background,
      #IMAGE139 > .ladi-image > .ladi-image-background,
      #IMAGE134 > .ladi-image > .ladi-image-background,
      #IMAGE25 > .ladi-image > .ladi-image-background,
      #IMAGE28 > .ladi-image > .ladi-image-background,
      #IMAGE57 > .ladi-image > .ladi-image-background,
      #IMAGE35 > .ladi-image > .ladi-image-background,
      #IMAGE49,
      #IMAGE49 > .ladi-image > .ladi-image-background,
      #IMAGE46,
      #IMAGE46 > .ladi-image > .ladi-image-background,
      #IMAGE67,
      #IMAGE67 > .ladi-image > .ladi-image-background,
      #GROUP395,
      #BOX129,
      #IMAGE99,
      #IMAGE99 > .ladi-image > .ladi-image-background,
      #BOX126,
      #IMAGE87,
      #IMAGE87 > .ladi-image > .ladi-image-background,
      #IMAGE143 > .ladi-image > .ladi-image-background,
      #IMAGE144 > .ladi-image > .ladi-image-background,
      #IMAGE212 > .ladi-image > .ladi-image-background,
      #IMAGE211,
      #IMAGE211 > .ladi-image > .ladi-image-background,
      #IMAGE225,
      #IMAGE225 > .ladi-image > .ladi-image-background,
      #IMAGE231,
      #IMAGE231 > .ladi-image > .ladi-image-background,
      #IMAGE150,
      #IMAGE150 > .ladi-image > .ladi-image-background,
      #IMAGE234 > .ladi-image > .ladi-image-background,
      #IMAGE241 > .ladi-image > .ladi-image-background,
      #BOX327,
      #BOX329,
      #BOX271,
      #GROUP359,
      #BOX272,
      #BOX273,
      #BOX274,
      #BOX275,
      #BOX280,
      #BOX282,
      #BOX284,
      #BOX286,
      #BOX288,
      #BOX290,
      #BOX292,
      #BOX294,
      #BOX296,
      #BOX298,
      #BOX300,
      #BOX302,
      #BOX304,
      #BOX306,
      #BOX308,
      #BOX310,
      #BOX312,
      #BOX314,
      #BOX316,
      #BOX318,
      #BOX321,
      #BOX323,
      #BOX325,
      #BOX331 {
        top: 0px;
        left: 0px;
      }
      #IMAGE17:hover > .ladi-image,
      #IMAGE19:hover > .ladi-image,
      #HEADLINE20 > .ladi-headline:hover,
      #HEADLINE21 > .ladi-headline:hover,
      #HEADLINE22 > .ladi-headline:hover,
      #IMAGE70:hover > .ladi-image,
      #HEADLINE71 > .ladi-headline:hover,
      #HEADLINE72 > .ladi-headline:hover,
      #HEADLINE77 > .ladi-headline:hover,
      #IMAGE139:hover > .ladi-image,
      #HEADLINE26 > .ladi-headline:hover,
      #IMAGE134:hover > .ladi-image,
      #IMAGE25:hover > .ladi-image,
      #HEADLINE27 > .ladi-headline:hover,
      #IMAGE28:hover > .ladi-image,
      #HEADLINE30 > .ladi-headline:hover,
      #HEADLINE31 > .ladi-headline:hover,
      #HEADLINE66 > .ladi-headline:hover,
      #IMAGE57:hover > .ladi-image,
      #HEADLINE58 > .ladi-headline:hover,
      #HEADLINE59 > .ladi-headline:hover,
      #SHAPE60:hover > .ladi-shape,
      #HEADLINE61 > .ladi-headline:hover,
      #SHAPE62:hover > .ladi-shape,
      #HEADLINE63 > .ladi-headline:hover,
      #HEADLINE55 > .ladi-headline:hover,
      #IMAGE35:hover > .ladi-image,
      #HEADLINE37 > .ladi-headline:hover,
      #HEADLINE38 > .ladi-headline:hover,
      #SHAPE41:hover > .ladi-shape,
      #HEADLINE42 > .ladi-headline:hover,
      #SHAPE39:hover > .ladi-shape,
      #HEADLINE40 > .ladi-headline:hover,
      #HEADLINE43 > .ladi-headline:hover,
      #SHAPE44:hover > .ladi-shape,
      #IMAGE49:hover > .ladi-image,
      #HEADLINE50 > .ladi-headline:hover,
      #IMAGE46:hover > .ladi-image,
      #HEADLINE48 > .ladi-headline:hover,
      #IMAGE67:hover > .ladi-image,
      #HEADLINE68 > .ladi-headline:hover,
      #HEADLINE85 > .ladi-headline:hover,
      #BOX129 > .ladi-box:hover,
      #HEADLINE100 > .ladi-headline:hover,
      #IMAGE99:hover > .ladi-image,
      #SHAPE108:hover > .ladi-shape,
      #HEADLINE109 > .ladi-headline:hover,
      #SHAPE111:hover > .ladi-shape,
      #HEADLINE112 > .ladi-headline:hover,
      #SHAPE114:hover > .ladi-shape,
      #HEADLINE115 > .ladi-headline:hover,
      #SHAPE117:hover > .ladi-shape,
      #HEADLINE118 > .ladi-headline:hover,
      #SHAPE120:hover > .ladi-shape,
      #HEADLINE121 > .ladi-headline:hover,
      #SHAPE102:hover > .ladi-shape,
      #HEADLINE103 > .ladi-headline:hover,
      #SHAPE105:hover > .ladi-shape,
      #HEADLINE106 > .ladi-headline:hover,
      #BOX126 > .ladi-box:hover,
      #IMAGE87:hover > .ladi-image,
      #HEADLINE88 > .ladi-headline:hover,
      #SHAPE89:hover > .ladi-shape,
      #HEADLINE90 > .ladi-headline:hover,
      #HEADLINE91 > .ladi-headline:hover,
      #SHAPE92:hover > .ladi-shape,
      #HEADLINE93 > .ladi-headline:hover,
      #SHAPE94:hover > .ladi-shape,
      #IMAGE143:hover > .ladi-image,
      #IMAGE144:hover > .ladi-image,
      #HEADLINE210 > .ladi-headline:hover,
      #HEADLINE137 > .ladi-headline:hover,
      #HEADLINE138 > .ladi-headline:hover,
      #IMAGE212:hover > .ladi-image,
      #HEADLINE215 > .ladi-headline:hover,
      #HEADLINE216 > .ladi-headline:hover,
      #IMAGE211:hover > .ladi-image,
      #HEADLINE214 > .ladi-headline:hover,
      #HEADLINE213 > .ladi-headline:hover,
      #HEADLINE221 > .ladi-headline:hover,
      #HEADLINE226 > .ladi-headline:hover,
      #HEADLINE224 > .ladi-headline:hover,
      #IMAGE225:hover > .ladi-image,
      #HEADLINE229 > .ladi-headline:hover,
      #HEADLINE230 > .ladi-headline:hover,
      #IMAGE231:hover > .ladi-image,
      #HEADLINE149 > .ladi-headline:hover,
      #IMAGE150:hover > .ladi-image,
      #SHAPE207:hover > .ladi-shape,
      #SHAPE195:hover > .ladi-shape,
      #HEADLINE196 > .ladi-headline:hover,
      #SHAPE197:hover > .ladi-shape,
      #HEADLINE198 > .ladi-headline:hover,
      #SHAPE205:hover > .ladi-shape,
      #HEADLINE206 > .ladi-headline:hover,
      #HEADLINE208 > .ladi-headline:hover,
      #HEADLINE233 > .ladi-headline:hover,
      #IMAGE234:hover > .ladi-image,
      #HEADLINE235 > .ladi-headline:hover,
      #HEADLINE236 > .ladi-headline:hover,
      #SHAPE239:hover > .ladi-shape,
      #IMAGE241:hover > .ladi-image,
      #HEADLINE242 > .ladi-headline:hover,
      #HEADLINE244 > .ladi-headline:hover,
      #SHAPE245:hover > .ladi-shape,
      #HEADLINE247 > .ladi-headline:hover,
      #SHAPE248:hover > .ladi-shape,
      #HEADLINE250 > .ladi-headline:hover,
      #SHAPE251:hover > .ladi-shape,
      #HEADLINE255 > .ladi-headline:hover,
      #HEADLINE256 > .ladi-headline:hover,
      #BOX327 > .ladi-box:hover,
      #BOX329 > .ladi-box:hover,
      #BOX271 > .ladi-box:hover,
      #BOX272 > .ladi-box:hover,
      #BOX273 > .ladi-box:hover,
      #BOX274 > .ladi-box:hover,
      #BOX275 > .ladi-box:hover,
      #BOX280 > .ladi-box:hover,
      #BOX282 > .ladi-box:hover,
      #BOX284 > .ladi-box:hover,
      #BOX286 > .ladi-box:hover,
      #BOX288 > .ladi-box:hover,
      #BOX290 > .ladi-box:hover,
      #BOX292 > .ladi-box:hover,
      #BOX294 > .ladi-box:hover,
      #BOX296 > .ladi-box:hover,
      #BOX298 > .ladi-box:hover,
      #BOX300 > .ladi-box:hover,
      #BOX302 > .ladi-box:hover,
      #BOX304 > .ladi-box:hover,
      #BOX306 > .ladi-box:hover,
      #BOX308 > .ladi-box:hover,
      #BOX310 > .ladi-box:hover,
      #BOX312 > .ladi-box:hover,
      #BOX314 > .ladi-box:hover,
      #BOX316 > .ladi-box:hover,
      #BOX318 > .ladi-box:hover,
      #BOX321 > .ladi-box:hover,
      #BOX323 > .ladi-box:hover,
      #BOX325 > .ladi-box:hover,
      #BOX331 > .ladi-box:hover,
      #BOX333 > .ladi-box:hover,
      #BUTTON397 > .ladi-button:hover,
      #BUTTON_TEXT397 > .ladi-headline:hover,
      #HEADLINE336 > .ladi-headline:hover {
        opacity: 1;
      }
      #HEADLINE20 > .ladi-headline,
      #HEADLINE221 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
      }
      #HEADLINE20.ladi-animation > .ladi-headline,
      #IMAGE25.ladi-animation > .ladi-image,
      #HEADLINE100.ladi-animation > .ladi-headline,
      #HEADLINE88.ladi-animation > .ladi-headline,
      #IMAGE241.ladi-animation > .ladi-image {
        animation-name: bounceInLeft;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #HEADLINE21 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
      }
      #HEADLINE21.ladi-animation > .ladi-headline,
      #HEADLINE77.ladi-animation > .ladi-headline,
      #HEADLINE26.ladi-animation > .ladi-headline,
      #HEADLINE27.ladi-animation > .ladi-headline,
      #HEADLINE66.ladi-animation > .ladi-headline,
      #HEADLINE55.ladi-animation > .ladi-headline,
      #HEADLINE85.ladi-animation > .ladi-headline,
      #HEADLINE137.ladi-animation > .ladi-headline,
      #HEADLINE215.ladi-animation > .ladi-headline,
      #HEADLINE216.ladi-animation > .ladi-headline,
      #HEADLINE214.ladi-animation > .ladi-headline,
      #HEADLINE213.ladi-animation > .ladi-headline,
      #HEADLINE221.ladi-animation > .ladi-headline,
      #HEADLINE226.ladi-animation > .ladi-headline,
      #HEADLINE229.ladi-animation > .ladi-headline,
      #HEADLINE149.ladi-animation > .ladi-headline,
      #HEADLINE233.ladi-animation > .ladi-headline,
      #HEADLINE235.ladi-animation > .ladi-headline,
      #HEADLINE242.ladi-animation > .ladi-headline,
      #HEADLINE255.ladi-animation > .ladi-headline {
        animation-name: fadeInDown;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #HEADLINE22 > .ladi-headline,
      #HEADLINE59 > .ladi-headline,
      #HEADLINE91 > .ladi-headline,
      #HEADLINE93 > .ladi-headline,
      #HEADLINE214 > .ladi-headline {
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #Cacbuocbaohanh > .ladi-section-background,
      #SECTION125 > .ladi-section-background,
      #BUTTON397 > .ladi-button > .ladi-button-background {
        background-color: rgb(255, 255, 255);
      }
      #IMAGE70,
      #HEADLINE27,
      #IMAGE57,
      #SHAPE60,
      #IMAGE35,
      #SHAPE108,
      #SHAPE111,
      #SHAPE114,
      #SHAPE117,
      #SHAPE120,
      #SHAPE94,
      #SHAPE195,
      #SHAPE205,
      #GROUP240,
      #GROUP360,
      #GROUP368,
      #GROUP369,
      #GROUP374,
      #GROUP379,
      #GROUP385 {
        left: 0px;
      }
      #HEADLINE71 > .ladi-headline,
      #HEADLINE58 > .ladi-headline,
      #HEADLINE37 > .ladi-headline,
      #HEADLINE68 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #HEADLINE72 > .ladi-headline {
        color: rgb(45, 48, 116);
        text-align: left;
      }
      #HEADLINE77,
      #IMAGE28,
      #HEADLINE66,
      #HEADLINE59,
      #HEADLINE55,
      #HEADLINE109,
      #HEADLINE112,
      #HEADLINE115,
      #HEADLINE118,
      #HEADLINE121,
      #HEADLINE90,
      #IMAGE212,
      #HEADLINE206,
      #HEADLINE235,
      #GROUP358,
      #GROUP357,
      #BOX333 {
        top: 0px;
      }
      #HEADLINE77 > .ladi-headline,
      #HEADLINE66 > .ladi-headline,
      #HEADLINE55 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 30, 36);
        text-align: left;
      }
      #IMAGE139 > .ladi-image {
        border-radius: 0px;
      }
      #HEADLINE26 > .ladi-headline,
      #HEADLINE85 > .ladi-headline,
      #HEADLINE137 > .ladi-headline,
      #HEADLINE255 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: center;
      }
      #IMAGE134.ladi-animation > .ladi-image {
        animation-name: bounceInLeft;
        animation-delay: 2s;
        animation-duration: 2s;
        animation-iteration-count: 1;
      }
      #HEADLINE27 > .ladi-headline,
      #HEADLINE30 > .ladi-headline,
      #HEADLINE31 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(45, 48, 116);
        text-align: center;
      }
      #IMAGE28.ladi-animation > .ladi-image {
        animation-name: bounceInLeft;
        animation-delay: 1.5s;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
      }
      #HEADLINE30.ladi-animation > .ladi-headline {
        animation-name: fadeInDown;
        animation-delay: 1.5s;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
      }
      #HEADLINE31.ladi-animation > .ladi-headline {
        animation-name: fadeInDown;
        animation-delay: 2s;
        animation-duration: 2s;
        animation-iteration-count: 1;
      }
      #SHAPE60 svg:last-child,
      #SHAPE62 svg:last-child,
      #SHAPE41 svg:last-child,
      #SHAPE39 svg:last-child,
      #SHAPE44 svg:last-child,
      #SHAPE108 svg:last-child,
      #SHAPE111 svg:last-child,
      #SHAPE114 svg:last-child,
      #SHAPE117 svg:last-child,
      #SHAPE120 svg:last-child,
      #SHAPE102 svg:last-child,
      #SHAPE105 svg:last-child,
      #SHAPE89 svg:last-child,
      #SHAPE92 svg:last-child,
      #SHAPE94 svg:last-child,
      #SHAPE207 svg:last-child,
      #SHAPE195 svg:last-child,
      #SHAPE197 svg:last-child,
      #SHAPE205 svg:last-child,
      #SHAPE239 svg:last-child,
      #SHAPE245 svg:last-child,
      #SHAPE248 svg:last-child,
      #SHAPE251 svg:last-child {
        fill: rgb(0, 0, 0);
      }
      #HEADLINE61 > .ladi-headline {
        font-weight: bold;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE63 > .ladi-headline,
      #HEADLINE38 > .ladi-headline {
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE55 {
        width: 284px;
      }
      #HEADLINE42 > .ladi-headline,
      #HEADLINE40 > .ladi-headline,
      #HEADLINE43 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #IMAGE49,
      #IMAGE49 > .ladi-image > .ladi-image-background,
      #GROUP391 {
        width: 247px;
        height: 48px;
      }
      #IMAGE49 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s550x350/5d3c13acdc09063fd1918045/chat-now-20230202082035-hurym.png");
      }
      #HEADLINE50,
      #HEADLINE48 {
        width: 161px;
      }
      #HEADLINE50 {
        top: 11px;
        left: 75px;
      }
      #HEADLINE50 > .ladi-headline,
      #HEADLINE48 > .ladi-headline {
        font-size: 16px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #IMAGE46 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s550x350/5d3c13acdc09063fd1918045/call-now-20230202082035-uwyqm.png");
      }
      #GROUP53.ladi-animation > .ladi-group {
        animation-name: fadeIn;
        animation-delay: 1s;
        animation-duration: 1.5s;
        animation-iteration-count: 1;
      }
      #IMAGE67,
      #IMAGE67 > .ladi-image > .ladi-image-background,
      #GROUP395,
      #GROUP393 {
        width: 900px;
      }
      #BOX129 > .ladi-box,
      #BOX126 > .ladi-box {
        border-width: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(236, 30, 36);
      }
      #BOX129 > .ladi-box,
      #BOX126 > .ladi-box,
      #BOX327 > .ladi-box,
      #BOX329 > .ladi-box,
      #BOX271 > .ladi-box,
      #BOX272 > .ladi-box,
      #BOX273 > .ladi-box,
      #BOX274 > .ladi-box,
      #BOX275 > .ladi-box,
      #BOX280 > .ladi-box,
      #BOX282 > .ladi-box,
      #BOX284 > .ladi-box,
      #BOX286 > .ladi-box,
      #BOX288 > .ladi-box,
      #BOX290 > .ladi-box,
      #BOX292 > .ladi-box,
      #BOX294 > .ladi-box,
      #BOX296 > .ladi-box,
      #BOX298 > .ladi-box,
      #BOX300 > .ladi-box,
      #BOX302 > .ladi-box,
      #BOX304 > .ladi-box,
      #BOX306 > .ladi-box,
      #BOX308 > .ladi-box,
      #BOX310 > .ladi-box,
      #BOX312 > .ladi-box,
      #BOX314 > .ladi-box,
      #BOX316 > .ladi-box,
      #BOX318 > .ladi-box,
      #BOX321 > .ladi-box,
      #BOX323 > .ladi-box,
      #BOX325 > .ladi-box,
      #BOX331 > .ladi-box,
      #BOX333 > .ladi-box {
        background-color: rgb(241, 243, 244);
      }
      #HEADLINE100 > .ladi-headline,
      #HEADLINE88 > .ladi-headline,
      #HEADLINE224 > .ladi-headline,
      #HEADLINE230 > .ladi-headline,
      #HEADLINE149 > .ladi-headline {
        font-weight: bold;
        line-height: 1.4;
        color: rgb(236, 30, 36);
        text-align: left;
      }
      #HEADLINE109 > .ladi-headline,
      #HEADLINE112 > .ladi-headline,
      #HEADLINE115 > .ladi-headline,
      #HEADLINE118 > .ladi-headline,
      #HEADLINE121 > .ladi-headline,
      #HEADLINE103 > .ladi-headline,
      #HEADLINE106 > .ladi-headline,
      #HEADLINE247 > .ladi-headline,
      #HEADLINE250 > .ladi-headline {
        line-height: 1.4;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #GROUP345 {
        height: 67px;
      }
      #GROUP344,
      #GROUP343 {
        height: 45px;
      }
      #HEADLINE90 > .ladi-headline {
        font-weight: bold;
        line-height: 1.4;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE210 > .ladi-headline,
      #HEADLINE138 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: left;
      }
      #HEADLINE215 > .ladi-headline {
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: right;
      }
      #HEADLINE216 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: right;
      }
      #HEADLINE213 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: left;
      }
      #HEADLINE226 > .ladi-headline,
      #HEADLINE229 > .ladi-headline,
      #HEADLINE236 > .ladi-headline,
      #HEADLINE244 > .ladi-headline {
        line-height: 1.4;
        color: rgb(236, 30, 36);
        text-align: left;
      }
      #IMAGE225 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon3-20230206013832-fihl9.png");
      }
      #IMAGE231 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon4-20230206013832-swjwu.png");
      }
      #HEADLINE196 > .ladi-headline,
      #HEADLINE198 > .ladi-headline,
      #HEADLINE208 > .ladi-headline {
        font-size: 16px;
        line-height: 1.4;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE206 > .ladi-headline {
        font-size: 16px;
        font-weight: bold;
        line-height: 1.4;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE233 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.4;
        color: rgb(236, 29, 34);
        text-align: center;
      }
      #IMAGE234.ladi-animation > .ladi-image {
        animation-name: bounceInRight;
        animation-delay: 1s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #HEADLINE235 {
        width: 278px;
      }
      #HEADLINE235 > .ladi-headline,
      #HEADLINE242 > .ladi-headline {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.4;
        color: rgb(236, 30, 36);
        text-align: left;
      }
      #HEADLINE236,
      #HEADLINE244,
      #HEADLINE247,
      #HEADLINE250 {
        top: 0px;
        left: 13.726px;
      }
      #SHAPE239,
      #SHAPE245,
      #SHAPE248,
      #SHAPE251 {
        width: 7px;
        height: 7px;
        top: 4.5px;
        left: 0px;
      }
      #HEADLINE256 > .ladi-headline {
        line-height: 1.4;
        color: rgb(236, 30, 36);
        text-align: center;
      }
      #BOX327 > .ladi-box,
      #BOX329 > .ladi-box,
      #BOX271 > .ladi-box,
      #BOX272 > .ladi-box,
      #BOX273 > .ladi-box,
      #BOX274 > .ladi-box,
      #BOX275 > .ladi-box,
      #BOX280 > .ladi-box,
      #BOX282 > .ladi-box,
      #BOX284 > .ladi-box,
      #BOX286 > .ladi-box,
      #BOX288 > .ladi-box,
      #BOX290 > .ladi-box,
      #BOX292 > .ladi-box,
      #BOX294 > .ladi-box,
      #BOX296 > .ladi-box,
      #BOX298 > .ladi-box,
      #BOX300 > .ladi-box,
      #BOX302 > .ladi-box,
      #BOX304 > .ladi-box,
      #BOX306 > .ladi-box,
      #BOX308 > .ladi-box,
      #BOX310 > .ladi-box,
      #BOX312 > .ladi-box,
      #BOX314 > .ladi-box,
      #BOX316 > .ladi-box,
      #BOX318 > .ladi-box,
      #BOX321 > .ladi-box,
      #BOX323 > .ladi-box,
      #BOX325 > .ladi-box,
      #BOX331 > .ladi-box,
      #BOX333 > .ladi-box {
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(236, 30, 36);
      }
      #BOX327 > .ladi-box:hover,
      #BOX329 > .ladi-box:hover,
      #BOX271 > .ladi-box:hover,
      #BOX272 > .ladi-box:hover,
      #BOX273 > .ladi-box:hover,
      #BOX274 > .ladi-box:hover,
      #BOX275 > .ladi-box:hover,
      #BOX280 > .ladi-box:hover,
      #BOX282 > .ladi-box:hover,
      #BOX284 > .ladi-box:hover,
      #BOX286 > .ladi-box:hover,
      #BOX288 > .ladi-box:hover,
      #BOX290 > .ladi-box:hover,
      #BOX292 > .ladi-box:hover,
      #BOX294 > .ladi-box:hover,
      #BOX296 > .ladi-box:hover,
      #BOX298 > .ladi-box:hover,
      #BOX300 > .ladi-box:hover,
      #BOX302 > .ladi-box:hover,
      #BOX304 > .ladi-box:hover,
      #BOX306 > .ladi-box:hover,
      #BOX308 > .ladi-box:hover,
      #BOX310 > .ladi-box:hover,
      #BOX312 > .ladi-box:hover,
      #BOX314 > .ladi-box:hover,
      #BOX316 > .ladi-box:hover,
      #BOX318 > .ladi-box:hover,
      #BOX321 > .ladi-box:hover,
      #BOX323 > .ladi-box:hover,
      #BOX325 > .ladi-box:hover,
      #BOX331 > .ladi-box:hover,
      #BOX333 > .ladi-box:hover {
        border-color: rgb(236, 30, 36);
      }
      #HEADLINE328 > .ladi-headline,
      #HEADLINE330 > .ladi-headline,
      #HEADLINE269 > .ladi-headline,
      #HEADLINE276 > .ladi-headline,
      #HEADLINE277 > .ladi-headline,
      #HEADLINE278 > .ladi-headline,
      #HEADLINE279 > .ladi-headline,
      #HEADLINE281 > .ladi-headline,
      #HEADLINE283 > .ladi-headline,
      #HEADLINE285 > .ladi-headline,
      #HEADLINE287 > .ladi-headline,
      #HEADLINE289 > .ladi-headline,
      #HEADLINE291 > .ladi-headline,
      #HEADLINE293 > .ladi-headline,
      #HEADLINE295 > .ladi-headline,
      #HEADLINE297 > .ladi-headline,
      #HEADLINE299 > .ladi-headline,
      #HEADLINE301 > .ladi-headline,
      #HEADLINE303 > .ladi-headline,
      #HEADLINE305 > .ladi-headline,
      #HEADLINE307 > .ladi-headline,
      #HEADLINE309 > .ladi-headline,
      #HEADLINE311 > .ladi-headline,
      #HEADLINE313 > .ladi-headline,
      #HEADLINE315 > .ladi-headline,
      #HEADLINE317 > .ladi-headline,
      #HEADLINE320 > .ladi-headline,
      #HEADLINE322 > .ladi-headline,
      #HEADLINE324 > .ladi-headline,
      #HEADLINE326 > .ladi-headline,
      #HEADLINE332 > .ladi-headline,
      #HEADLINE334 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: center;
      }
      #HEADLINE328 > .ladi-headline:hover,
      #HEADLINE330 > .ladi-headline:hover,
      #HEADLINE269 > .ladi-headline:hover,
      #HEADLINE276 > .ladi-headline:hover,
      #HEADLINE277 > .ladi-headline:hover,
      #HEADLINE278 > .ladi-headline:hover,
      #HEADLINE279 > .ladi-headline:hover,
      #HEADLINE281 > .ladi-headline:hover,
      #HEADLINE283 > .ladi-headline:hover,
      #HEADLINE285 > .ladi-headline:hover,
      #HEADLINE287 > .ladi-headline:hover,
      #HEADLINE289 > .ladi-headline:hover,
      #HEADLINE291 > .ladi-headline:hover,
      #HEADLINE293 > .ladi-headline:hover,
      #HEADLINE295 > .ladi-headline:hover,
      #HEADLINE297 > .ladi-headline:hover,
      #HEADLINE299 > .ladi-headline:hover,
      #HEADLINE301 > .ladi-headline:hover,
      #HEADLINE303 > .ladi-headline:hover,
      #HEADLINE305 > .ladi-headline:hover,
      #HEADLINE307 > .ladi-headline:hover,
      #HEADLINE309 > .ladi-headline:hover,
      #HEADLINE311 > .ladi-headline:hover,
      #HEADLINE313 > .ladi-headline:hover,
      #HEADLINE315 > .ladi-headline:hover,
      #HEADLINE317 > .ladi-headline:hover,
      #HEADLINE320 > .ladi-headline:hover,
      #HEADLINE322 > .ladi-headline:hover,
      #HEADLINE324 > .ladi-headline:hover,
      #HEADLINE326 > .ladi-headline:hover,
      #HEADLINE332 > .ladi-headline:hover,
      #HEADLINE334 > .ladi-headline:hover {
        color: rgb(236, 30, 36);
        transform: scale(1.05);
        opacity: 1;
        z-index: 2147483647;
      }
      #BUTTON397 > .ladi-button {
        border-width: 2px;
        border-radius: 100px;
        border-style: solid;
        border-color: rgb(236, 30, 36);
      }
      #BUTTON_TEXT397 {
        width: 200px;
        top: 9px;
        left: 0px;
      }
      #BUTTON_TEXT397 > .ladi-headline {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 30, 36);
        text-align: center;
      }
      #SECTION335 > .ladi-section-background {
        background-color: rgb(236, 30, 36);
      }
      #HEADLINE336 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: center;
      }
      @media (min-width: 768px) {
        #Header {
          height: 545.7px;
        }
        #IMAGE17,
        #IMAGE17 > .ladi-image > .ladi-image-background {
          width: 893.84px;
          height: 380.034px;
        }
        #IMAGE17 {
          top: 113.833px;
          left: 170px;
        }
        #IMAGE17 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1200x700/5d3c13acdc09063fd1918045/technology-20230118015051-no9qp.png");
        }
        #IMAGE19,
        #IMAGE19 > .ladi-image > .ladi-image-background {
          width: 864.845px;
          height: 250.825px;
        }
        #IMAGE19 {
          top: 80.4285px;
          left: -307px;
        }
        #IMAGE19 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1200x600/5d3c13acdc09063fd1918045/logo-hacom-20230118015050-blsof.png");
        }
        #HEADLINE20,
        #HEADLINE21 {
          width: 606px;
        }
        #HEADLINE20 {
          top: 150.605px;
          left: -200.578px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 48px;
          text-align: left;
        }
        #HEADLINE21 {
          top: 227.605px;
          left: -200.578px;
        }
        #HEADLINE21 > .ladi-headline {
          font-size: 24px;
          text-align: left;
        }
        #HEADLINE22 {
          width: 780px;
          top: 300.272px;
          left: -200.578px;
        }
        #HEADLINE22 > .ladi-headline,
        #HEADLINE27 > .ladi-headline,
        #HEADLINE59 > .ladi-headline,
        #HEADLINE42 > .ladi-headline,
        #HEADLINE40 > .ladi-headline,
        #HEADLINE43 > .ladi-headline,
        #HEADLINE109 > .ladi-headline,
        #HEADLINE112 > .ladi-headline,
        #HEADLINE115 > .ladi-headline,
        #HEADLINE118 > .ladi-headline,
        #HEADLINE121 > .ladi-headline,
        #HEADLINE103 > .ladi-headline,
        #HEADLINE106 > .ladi-headline,
        #HEADLINE90 > .ladi-headline,
        #HEADLINE91 > .ladi-headline,
        #HEADLINE93 > .ladi-headline,
        #HEADLINE215 > .ladi-headline,
        #HEADLINE214 > .ladi-headline,
        #HEADLINE226 > .ladi-headline,
        #HEADLINE229 > .ladi-headline,
        #HEADLINE236 > .ladi-headline,
        #HEADLINE244 > .ladi-headline,
        #HEADLINE247 > .ladi-headline,
        #HEADLINE250 > .ladi-headline,
        #HEADLINE256 > .ladi-headline {
          font-size: 16px;
        }
        #Cacbuocbaohanh {
          height: 1038.8px;
        }
        #IMAGE70,
        #IMAGE70 > .ladi-image > .ladi-image-background {
          width: 973.217px;
          height: 148.271px;
        }
        #IMAGE70 {
          top: 1px;
        }
        #IMAGE70 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1300x450/5d3c13acdc09063fd1918045/buoc-3-20230202085741-36pmw.png");
        }
        #HEADLINE71,
        #HEADLINE58,
        #HEADLINE37 {
          width: 100px;
        }
        #HEADLINE71 {
          top: 18.857px;
          left: 102.217px;
        }
        #HEADLINE71 > .ladi-headline,
        #HEADLINE77 > .ladi-headline,
        #HEADLINE66 > .ladi-headline,
        #HEADLINE58 > .ladi-headline,
        #HEADLINE55 > .ladi-headline,
        #HEADLINE37 > .ladi-headline,
        #HEADLINE336 > .ladi-headline {
          font-size: 24px;
        }
        #HEADLINE72,
        #HEADLINE59,
        #HEADLINE61,
        #HEADLINE63,
        #HEADLINE38,
        #HEADLINE42,
        #HEADLINE40,
        #HEADLINE43 {
          width: 885px;
        }
        #HEADLINE72 {
          top: 86.957px;
          left: 52.581px;
        }
        #HEADLINE72 > .ladi-headline,
        #HEADLINE61 > .ladi-headline,
        #HEADLINE63 > .ladi-headline,
        #HEADLINE38 > .ladi-headline {
          font-size: 16px;
          line-height: 1.6;
        }
        #HEADLINE77 {
          width: 418px;
        }
        #HEADLINE77,
        #HEADLINE66,
        #HEADLINE55 {
          left: 249px;
        }
        #GROUP78 {
          width: 973.217px;
          height: 149.271px;
          top: 881.438px;
          left: -6px;
        }
        #IMAGE139 {
          width: 1050.9px;
          height: 747.254px;
          top: -690.977px;
          left: 405.422px;
        }
        #IMAGE139 > .ladi-image > .ladi-image-background {
          width: 1050.9px;
          height: 784.254px;
          background-image: url("https://w.ladicdn.com/s1400x1100/5d3c13acdc09063fd1918045/header-20230206034751-1drpe.png");
        }
        #HEADLINE26,
        #HEADLINE85,
        #HEADLINE210,
        #HEADLINE137,
        #HEADLINE138,
        #HEADLINE221,
        #HEADLINE233,
        #HEADLINE255 {
          width: 960px;
        }
        #HEADLINE26 {
          top: 20.277px;
          left: 0px;
        }
        #HEADLINE26 > .ladi-headline,
        #HEADLINE85 > .ladi-headline,
        #HEADLINE137 > .ladi-headline,
        #HEADLINE233 > .ladi-headline,
        #HEADLINE255 > .ladi-headline {
          font-size: 28px;
        }
        #IMAGE134,
        #IMAGE134 > .ladi-image > .ladi-image-background,
        #IMAGE25,
        #IMAGE25 > .ladi-image > .ladi-image-background {
          width: 158.273px;
          height: 158.273px;
        }
        #IMAGE134 {
          top: 0px;
          left: 669.442px;
        }
        #IMAGE134 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s500x500/5d3c13acdc09063fd1918045/minh-hoa-3-20230204082729-8wa-o.png");
        }
        #IMAGE25 {
          top: 0px;
          left: 15.8635px;
        }
        #IMAGE25 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s500x500/5d3c13acdc09063fd1918045/minh-hoa-20230204025758-wi4qk.png");
        }
        #HEADLINE27 {
          width: 190px;
          top: 168.179px;
        }
        #IMAGE28,
        #IMAGE28 > .ladi-image > .ladi-image-background {
          width: 212.513px;
          height: 156.721px;
        }
        #IMAGE28 {
          left: 324.625px;
        }
        #IMAGE28 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s550x500/5d3c13acdc09063fd1918045/minh-hoa-4-20230204025758-rqvw5.png");
        }
        #HEADLINE30 {
          width: 383px;
          top: 168.179px;
          left: 239.381px;
        }
        #HEADLINE30 > .ladi-headline,
        #HEADLINE31 > .ladi-headline,
        #HEADLINE100 > .ladi-headline,
        #HEADLINE88 > .ladi-headline,
        #HEADLINE216 > .ladi-headline,
        #HEADLINE213 > .ladi-headline,
        #HEADLINE224 > .ladi-headline,
        #HEADLINE230 > .ladi-headline,
        #HEADLINE149 > .ladi-headline,
        #HEADLINE328 > .ladi-headline,
        #HEADLINE330 > .ladi-headline,
        #HEADLINE269 > .ladi-headline,
        #HEADLINE276 > .ladi-headline,
        #HEADLINE277 > .ladi-headline,
        #HEADLINE278 > .ladi-headline,
        #HEADLINE279 > .ladi-headline,
        #HEADLINE281 > .ladi-headline,
        #HEADLINE283 > .ladi-headline,
        #HEADLINE285 > .ladi-headline,
        #HEADLINE287 > .ladi-headline,
        #HEADLINE289 > .ladi-headline,
        #HEADLINE291 > .ladi-headline,
        #HEADLINE293 > .ladi-headline,
        #HEADLINE295 > .ladi-headline,
        #HEADLINE297 > .ladi-headline,
        #HEADLINE299 > .ladi-headline,
        #HEADLINE301 > .ladi-headline,
        #HEADLINE303 > .ladi-headline,
        #HEADLINE305 > .ladi-headline,
        #HEADLINE307 > .ladi-headline,
        #HEADLINE309 > .ladi-headline,
        #HEADLINE311 > .ladi-headline,
        #HEADLINE313 > .ladi-headline,
        #HEADLINE315 > .ladi-headline,
        #HEADLINE317 > .ladi-headline,
        #HEADLINE320 > .ladi-headline,
        #HEADLINE322 > .ladi-headline,
        #HEADLINE324 > .ladi-headline,
        #HEADLINE326 > .ladi-headline,
        #HEADLINE332 > .ladi-headline,
        #HEADLINE334 > .ladi-headline {
          font-size: 18px;
        }
        #HEADLINE31 {
          width: 231px;
          top: 168.179px;
          left: 633.078px;
        }
        #GROUP222 {
          width: 864.078px;
          height: 226.179px;
          top: 93.3478px;
          left: 47.9195px;
        }
        #HEADLINE66 {
          width: 399px;
        }
        #IMAGE57,
        #IMAGE57 > .ladi-image > .ladi-image-background,
        #IMAGE35,
        #IMAGE35 > .ladi-image > .ladi-image-background {
          width: 973.217px;
          height: 220.914px;
        }
        #IMAGE57 {
          top: 2px;
        }
        #IMAGE57 > .ladi-image > .ladi-image-background,
        #IMAGE35 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1300x550/5d3c13acdc09063fd1918045/buoc-1-20230202080740-vh7dv.png");
        }
        #HEADLINE58 {
          top: 19.857px;
          left: 102.217px;
        }
        #HEADLINE59 {
          left: 19.7275px;
        }
        #SHAPE60,
        #SHAPE62,
        #SHAPE41,
        #SHAPE39,
        #SHAPE44,
        #SHAPE108,
        #SHAPE102,
        #SHAPE89,
        #SHAPE92,
        #SHAPE94,
        #SHAPE195,
        #SHAPE205 {
          width: 7px;
          height: 7px;
        }
        #SHAPE60 {
          top: 34.023px;
        }
        #HEADLINE61 {
          top: 26px;
          left: 19.7275px;
        }
        #SHAPE62 {
          top: 59.023px;
          left: 0px;
        }
        #HEADLINE63 {
          top: 52px;
          left: 19.7275px;
        }
        #GROUP394 {
          width: 904.727px;
          height: 78px;
          top: 87.957px;
          left: 32.8535px;
        }
        #GROUP392 {
          width: 973.217px;
          height: 222.914px;
          top: 602.438px;
          left: -6px;
        }
        #IMAGE35 {
          top: 4px;
        }
        #HEADLINE37 {
          top: 21.857px;
          left: 102.217px;
        }
        #HEADLINE38 {
          top: 89.957px;
          left: 52.581px;
        }
        #SHAPE41 {
          top: 148.98px;
          left: 32.8535px;
        }
        #HEADLINE42 {
          top: 141.957px;
          left: 52.581px;
        }
        #SHAPE39 {
          top: 123.98px;
          left: 32.8535px;
        }
        #HEADLINE40 {
          top: 115.957px;
          left: 52.581px;
        }
        #HEADLINE43 {
          top: 167.957px;
          left: 52.581px;
        }
        #SHAPE44 {
          top: 174.785px;
          left: 32.8535px;
        }
        #GROUP390 {
          width: 973.217px;
          height: 224.914px;
          top: 332.448px;
          left: -6px;
        }
        #GROUP391 {
          top: 519.36px;
          left: 704px;
        }
        #IMAGE46,
        #IMAGE46 > .ladi-image > .ladi-image-background,
        #GROUP53 {
          width: 247px;
          height: 48px;
        }
        #HEADLINE48 {
          top: 10.75px;
          left: 74px;
        }
        #GROUP53 {
          top: 519.36px;
          left: 449px;
        }
        #IMAGE67,
        #IMAGE67 > .ladi-image > .ladi-image-background,
        #GROUP395,
        #GROUP393 {
          height: 47.9467px;
        }
        #IMAGE67 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1250x350/5d3c13acdc09063fd1918045/note-20230202084820-jsxvg.png");
        }
        #HEADLINE68 {
          width: 877px;
          top: 10.5px;
          left: 14.5px;
        }
        #HEADLINE68 > .ladi-headline {
          font-size: 15px;
        }
        #GROUP393 {
          top: 788.53px;
          left: 29.9585px;
        }
        #SECTION81 {
          height: 608.8px;
        }
        #HEADLINE85 {
          top: 13px;
          left: 0px;
        }
        #BOX129,
        #GROUP135,
        #BOX126,
        #GROUP136 {
          width: 455px;
          height: 501px;
        }
        #HEADLINE100 {
          width: 334px;
        }
        #HEADLINE100,
        #HEADLINE224,
        #HEADLINE230,
        #HEADLINE149 {
          top: 2px;
          left: 66.998px;
        }
        #IMAGE99,
        #IMAGE99 > .ladi-image > .ladi-image-background,
        #IMAGE87,
        #IMAGE87 > .ladi-image > .ladi-image-background,
        #IMAGE225,
        #IMAGE225 > .ladi-image > .ladi-image-background,
        #IMAGE231,
        #IMAGE231 > .ladi-image > .ladi-image-background,
        #IMAGE150,
        #IMAGE150 > .ladi-image > .ladi-image-background {
          width: 54px;
          height: 54px;
        }
        #IMAGE99 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon2-20230206013832-4mq2-.png");
        }
        #GROUP133 {
          width: 400.998px;
          height: 54px;
          top: 34px;
          left: 27.001px;
        }
        #SHAPE108,
        #SHAPE111,
        #SHAPE114,
        #SHAPE117,
        #SHAPE120,
        #SHAPE205 {
          top: 7.5px;
        }
        #HEADLINE109,
        #HEADLINE106 {
          width: 385px;
        }
        #HEADLINE109,
        #HEADLINE206 {
          left: 14.728px;
        }
        #GROUP342 {
          width: 399.728px;
          height: 45px;
          top: 180.6px;
          left: 24.634px;
        }
        #SHAPE111,
        #SHAPE207,
        #SHAPE197 {
          width: 7.44544px;
          height: 7px;
        }
        #HEADLINE112 {
          width: 384px;
          left: 15.665px;
        }
        #GROUP346 {
          width: 399.665px;
          height: 67px;
          top: 225.6px;
          left: 24.636px;
        }
        #SHAPE114,
        #SHAPE117,
        #SHAPE120,
        #SHAPE105 {
          width: 7.64823px;
          height: 7px;
        }
        #HEADLINE115 {
          width: 387px;
        }
        #HEADLINE115,
        #HEADLINE118,
        #HEADLINE121 {
          left: 16.092px;
        }
        #GROUP345 {
          width: 403.092px;
          top: 292.6px;
          left: 24.634px;
        }
        #HEADLINE118 {
          width: 390px;
        }
        #GROUP344 {
          width: 406.092px;
          top: 362px;
          left: 24.454px;
        }
        #HEADLINE121 {
          width: 381px;
        }
        #GROUP343 {
          width: 397.092px;
          top: 407px;
          left: 24.456px;
        }
        #SHAPE102 {
          top: 121.1px;
          left: 24.634px;
        }
        #HEADLINE103,
        #HEADLINE90 {
          width: 388px;
        }
        #HEADLINE103 {
          top: 113.6px;
          left: 39.362px;
        }
        #SHAPE105 {
          top: 143.1px;
          left: 24.634px;
        }
        #HEADLINE106 {
          top: 135.6px;
          left: 40.726px;
        }
        #GROUP135 {
          top: 71.9px;
          left: 505px;
        }
        #IMAGE87 > .ladi-image > .ladi-image-background,
        #IMAGE150 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon1-20230206013832-nt1e3.png");
        }
        #HEADLINE88 {
          width: 331px;
          top: 2px;
          left: 67.6465px;
        }
        #GROUP132 {
          width: 398.647px;
          height: 54px;
          top: 34px;
          left: 28.677px;
        }
        #SHAPE89 {
          top: 8px;
          left: 0px;
        }
        #HEADLINE90 {
          left: 15.6631px;
        }
        #HEADLINE91,
        #HEADLINE93 {
          width: 359px;
        }
        #HEADLINE91 {
          top: 45px;
          left: 15.6631px;
        }
        #SHAPE92 {
          top: 53.5px;
          left: 0px;
        }
        #HEADLINE93 {
          top: 96px;
          left: 15.6631px;
        }
        #SHAPE94 {
          top: 102.5px;
        }
        #GROUP349 {
          width: 403.663px;
          height: 147px;
          top: 113.6px;
          left: 25.6684px;
        }
        #GROUP136 {
          top: 71.9px;
          left: 0px;
        }
        #SECTION125 {
          height: 1287.8px;
        }
        #IMAGE143,
        #IMAGE143 > .ladi-image > .ladi-image-background {
          width: 1920px;
          height: 877.515px;
        }
        #IMAGE143 {
          top: -241.315px;
          left: -479.35px;
        }
        #IMAGE143 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s2250x1200/5d3c13acdc09063fd1918045/trang-tri-20230204081350-iu9vy.png");
        }
        #IMAGE144,
        #IMAGE144 > .ladi-image > .ladi-image-background {
          width: 460.994px;
          height: 321.923px;
        }
        #IMAGE144 {
          top: 217.277px;
          left: 0.65px;
        }
        #IMAGE144 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s800x650/5d3c13acdc09063fd1918045/minh-hoa-5-20230204082434-dlyss.png");
        }
        #HEADLINE210 {
          top: 649.2px;
          left: 0.65px;
        }
        #HEADLINE210 > .ladi-headline,
        #HEADLINE138 > .ladi-headline {
          font-size: 20px;
        }
        #HEADLINE137 {
          top: 11px;
          left: 0.65px;
        }
        #HEADLINE138 {
          top: 65.943px;
          left: 0.65px;
        }
        #IMAGE212,
        #IMAGE212 > .ladi-image > .ladi-image-background,
        #GROUP219 {
          width: 485.498px;
          height: 356.544px;
        }
        #IMAGE212,
        #BOX333 {
          left: 0px;
        }
        #IMAGE212 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s800x700/5d3c13acdc09063fd1918045/2-20230204083120-qqrrh.png");
        }
        #HEADLINE215 {
          width: 450px;
          top: 114.272px;
          left: 6.622px;
        }
        #HEADLINE216,
        #HEADLINE213 {
          width: 228px;
        }
        #HEADLINE216 {
          top: 85.272px;
          left: 228.622px;
        }
        #GROUP219 {
          top: 629.33px;
          left: 474.502px;
        }
        #IMAGE211,
        #IMAGE211 > .ladi-image > .ladi-image-background,
        #GROUP220 {
          width: 497.272px;
          height: 368.895px;
        }
        #IMAGE211 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s800x700/5d3c13acdc09063fd1918045/1-20230204083120-pbnfc.png");
        }
        #HEADLINE214 {
          width: 372px;
          top: 83.613px;
          left: 77.628px;
        }
        #HEADLINE213 {
          top: 54.613px;
          left: 77.628px;
        }
        #GROUP220 {
          top: 697.989px;
          left: -77.628px;
        }
        #GROUP220.ladi-animation > .ladi-group {
          animation-name: fadeInDown;
          animation-delay: 1s;
          animation-duration: 1s;
          animation-iteration-count: 1;
        }
        #HEADLINE221 {
          top: 1093.2px;
          left: 0px;
        }
        #HEADLINE221 > .ladi-headline {
          font-size: 20px;
          text-align: left;
        }
        #HEADLINE226,
        #HEADLINE224,
        #HEADLINE149 {
          width: 364px;
        }
        #HEADLINE226,
        #HEADLINE229 {
          top: 29px;
          left: 66.998px;
        }
        #GROUP227 {
          width: 430.998px;
          height: 96px;
          top: 1153.76px;
          left: 0px;
        }
        #HEADLINE229,
        #HEADLINE230 {
          width: 428px;
        }
        #GROUP228 {
          width: 494.998px;
          height: 96px;
          top: 1153.76px;
          left: 465.002px;
        }
        #GROUP148 {
          width: 430.998px;
          height: 54px;
          top: 165.761px;
          left: 489.272px;
        }
        #SHAPE207 {
          top: 363.861px;
          left: 489.272px;
        }
        #SHAPE195 {
          top: 36.5px;
        }
        #HEADLINE196,
        #HEADLINE206,
        #HEADLINE208 {
          width: 456px;
        }
        #HEADLINE196 {
          top: 29px;
          left: 14.728px;
        }
        #SHAPE197 {
          top: 86.5px;
          left: 0.002px;
        }
        #HEADLINE198 {
          width: 455px;
          top: 79px;
          left: 15.667px;
        }
        #HEADLINE208 {
          top: 128px;
          left: 14.728px;
        }
        #GROUP397 {
          width: 470.728px;
          height: 218px;
          top: 230.361px;
          left: 489.272px;
        }
        #SECTION232 {
          height: 610.7px;
        }
        #HEADLINE233 {
          top: 25.1023px;
          left: 0px;
        }
        #IMAGE234,
        #IMAGE234 > .ladi-image > .ladi-image-background,
        #IMAGE241,
        #IMAGE241 > .ladi-image > .ladi-image-background {
          width: 334.838px;
          height: 246.931px;
        }
        #IMAGE234 {
          top: 96.6025px;
          left: 613.162px;
        }
        #IMAGE234 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s650x550/5d3c13acdc09063fd1918045/minh-hoa-6-20230206023244-iltgm.png");
        }
        #HEADLINE235 {
          left: 294.726px;
        }
        #HEADLINE236,
        #HEADLINE244,
        #HEADLINE247,
        #HEADLINE250 {
          width: 559px;
        }
        #GROUP240 {
          width: 572.726px;
          height: 22px;
          top: 28.6px;
        }
        #GROUP253 {
          width: 572.726px;
          height: 50.6px;
          top: 194.768px;
          left: 0px;
        }
        #IMAGE241 {
          top: 328.102px;
          left: 0px;
        }
        #IMAGE241 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s650x550/5d3c13acdc09063fd1918045/minh-hoa-7-20230206023244-y7e-j.png");
        }
        #HEADLINE242 {
          width: 278px;
          top: 388.768px;
          left: 387.274px;
        }
        #GROUP243,
        #GROUP246,
        #GROUP249 {
          width: 572.726px;
          height: 45px;
        }
        #GROUP243 {
          top: 420.368px;
          left: 387.274px;
        }
        #GROUP246 {
          top: 465.368px;
          left: 387.274px;
        }
        #GROUP249 {
          top: 510.368px;
          left: 387.274px;
        }
        #SECTION254 {
          height: 663.7px;
        }
        #HEADLINE255 {
          top: 0px;
          left: 0px;
        }
        #HEADLINE256 {
          width: 701px;
          top: 52px;
          left: 129.5px;
        }
        #BOX327,
        #GROUP382,
        #BOX329,
        #GROUP383,
        #BOX271,
        #GROUP359,
        #BOX272,
        #GROUP358,
        #BOX273,
        #GROUP357,
        #BOX274,
        #GROUP355,
        #BOX275,
        #GROUP356,
        #BOX280,
        #GROUP360,
        #BOX282,
        #GROUP362,
        #BOX284,
        #GROUP361,
        #BOX286,
        #GROUP363,
        #BOX288,
        #GROUP386,
        #BOX290,
        #GROUP368,
        #BOX292,
        #GROUP367,
        #BOX294,
        #GROUP366,
        #BOX296,
        #GROUP365,
        #BOX298,
        #GROUP364,
        #BOX300,
        #GROUP369,
        #BOX302,
        #GROUP370,
        #BOX304,
        #GROUP371,
        #BOX306,
        #GROUP372,
        #BOX308,
        #GROUP373,
        #BOX310,
        #GROUP374,
        #BOX312,
        #GROUP375,
        #BOX314,
        #GROUP376,
        #BOX316,
        #GROUP377,
        #BOX318,
        #GROUP378,
        #BOX321,
        #GROUP379,
        #BOX323,
        #GROUP380,
        #BOX325,
        #GROUP381,
        #BOX331,
        #GROUP385,
        #BOX333,
        #GROUP384 {
          width: 170px;
          height: 50px;
        }
        #HEADLINE328,
        #HEADLINE330,
        #HEADLINE307,
        #HEADLINE317,
        #HEADLINE320 {
          width: 109px;
        }
        #HEADLINE328,
        #HEADLINE330,
        #HEADLINE307 {
          top: 10.5px;
          left: 30.5px;
        }
        #GROUP382 {
          top: 326px;
          left: 591.637px;
        }
        #GROUP383 {
          top: 326px;
          left: 790px;
        }
        #HEADLINE269,
        #HEADLINE276,
        #HEADLINE277,
        #HEADLINE278,
        #HEADLINE279,
        #HEADLINE281,
        #HEADLINE283,
        #HEADLINE285,
        #HEADLINE287,
        #HEADLINE289,
        #HEADLINE291,
        #HEADLINE293,
        #HEADLINE295,
        #HEADLINE297,
        #HEADLINE299,
        #HEADLINE301,
        #HEADLINE303,
        #HEADLINE305,
        #HEADLINE309,
        #HEADLINE311,
        #HEADLINE313,
        #HEADLINE322,
        #HEADLINE324,
        #HEADLINE332 {
          width: 93px;
        }
        #HEADLINE269,
        #HEADLINE291,
        #HEADLINE311,
        #HEADLINE332 {
          top: 10.5px;
          left: 36.5px;
        }
        #HEADLINE276,
        #HEADLINE277,
        #HEADLINE278,
        #HEADLINE279,
        #HEADLINE281,
        #HEADLINE283,
        #HEADLINE285,
        #HEADLINE293,
        #HEADLINE295,
        #HEADLINE297,
        #HEADLINE299,
        #HEADLINE301,
        #HEADLINE303,
        #HEADLINE305,
        #HEADLINE313,
        #HEADLINE322,
        #HEADLINE324 {
          top: 10.5px;
          left: 38.5px;
        }
        #GROUP358 {
          left: 196px;
        }
        #GROUP357 {
          left: 395px;
        }
        #GROUP355 {
          top: 0px;
          left: 591.637px;
        }
        #GROUP356 {
          top: 0px;
          left: 790px;
        }
        #GROUP360 {
          top: 65px;
        }
        #GROUP362 {
          top: 65px;
          left: 196px;
        }
        #GROUP361 {
          top: 65px;
          left: 395px;
        }
        #HEADLINE287 {
          top: 10.5px;
          left: 35.5px;
        }
        #GROUP363 {
          top: 65px;
          left: 591.637px;
        }
        #HEADLINE289,
        #HEADLINE309 {
          top: 10.5px;
          left: 40.5px;
        }
        #GROUP386 {
          top: 65px;
          left: 790px;
        }
        #GROUP368 {
          top: 130px;
        }
        #GROUP367 {
          top: 130px;
          left: 196px;
        }
        #GROUP366 {
          top: 130px;
          left: 395px;
        }
        #GROUP365 {
          top: 130px;
          left: 591.637px;
        }
        #GROUP364 {
          top: 130px;
          left: 790px;
        }
        #GROUP369 {
          top: 195px;
        }
        #GROUP370 {
          top: 195px;
          left: 196px;
        }
        #GROUP371 {
          top: 195px;
          left: 395px;
        }
        #GROUP372 {
          top: 195px;
          left: 591.637px;
        }
        #GROUP373 {
          top: 195px;
          left: 790px;
        }
        #GROUP374 {
          top: 261px;
        }
        #GROUP375 {
          top: 261px;
          left: 196px;
        }
        #HEADLINE315,
        #HEADLINE326 {
          width: 105px;
        }
        #HEADLINE315,
        #HEADLINE320,
        #HEADLINE326 {
          top: 10.5px;
          left: 32.5px;
        }
        #GROUP376 {
          top: 261px;
          left: 395px;
        }
        #HEADLINE317 {
          top: 10.5px;
          left: 27.5px;
        }
        #GROUP377 {
          top: 261px;
          left: 591.637px;
        }
        #GROUP378 {
          top: 261px;
          left: 790px;
        }
        #GROUP379 {
          top: 326px;
        }
        #GROUP380 {
          top: 326px;
          left: 196px;
        }
        #GROUP381 {
          top: 326px;
          left: 395px;
        }
        #GROUP385 {
          top: 391px;
        }
        #HEADLINE334 {
          width: 153px;
          top: 10.5px;
          left: 8.5px;
        }
        #GROUP384 {
          top: 391px;
          left: 196px;
        }
        #GROUP388 {
          width: 960px;
          height: 441px;
          top: 125.7px;
          left: 0px;
        }
        #BUTTON397 {
          width: 201px;
          height: 39px;
          top: 599.7px;
          left: 379.5px;
        }
        #SECTION335 {
          height: 113.7px;
        }
        #HEADLINE336 {
          width: 522px;
          top: 37.85px;
          left: 219px;
        }
      }
      @media (max-width: 767px) {
        #Header {
          height: 276.748px;
        }
        #IMAGE17,
        #IMAGE17 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 170.068px;
        }
        #IMAGE17 {
          top: 13.999px;
          left: 10px;
        }
        #IMAGE17 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x500/5d3c13acdc09063fd1918045/technology-20230118015051-no9qp.png");
        }
        #IMAGE19,
        #IMAGE19 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 116.009px;
        }
        #IMAGE19 {
          top: 8.07px;
          left: 9.917px;
        }
        #IMAGE19 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/logo-hacom-20230118015050-blsof.png");
        }
        #HEADLINE20,
        #HEADLINE21,
        #HEADLINE22,
        #HEADLINE26,
        #HEADLINE85,
        #HEADLINE210,
        #HEADLINE137,
        #HEADLINE138,
        #HEADLINE221,
        #HEADLINE233,
        #HEADLINE255,
        #HEADLINE256,
        #HEADLINE336 {
          width: 400px;
        }
        #HEADLINE20 {
          top: 25.2525px;
          left: 10.084px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 26px;
          text-align: center;
        }
        #HEADLINE21 {
          top: 67.2525px;
          left: 9.917px;
        }
        #HEADLINE21 > .ladi-headline,
        #HEADLINE221 > .ladi-headline {
          font-size: 18px;
          text-align: center;
        }
        #HEADLINE22 {
          top: 96.2525px;
          left: 20px;
        }
        #HEADLINE22 > .ladi-headline,
        #HEADLINE71 > .ladi-headline,
        #HEADLINE77 > .ladi-headline,
        #HEADLINE30 > .ladi-headline,
        #HEADLINE31 > .ladi-headline,
        #HEADLINE66 > .ladi-headline,
        #HEADLINE59 > .ladi-headline,
        #HEADLINE55 > .ladi-headline,
        #HEADLINE42 > .ladi-headline,
        #HEADLINE40 > .ladi-headline,
        #HEADLINE43 > .ladi-headline,
        #HEADLINE68 > .ladi-headline,
        #HEADLINE109 > .ladi-headline,
        #HEADLINE112 > .ladi-headline,
        #HEADLINE115 > .ladi-headline,
        #HEADLINE118 > .ladi-headline,
        #HEADLINE121 > .ladi-headline,
        #HEADLINE103 > .ladi-headline,
        #HEADLINE106 > .ladi-headline,
        #HEADLINE90 > .ladi-headline,
        #HEADLINE91 > .ladi-headline,
        #HEADLINE93 > .ladi-headline,
        #HEADLINE215 > .ladi-headline,
        #HEADLINE214 > .ladi-headline,
        #HEADLINE226 > .ladi-headline,
        #HEADLINE229 > .ladi-headline,
        #HEADLINE236 > .ladi-headline,
        #HEADLINE244 > .ladi-headline,
        #HEADLINE247 > .ladi-headline,
        #HEADLINE250 > .ladi-headline,
        #HEADLINE256 > .ladi-headline,
        #HEADLINE334 > .ladi-headline {
          font-size: 14px;
        }
        #Cacbuocbaohanh {
          height: 1247.97px;
        }
        #IMAGE70,
        #IMAGE70 > .ladi-image > .ladi-image-background,
        #GROUP78 {
          width: 706px;
          height: 107.559px;
        }
        #IMAGE70,
        #IMAGE57,
        #IMAGE35 {
          top: 0px;
        }
        #IMAGE70 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1050x450/5d3c13acdc09063fd1918045/buoc-3-20230202085741-36pmw.png");
        }
        #HEADLINE71,
        #HEADLINE330,
        #HEADLINE317 {
          width: 72px;
        }
        #HEADLINE71 {
          top: 13.5479px;
          left: 73.4388px;
        }
        #HEADLINE72 {
          width: 402px;
          top: 59.2445px;
          left: 39.608px;
        }
        #HEADLINE72 > .ladi-headline,
        #HEADLINE61 > .ladi-headline,
        #HEADLINE63 > .ladi-headline,
        #HEADLINE38 > .ladi-headline {
          font-size: 14px;
          line-height: 1.2;
        }
        #HEADLINE77,
        #HEADLINE100 {
          width: 301px;
        }
        #HEADLINE77 {
          left: 178.897px;
        }
        #GROUP78 {
          top: 1124.73px;
          left: -21.608px;
        }
        #IMAGE139,
        #IMAGE139 > .ladi-image > .ladi-image-background {
          width: 467.411px;
          height: 363.357px;
        }
        #IMAGE139 {
          top: -6.2525px;
          left: -47.411px;
        }
        #IMAGE139 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s800x700/5d3c13acdc09063fd1918045/header-20230206034751-1drpe.png");
        }
        #HEADLINE26 {
          top: 371.105px;
          left: 10.0005px;
        }
        #HEADLINE26 > .ladi-headline,
        #HEADLINE85 > .ladi-headline,
        #HEADLINE137 > .ladi-headline,
        #HEADLINE233 > .ladi-headline,
        #HEADLINE255 > .ladi-headline {
          font-size: 21px;
        }
        #IMAGE134,
        #IMAGE134 > .ladi-image > .ladi-image-background,
        #IMAGE25,
        #IMAGE25 > .ladi-image > .ladi-image-background {
          width: 59.4174px;
          height: 59.4173px;
        }
        #IMAGE134 {
          top: 1.201px;
          left: 323.166px;
        }
        #IMAGE134 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/minh-hoa-3-20230204082729-8wa-o.png");
        }
        #IMAGE25 {
          top: 1.2004px;
          left: 15.7031px;
        }
        #IMAGE25 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/minh-hoa-20230204025758-wi4qk.png");
        }
        #HEADLINE27 {
          width: 91px;
          top: 65.3711px;
        }
        #HEADLINE27 > .ladi-headline {
          font-size: 15px;
        }
        #IMAGE28,
        #IMAGE28 > .ladi-image > .ladi-image-background {
          width: 83.8254px;
          height: 61.8181px;
        }
        #IMAGE28 {
          left: 161.795px;
        }
        #IMAGE28 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/minh-hoa-4-20230204025758-rqvw5.png");
        }
        #HEADLINE30 {
          width: 146px;
          top: 65.3711px;
          left: 130.708px;
        }
        #HEADLINE31 {
          width: 111px;
          top: 65.3711px;
          left: 296.417px;
        }
        #GROUP222 {
          width: 407.417px;
          height: 132.371px;
          top: 416.424px;
          left: 6.292px;
        }
        #HEADLINE66 {
          width: 290px;
          left: 178.86px;
        }
        #IMAGE57,
        #IMAGE57 > .ladi-image > .ladi-image-background,
        #GROUP392 {
          width: 706.898px;
          height: 160.461px;
        }
        #IMAGE57 > .ladi-image > .ladi-image-background,
        #IMAGE35 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1050x500/5d3c13acdc09063fd1918045/buoc-1-20230202080740-vh7dv.png");
        }
        #HEADLINE58 {
          width: 73px;
          top: 10px;
          left: 73.2455px;
        }
        #HEADLINE58 > .ladi-headline,
        #HEADLINE37 > .ladi-headline,
        #HEADLINE210 > .ladi-headline,
        #HEADLINE138 > .ladi-headline,
        #HEADLINE336 > .ladi-headline {
          font-size: 18px;
        }
        #HEADLINE59 {
          width: 643px;
          left: 14.9431px;
        }
        #SHAPE60,
        #SHAPE62 {
          width: 5.08446px;
          height: 5.08446px;
        }
        #SHAPE60 {
          top: 25.8275px;
        }
        #HEADLINE61,
        #HEADLINE214 {
          width: 396px;
        }
        #HEADLINE61 {
          top: 20px;
          left: 14.3291px;
        }
        #SHAPE62 {
          top: 59.9861px;
          left: 0.9605px;
        }
        #HEADLINE63,
        #HEADLINE236 {
          width: 391px;
        }
        #HEADLINE63 {
          top: 54.8851px;
          left: 15.2896px;
        }
        #GROUP394 {
          width: 657.943px;
          height: 88.8851px;
          top: 58.3498px;
          left: 34.913px;
        }
        #GROUP392 {
          top: 865.528px;
          left: -22.913px;
        }
        #HEADLINE55 {
          left: 179.829px;
        }
        #IMAGE35,
        #IMAGE35 > .ladi-image > .ladi-image-background,
        #GROUP390 {
          width: 701.522px;
          height: 159.242px;
        }
        #HEADLINE37 {
          width: 86px;
          top: 9.176px;
          left: 80.6939px;
        }
        #HEADLINE38 {
          width: 386px;
          top: 52.444px;
          left: 50.5385px;
        }
        #SHAPE41,
        #SHAPE39,
        #SHAPE44 {
          width: 5.04579px;
          height: 5.04584px;
        }
        #SHAPE41 {
          top: 110.248px;
          left: 35.7827px;
        }
        #HEADLINE42,
        #HEADLINE40,
        #HEADLINE43 {
          width: 638px;
        }
        #HEADLINE42 {
          top: 105.186px;
          left: 50.0029px;
        }
        #SHAPE39 {
          top: 92.228px;
          left: 35.7827px;
        }
        #HEADLINE40 {
          top: 86.444px;
          left: 50.0029px;
        }
        #HEADLINE43 {
          top: 123.928px;
          left: 50.0029px;
        }
        #SHAPE44 {
          top: 128.849px;
          left: 35.7827px;
        }
        #GROUP390 {
          top: 570.03px;
          left: -22.913px;
        }
        #GROUP391 {
          top: 797.105px;
          left: 86.5px;
        }
        #IMAGE46,
        #IMAGE46 > .ladi-image > .ladi-image-background,
        #GROUP53 {
          width: 246.14px;
          height: 47.8327px;
        }
        #HEADLINE48 {
          top: 10.7126px;
          left: 73.7422px;
        }
        #GROUP53 {
          top: 739.272px;
          left: 86.93px;
        }
        #IMAGE67,
        #IMAGE67 > .ladi-image > .ladi-image-background,
        #GROUP395,
        #GROUP393 {
          height: 93.9467px;
        }
        #IMAGE67 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1250x400/5d3c13acdc09063fd1918045/note-20230202084820-jsxvg.png");
        }
        #HEADLINE68 {
          width: 395px;
          top: 13.4733px;
          left: 256px;
        }
        #GROUP393 {
          top: 1019.02px;
          left: -240px;
        }
        #SECTION81 {
          height: 770px;
        }
        #HEADLINE85 {
          top: 8px;
          left: 10px;
        }
        #BOX129,
        #GROUP135 {
          width: 410.938px;
          height: 450.484px;
        }
        #HEADLINE100 {
          top: 1.80633px;
          left: 60.51px;
        }
        #HEADLINE100 > .ladi-headline,
        #HEADLINE88 > .ladi-headline,
        #HEADLINE216 > .ladi-headline,
        #HEADLINE213 > .ladi-headline,
        #HEADLINE224 > .ladi-headline,
        #HEADLINE230 > .ladi-headline,
        #HEADLINE149 > .ladi-headline,
        #HEADLINE328 > .ladi-headline,
        #HEADLINE330 > .ladi-headline,
        #HEADLINE269 > .ladi-headline,
        #HEADLINE276 > .ladi-headline,
        #HEADLINE277 > .ladi-headline,
        #HEADLINE278 > .ladi-headline,
        #HEADLINE279 > .ladi-headline,
        #HEADLINE281 > .ladi-headline,
        #HEADLINE283 > .ladi-headline,
        #HEADLINE285 > .ladi-headline,
        #HEADLINE287 > .ladi-headline,
        #HEADLINE289 > .ladi-headline,
        #HEADLINE291 > .ladi-headline,
        #HEADLINE293 > .ladi-headline,
        #HEADLINE295 > .ladi-headline,
        #HEADLINE297 > .ladi-headline,
        #HEADLINE299 > .ladi-headline,
        #HEADLINE301 > .ladi-headline,
        #HEADLINE303 > .ladi-headline,
        #HEADLINE305 > .ladi-headline,
        #HEADLINE307 > .ladi-headline,
        #HEADLINE309 > .ladi-headline,
        #HEADLINE311 > .ladi-headline,
        #HEADLINE313 > .ladi-headline,
        #HEADLINE315 > .ladi-headline,
        #HEADLINE317 > .ladi-headline,
        #HEADLINE320 > .ladi-headline,
        #HEADLINE322 > .ladi-headline,
        #HEADLINE324 > .ladi-headline,
        #HEADLINE326 > .ladi-headline,
        #HEADLINE332 > .ladi-headline {
          font-size: 16px;
        }
        #IMAGE99,
        #IMAGE99 > .ladi-image > .ladi-image-background {
          width: 48.7708px;
          height: 48.7707px;
        }
        #IMAGE99 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/icon2-20230206013832-4mq2-.png");
        }
        #GROUP133 {
          width: 362.166px;
          height: 48.7707px;
          top: 30.7075px;
          left: 24.3862px;
        }
        #SHAPE108,
        #SHAPE102 {
          width: 6.32214px;
          height: 6.32213px;
        }
        #SHAPE108 {
          top: 6.7741px;
        }
        #HEADLINE109,
        #HEADLINE106 {
          width: 348px;
        }
        #HEADLINE109 {
          left: 13.3017px;
        }
        #GROUP342 {
          width: 361.302px;
          height: 67px;
          top: 161.47px;
          left: 22.1714px;
        }
        #SHAPE111 {
          width: 6.72444px;
          height: 6.32213px;
          top: 6.773px;
        }
        #HEADLINE112 {
          width: 347px;
          left: 14.1477px;
        }
        #GROUP346 {
          width: 361.148px;
          height: 90px;
          top: 205.47px;
          left: 22.1714px;
        }
        #SHAPE114,
        #SHAPE117,
        #SHAPE120,
        #SHAPE105 {
          width: 6.90759px;
          height: 6.32213px;
        }
        #SHAPE114,
        #SHAPE117,
        #SHAPE120 {
          top: 6.774px;
        }
        #HEADLINE115,
        #HEADLINE91 {
          width: 350px;
        }
        #HEADLINE115 {
          left: 14.5336px;
        }
        #GROUP345 {
          width: 364.534px;
          top: 268.47px;
          left: 21.248px;
        }
        #HEADLINE118 {
          width: 352px;
        }
        #HEADLINE118,
        #HEADLINE121 {
          left: 14.5337px;
        }
        #GROUP344 {
          width: 366.534px;
          top: 331.47px;
          left: 22.202px;
        }
        #HEADLINE121 {
          width: 344px;
        }
        #GROUP343 {
          width: 358.534px;
          top: 376.47px;
          left: 22.202px;
        }
        #SHAPE102 {
          top: 109.374px;
          left: 22.2485px;
        }
        #HEADLINE103,
        #HEADLINE90,
        #HEADLINE93 {
          width: 351px;
        }
        #HEADLINE103 {
          top: 102.6px;
          left: 35.5502px;
        }
        #SHAPE105 {
          top: 129.243px;
          left: 22.2485px;
        }
        #HEADLINE106 {
          top: 122.47px;
          left: 36.7821px;
        }
        #GROUP135 {
          top: 309px;
          left: 4.531px;
        }
        #BOX126,
        #GROUP136 {
          width: 410.938px;
          height: 252.484px;
        }
        #IMAGE87 {
          width: 48.7707px;
          height: 48.7707px;
        }
        #IMAGE87 > .ladi-image > .ladi-image-background {
          width: 48.8458px;
          height: 48.8458px;
        }
        #IMAGE87 > .ladi-image > .ladi-image-background,
        #IMAGE150 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s350x350/5d3c13acdc09063fd1918045/icon1-20230206013832-nt1e3.png");
        }
        #HEADLINE88 {
          width: 299px;
          top: 1.80633px;
          left: 61.0957px;
        }
        #GROUP132 {
          width: 360.042px;
          height: 48.7707px;
          top: 30.7075px;
          left: 25.8999px;
        }
        #SHAPE89 {
          width: 6.32212px;
          height: 6.32209px;
          top: 7.22525px;
          left: 0.558px;
        }
        #HEADLINE90 {
          left: 14.7042px;
        }
        #HEADLINE91 {
          top: 43.642px;
          left: 15.1784px;
        }
        #SHAPE92 {
          width: 6.55551px;
          height: 6.32209px;
          top: 51.319px;
          left: 0.51px;
        }
        #HEADLINE93 {
          top: 91.642px;
          left: 14.6884px;
        }
        #SHAPE94 {
          width: 6.56445px;
          height: 6.32209px;
          top: 97.5125px;
        }
        #GROUP349 {
          width: 365.704px;
          height: 136.642px;
          top: 90.6px;
          left: 22.6169px;
        }
        #GROUP136 {
          top: 52.516px;
          left: 4.531px;
        }
        #SECTION125 {
          height: 1656.08px;
        }
        #IMAGE143,
        #IMAGE143 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 182.816px;
        }
        #IMAGE143 {
          top: 5px;
          left: -472px;
        }
        #IMAGE143 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x500/5d3c13acdc09063fd1918045/trang-tri-20230204081350-iu9vy.png");
        }
        #IMAGE144,
        #IMAGE144 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 279.33px;
        }
        #IMAGE144 {
          top: 99.416px;
          left: 10px;
        }
        #IMAGE144 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/minh-hoa-5-20230204082434-dlyss.png");
        }
        #HEADLINE210 {
          top: 695.361px;
          left: 11.5586px;
        }
        #HEADLINE137 {
          top: 5px;
          left: 10.5877px;
        }
        #HEADLINE138 {
          top: 46.816px;
          left: 10.5877px;
        }
        #IMAGE212,
        #IMAGE212 > .ladi-image > .ladi-image-background {
          width: 417.414px;
          height: 309.654px;
        }
        #IMAGE212 {
          left: 97.797px;
        }
        #IMAGE212 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/2-20230204083120-qqrrh.png");
        }
        #HEADLINE215 {
          width: 387px;
          top: 119.518px;
          left: 0px;
        }
        #HEADLINE216 {
          width: 196px;
          top: 90.1277px;
          left: 180.062px;
        }
        #GROUP219 {
          width: 515.211px;
          height: 309.654px;
          top: 1017.24px;
          left: 17.1985px;
        }
        #IMAGE211,
        #IMAGE211 > .ladi-image > .ladi-image-background {
          width: 419.088px;
          height: 310.895px;
        }
        #IMAGE211 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/1-20230204083120-pbnfc.png");
        }
        #HEADLINE214 {
          top: 88.4475px;
          left: 137.544px;
        }
        #HEADLINE213 {
          width: 192px;
          top: 62.4475px;
          left: 166.165px;
        }
        #GROUP220 {
          width: 533.544px;
          height: 310.895px;
          top: 740.361px;
          left: -123.247px;
        }
        #HEADLINE221 {
          top: 1339.23px;
          left: 10.297px;
        }
        #HEADLINE226,
        #HEADLINE224 {
          width: 332px;
        }
        #HEADLINE226 {
          top: 27.2885px;
          left: 63.044px;
        }
        #HEADLINE224 {
          top: 1.88197px;
          left: 63.044px;
        }
        #IMAGE225,
        #IMAGE225 > .ladi-image > .ladi-image-background {
          width: 50.8131px;
          height: 50.8131px;
        }
        #GROUP227 {
          width: 395.044px;
          height: 86.2885px;
          top: 1424.89px;
          left: 11.8135px;
        }
        #HEADLINE229 {
          width: 342px;
          top: 51.6362px;
          left: 54.967px;
        }
        #HEADLINE230 {
          width: 341px;
          top: 1.63623px;
          left: 54.8123px;
        }
        #IMAGE231,
        #IMAGE231 > .ladi-image > .ladi-image-background {
          width: 50.813px;
          height: 50.813px;
        }
        #GROUP228 {
          width: 396.967px;
          height: 110.636px;
          top: 1533.69px;
          left: 11.8135px;
        }
        #HEADLINE149 {
          width: 318px;
          top: 1.74597px;
          left: 58.4881px;
        }
        #IMAGE150,
        #IMAGE150 > .ladi-image > .ladi-image-background {
          width: 47.1411px;
          height: 47.1411px;
        }
        #GROUP148 {
          width: 376.488px;
          height: 47.1411px;
          top: 616.746px;
          left: 11.5586px;
        }
        #SHAPE207 {
          width: 6.49975px;
          height: 6.11088px;
          top: 525.141px;
          left: 15.5877px;
        }
        #SHAPE195,
        #SHAPE205 {
          width: 5.99536px;
          height: 7.14359px;
        }
        #SHAPE195 {
          top: 49.2487px;
        }
        #HEADLINE196,
        #HEADLINE206 {
          width: 389px;
        }
        #HEADLINE196 {
          top: 41.5949px;
          left: 12.6141px;
        }
        #SHAPE197 {
          width: 6.37686px;
          height: 7.14359px;
          top: 94.2744px;
          left: 0.001712px;
        }
        #HEADLINE198,
        #HEADLINE208,
        #HEADLINE244 {
          width: 388px;
        }
        #HEADLINE198 {
          top: 86.6205px;
          left: 13.4184px;
        }
        #SHAPE205 {
          top: 7.65385px;
        }
        #HEADLINE206 {
          left: 12.6141px;
        }
        #HEADLINE208 {
          top: 130.626px;
          left: 13.4184px;
        }
        #GROUP397 {
          width: 401.712px;
          height: 220.626px;
          top: 388.746px;
          left: 15.5877px;
        }
        #SECTION232 {
          height: 762.062px;
        }
        #HEADLINE233,
        #HEADLINE255,
        #HEADLINE336 {
          top: 10px;
          left: 10px;
        }
        #IMAGE234,
        #IMAGE234 > .ladi-image > .ladi-image-background,
        #IMAGE241,
        #IMAGE241 > .ladi-image > .ladi-image-background {
          width: 231.782px;
          height: 170.931px;
        }
        #IMAGE234 {
          top: 83px;
          left: 96.4715px;
        }
        #IMAGE234 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s550x500/5d3c13acdc09063fd1918045/minh-hoa-6-20230206023244-iltgm.png");
        }
        #HEADLINE235 {
          left: 63.363px;
        }
        #GROUP240 {
          width: 404.726px;
          height: 39px;
          top: 29.6px;
        }
        #GROUP253 {
          width: 404.726px;
          height: 68.6px;
          top: 275.931px;
          left: 10px;
        }
        #IMAGE241 {
          top: 398.531px;
          left: 88.58px;
        }
        #IMAGE241 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s550x500/5d3c13acdc09063fd1918045/minh-hoa-7-20230206023244-y7e-j.png");
        }
        #HEADLINE242 {
          width: 216px;
          top: 580.462px;
          left: 104.362px;
        }
        #GROUP243 {
          width: 401.726px;
          height: 39px;
          top: 617.062px;
          left: 12.363px;
        }
        #HEADLINE247,
        #HEADLINE250 {
          width: 384px;
        }
        #GROUP246 {
          width: 397.726px;
          height: 39px;
          top: 656.062px;
          left: 12.363px;
        }
        #GROUP249 {
          width: 397.726px;
          height: 59px;
          top: 695.062px;
          left: 12.363px;
        }
        #SECTION254 {
          height: 696px;
        }
        #HEADLINE256 {
          top: 53px;
          left: 8.863px;
        }
        #BOX327,
        #GROUP382,
        #BOX329,
        #GROUP383,
        #BOX271,
        #GROUP359,
        #BOX272,
        #GROUP358,
        #BOX273,
        #GROUP357,
        #BOX274,
        #GROUP355,
        #BOX275,
        #GROUP356,
        #BOX280,
        #GROUP360,
        #BOX282,
        #GROUP362,
        #BOX284,
        #GROUP361,
        #BOX286,
        #GROUP363,
        #BOX288,
        #GROUP386,
        #BOX290,
        #GROUP368,
        #BOX292,
        #GROUP367,
        #BOX294,
        #GROUP366,
        #BOX296,
        #GROUP365,
        #BOX298,
        #GROUP364,
        #BOX300,
        #GROUP369,
        #BOX302,
        #GROUP370,
        #BOX304,
        #GROUP371,
        #BOX306,
        #GROUP372,
        #BOX308,
        #GROUP373,
        #BOX310,
        #GROUP374,
        #BOX312,
        #GROUP375,
        #BOX314,
        #GROUP376,
        #BOX316,
        #GROUP377,
        #BOX318,
        #GROUP378,
        #BOX321,
        #GROUP379,
        #BOX323,
        #GROUP380,
        #BOX325,
        #GROUP381,
        #BOX331,
        #GROUP385,
        #BOX333 {
          width: 114.008px;
          height: 33.5317px;
        }
        #HEADLINE328 {
          width: 82px;
          top: 3.766px;
          left: 16.004px;
        }
        #GROUP382 {
          top: 439.628px;
          left: 0px;
        }
        #HEADLINE330,
        #HEADLINE317 {
          top: 3.766px;
          left: 21.004px;
        }
        #GROUP383 {
          top: 439.628px;
          left: 131.76px;
        }
        #HEADLINE269,
        #HEADLINE276,
        #HEADLINE277,
        #HEADLINE279,
        #HEADLINE285,
        #HEADLINE289,
        #HEADLINE293,
        #HEADLINE297,
        #HEADLINE299,
        #HEADLINE301,
        #HEADLINE303,
        #HEADLINE305,
        #HEADLINE309,
        #HEADLINE313,
        #HEADLINE322,
        #HEADLINE332 {
          width: 63px;
        }
        #HEADLINE269 {
          top: 3.766px;
          left: 24.4781px;
        }
        #HEADLINE276,
        #HEADLINE313 {
          top: 3.766px;
          left: 25.701px;
        }
        #GROUP358 {
          left: 131.445px;
        }
        #HEADLINE277 {
          top: 3.766px;
          left: 25.82px;
        }
        #GROUP357 {
          left: 264.9px;
        }
        #HEADLINE278 {
          width: 80px;
          top: 3.766px;
          left: 16.456px;
        }
        #GROUP355 {
          top: 262.217px;
          left: 264.9px;
        }
        #HEADLINE279,
        #HEADLINE309 {
          top: 3.766px;
          left: 26.296px;
        }
        #GROUP356 {
          top: 308px;
          left: 0px;
        }
        #HEADLINE281 {
          width: 77px;
          top: 3.7658px;
          left: 18.504px;
        }
        #GROUP360 {
          top: 43.591px;
        }
        #HEADLINE283,
        #HEADLINE291 {
          width: 83px;
        }
        #HEADLINE283 {
          top: 3.766px;
          left: 15.819px;
        }
        #GROUP362 {
          top: 43.591px;
          left: 131.445px;
        }
        #HEADLINE285 {
          top: 3.7658px;
          left: 25.797px;
        }
        #GROUP361 {
          top: 43.591px;
          left: 264.9px;
        }
        #HEADLINE287 {
          width: 90px;
          top: 3.7658px;
          left: 12.32px;
        }
        #GROUP363 {
          top: 308px;
          left: 131.76px;
        }
        #HEADLINE289 {
          top: 3.766px;
          left: 24.953px;
        }
        #GROUP386 {
          top: 308px;
          left: 264.9px;
        }
        #HEADLINE291 {
          top: 3.766px;
          left: 15.8195px;
        }
        #GROUP368 {
          top: 87.183px;
        }
        #HEADLINE293 {
          top: 3.7664px;
          left: 25.701px;
        }
        #GROUP367 {
          top: 87.1826px;
          left: 131.445px;
        }
        #HEADLINE295,
        #HEADLINE324 {
          width: 78px;
        }
        #HEADLINE295 {
          top: 3.7664px;
          left: 18.004px;
        }
        #GROUP366 {
          top: 87.1826px;
          left: 264.9px;
        }
        #HEADLINE297 {
          top: 3.7664px;
          left: 25.504px;
        }
        #GROUP365 {
          top: 352.183px;
          left: 0px;
        }
        #HEADLINE299 {
          top: 3.7664px;
          left: 26.296px;
        }
        #GROUP364 {
          top: 352.183px;
          left: 131.76px;
        }
        #HEADLINE301,
        #HEADLINE332 {
          top: 3.766px;
          left: 25.504px;
        }
        #GROUP369 {
          top: 130.774px;
        }
        #HEADLINE303 {
          top: 3.766px;
          left: 25.819px;
        }
        #GROUP370 {
          top: 130.774px;
          left: 131.445px;
        }
        #HEADLINE305 {
          top: 3.766px;
          left: 25.797px;
        }
        #GROUP371 {
          top: 130.774px;
          left: 264.9px;
        }
        #HEADLINE307 {
          width: 96px;
          top: 3.766px;
          left: 9.004px;
        }
        #GROUP372 {
          top: 352.183px;
          left: 264.9px;
        }
        #GROUP373 {
          top: 395.774px;
          left: 0px;
        }
        #HEADLINE311 {
          width: 89px;
          top: 3.766px;
          left: 12.8195px;
        }
        #GROUP374 {
          top: 175.036px;
        }
        #GROUP375 {
          top: 175.036px;
          left: 131.445px;
        }
        #HEADLINE315 {
          width: 95px;
          top: 3.766px;
          left: 9.797px;
        }
        #GROUP376 {
          top: 175.036px;
          left: 264.9px;
        }
        #GROUP377 {
          top: 395.774px;
          left: 131.76px;
        }
        #HEADLINE320 {
          width: 94px;
          top: 3.766px;
          left: 10.796px;
        }
        #GROUP378 {
          top: 395.774px;
          left: 264.9px;
        }
        #HEADLINE322 {
          top: 3.766px;
          left: 25.8195px;
        }
        #GROUP379 {
          top: 218.628px;
        }
        #HEADLINE324 {
          top: 3.766px;
          left: 18.319px;
        }
        #GROUP380 {
          top: 218.628px;
          left: 131.445px;
        }
        #HEADLINE326 {
          width: 71px;
          top: 3.766px;
          left: 21.797px;
        }
        #GROUP381 {
          top: 218.628px;
          left: 264.9px;
        }
        #GROUP385 {
          top: 262.217px;
        }
        #BOX333 {
          left: 8.181px;
        }
        #HEADLINE334 {
          width: 131px;
          top: 3.766px;
          left: 0px;
        }
        #GROUP384 {
          width: 131px;
          height: 33.5317px;
          top: 262.217px;
          left: 123.264px;
        }
        #GROUP388 {
          width: 378.908px;
          height: 473.16px;
          top: 141.25px;
          left: 20.546px;
        }
        #BUTTON397 {
          width: 204px;
          height: 29px;
          top: 648.41px;
          left: 108px;
        }
        #SECTION335 {
          height: 50px;
        }
      }
    </style>
    <style id="style_lazyload" type="text/css">
      .ladi-overlay,
      .ladi-box,
      .ladi-button-background,
      .ladi-collection-item:before,
      .ladi-countdown-background,
      .ladi-form-item-background,
      .ladi-form-label-container .ladi-form-label-item.image,
      .ladi-frame-background,
      .ladi-gallery-view-item,
      .ladi-gallery-control-item,
      .ladi-headline,
      .ladi-image-background,
      .ladi-image-compare,
      .ladi-list-paragraph ul li:before,
      .ladi-section-background,
      .ladi-survey-option-background,
      .ladi-survey-option-image,
      .ladi-tabs-background,
      .ladi-video-background,
      .ladi-banner,
      .ladi-spin-lucky-screen,
      .ladi-spin-lucky-start {
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
    <script>
      !(function (e, t, r, n, c) {
        if (!e.ztrq) {
          (c = e.ztrq =
            function () {
              c.queue ? c.queue.push(arguments) : c.call(c, arguments);
            }),
            e._ztrk || (e._ztrk = c),
            (c.queue = []);
          var u = t.createElement(r);
          (u.async = !0), (u.src = n);
          var a = t.getElementsByTagName(r)[0];
          a.parentNode.insertBefore(u, a);
        }
      })(
        window,
        document,
        "script",
        "https://s.zzcdn.me/ztr/ztracker.js?id=7056840457216708608"
      );
      window.LadiPageZaloAds = { auto_tracking: true };
      ztrq("track", "ViewContent");
    </script>
  </head>
  <body>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style="
        width: 0px;
        height: 0px;
        position: absolute;
        overflow: hidden;
        display: none;
      "
    >
      <symbol id="shape_iVHYmLaADf" viewBox="0 0 1536 1896.0833">
        <path
          d="M1536 896q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z"
        ></path>
      </symbol>
    </svg>
    <div class="ladi-wraper">
      <div id="Header" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="IMAGE17" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE19" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE20" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">CHÍNH SÁCH BẢO HÀNH</h3>
          </div>
          <div id="HEADLINE21" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              DÀNH CHO KHÁCH HÀNG HACOM
            </h3>
          </div>
          <div id="HEADLINE22" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Nếu Quý Khách gặp khó khăn trong việc liên hệ Trung Tâm Bảo Hành,
              vui lòng liên hệ với bộ phận <br />Chăm sóc Khách hàng của HACOM
              theo thông tin sau để được hỗ trợ: <br /><span
                style="font-weight: bold"
                >Email:</span
              ><span style="color: rgb(236, 30, 36); font-weight: bold">
                dichvukhachhang@hacom.vn </span
              ><br /><span style="font-weight: bold">Hotline:</span
              ><span style="color: rgb(236, 29, 34)"> </span
              ><span style="color: rgb(236, 30, 36); font-weight: bold"
                >1900 1903 </span
              ><br />Thời gian làm việc: Từ
              <span style="font-weight: bold">8h30</span> đến
              <span style="font-weight: bold">19h</span> tất cả các ngày trong
              tuần(trừ Tết Nguyên Đán)<br />
            </h3>
          </div>
        </div>
      </div>
      <div id="Cacbuocbaohanh" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="GROUP78" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE70" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE71" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">BƯỚC 3</h3>
              </div>
              <div id="HEADLINE72" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Hoàn tất xử lý bảo hành và bàn giao sản phẩm đến khách hàng.
                </h3>
              </div>
              <div id="HEADLINE77" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Bảo hành và bàn giao sản phẩm
                </h3>
              </div>
            </div>
          </div>
          <div id="IMAGE139" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE26" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Các bước bảo hành Sản phẩm
            </h3>
          </div>
          <div id="GROUP222" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE134" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="IMAGE25" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE27" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">Liên hệ với HACOM</h3>
              </div>
              <div id="IMAGE28" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE30" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Chuyển sản phẩm cần bảo hành <br />tới Chi nhánh<br />
                </h3>
              </div>
              <div id="HEADLINE31" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Bảo hành và<br />bàn giao sản phẩm
                </h3>
              </div>
            </div>
          </div>
          <div id="GROUP392" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE66" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Chuyển sản phẩm tới bảo hành
                </h3>
              </div>
              <div id="IMAGE57" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE58" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">BƯỚC 2</h3>
              </div>
              <div id="GROUP394" class="ladi-element">
                <div class="ladi-group">
                  <div id="HEADLINE59" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Trung tâm bảo hành HACOM:
                    </h3>
                  </div>
                  <div id="SHAPE60" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE61" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      <span style="font-weight: 400"
                        >Quý khách gửi sản phẩm bảo hành tại các Chi nhánh HACOM
                        trên toàn quốc.</span
                      >
                    </h3>
                  </div>
                  <div id="SHAPE62" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE63" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Quý khách vui lòng truy cập Website:
                      <span style="font-weight: bold; color: rgb(236, 30, 36)"
                        >www.hacom.vn</span
                      >
                      để tìm hiểu chi tiết về Hệ thống các chi nhánh HACOM.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP390" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE55" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">Liên hệ với HACOM</h3>
              </div>
              <div id="IMAGE35" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE37" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">BƯỚC 1</h3>
              </div>
              <div id="HEADLINE38" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Khi có nhu cầu bảo hành sản phẩm, khách hàng vui lòng liên hệ
                  với HACOM qua hình thức sau:
                </h3>
              </div>
              <div id="SHAPE41" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE42" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Trò chuyện trực tiếp<span style="font-weight: 400"
                    >&nbsp;tại Website hoặc Fanpage.</span
                  >
                </h3>
              </div>
              <div id="SHAPE39" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE40" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="font-weight: normal">Tổng đài bảo hành</span>:
                  1900 1903
                  <span style="font-weight: normal">máy lẻ </span>3<span
                    style="font-weight: normal"
                    >.</span
                  >
                </h3>
              </div>
              <div id="HEADLINE43" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Liên hệ trực tiếp
                  <span style="font-weight: normal"
                    >tại chi nhánh cửa hàng của HACOM.</span
                  >
                </h3>
              </div>
              <div id="SHAPE44" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP391" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE49" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE50" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Chat với chúng tôi
                </h3>
              </div>
            </div>
          </div>
          <a
            href="https://hacom.vn/"
            target="_blank"
            id="GROUP53"
            class="ladi-element"
            ><div class="ladi-group">
              <div id="IMAGE46" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE48" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Gọi ngay: 1900 1903
                </h3>
              </div>
            </div></a
          >
          <div id="GROUP393" class="ladi-element">
            <div class="ladi-group">
              <div id="GROUP395" class="ladi-element">
                <div class="ladi-group">
                  <div id="IMAGE67" class="ladi-element">
                    <div class="ladi-image ladi-transition">
                      <div class="ladi-image-background"></div>
                    </div>
                  </div>
                  <div id="HEADLINE68" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Quý khách vui lòng liên hệ nhân viên tư vấn trước khi gửi
                      hàng để được hỗ trợ cũng như tránh thất thoát hàng hóa.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION81" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE85" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Điều kiện bảo hành sản phẩm
            </h3>
          </div>
          <div id="GROUP135" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX129" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="GROUP133" class="ladi-element">
                <div class="ladi-group">
                  <div id="HEADLINE100" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      NHỮNG SẢN PHẨM<br />KHÔNG ĐỦ ĐIỀU KIỆN BẢO HÀNH
                    </h3>
                  </div>
                  <div id="IMAGE99" class="ladi-element">
                    <div class="ladi-image ladi-transition">
                      <div class="ladi-image-background"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="GROUP342" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE108" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE109" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Bị tác động vật lý làm trầy xước, cong vênh, rạn nứt, bể
                      vỡ trong quá trình quá trình sử dụng.
                    </h3>
                  </div>
                </div>
              </div>
              <div id="GROUP346" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE111" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE112" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Bị hư hỏng do tự ý thảo mở, sửa chữa, thay đổi cấu trúc
                      sản phẩm bên trong mà chưa có sự xác nhận đồng ý hoặc giám
                      sát bởi kỹ thuật viên HACOM.
                    </h3>
                  </div>
                </div>
              </div>
              <div id="GROUP345" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE114" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE115" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Bị hư hỏng, chập, cháy do sử dụng sai mục đích, tự ý tháo,
                      lắp đặt không tuân theo các hướng dẫn sử dụng đính kèm
                      theo sản phẩm.
                    </h3>
                  </div>
                </div>
              </div>
              <div id="GROUP344" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE117" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE118" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Bị hư hỏng do côn trùng xâm nhập (chuột, gián, kiến,
                      mối…).
                    </h3>
                  </div>
                </div>
              </div>
              <div id="GROUP343" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE120" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE121" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Bị hư hỏng do thiên tai, hỏa hoạn, lụt lội, sét đánh, rỉ
                      sét, hao mòn do môi trường gây ra.
                    </h3>
                  </div>
                </div>
              </div>
              <div id="SHAPE102" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE103" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Hết thời hạn bảo hành.
                </h3>
              </div>
              <div id="SHAPE105" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE106" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Không có tem niêm phong, hoặc bị tẩy xóa, không còn nguyên
                  dạng ban đầu.
                </h3>
              </div>
            </div>
          </div>
          <div id="GROUP136" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX126" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="GROUP132" class="ladi-element">
                <div class="ladi-group">
                  <div id="IMAGE87" class="ladi-element">
                    <div class="ladi-image ladi-transition">
                      <div class="ladi-image-background"></div>
                    </div>
                  </div>
                  <div id="HEADLINE88" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      NHỮNG SẢN PHẨM<br />ĐỦ ĐIỀU KIỆN BẢO HÀNH
                    </h3>
                  </div>
                </div>
              </div>
              <div id="GROUP349" class="ladi-element">
                <div class="ladi-group">
                  <div id="SHAPE89" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE90" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      <span style="font-weight: 400"
                        >Sản phẩm nếu có tem niêm phong (seal) trên sản phẩm thì
                        tem niêm phong phải còn nguyên vẹn.<br
                      /></span>
                    </h3>
                  </div>
                  <div id="HEADLINE91" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Đối với sản phẩm bảo hành trên hộp: sản phẩm còn đầy đủ
                      hộp.
                    </h3>
                  </div>
                  <div id="SHAPE92" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                  <div id="HEADLINE93" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      Sản phẩm không trầy xước, cấn móp, bể, vỡ, biến dạng so
                      với ban đầu.
                    </h3>
                  </div>
                  <div id="SHAPE94" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION125" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="IMAGE143" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE144" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE210" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              2. Sản phẩm tiếp nhận bảo hành
            </h3>
          </div>
          <div id="HEADLINE137" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Chính sách bảo hành chung
            </h3>
          </div>
          <div id="HEADLINE138" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              1. Sản phẩm đổi mới 100%
            </h3>
          </div>
          <div id="GROUP219" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE212" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE215" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  HACOM cam kết cộng thêm thời hạn bảo hành số ngày tương ứng
                  với số ngày Khách hàng gửi bảo hành sản phẩm, số ngày này được
                  tính từ ngày Quý khách đi gửi bảo hành sản phẩm đến khi nhận
                  được thông báo sản phẩm đã được bảo hành xong.
                </h3>
              </div>
              <div id="HEADLINE216" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Cộng thêm bảo hành
                </h3>
              </div>
            </div>
          </div>
          <div id="GROUP220" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE211" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="HEADLINE214" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Từ ngày 16 cho đến hết thời gian bảo hành, HACOM cam kết khắc
                  phục sự cố và trả bảo hành trong thời gian 10 ngày (không tính
                  thứ bảy, chủ nhật, các ngày lễ, Tết và các trường hợp khác
                  được thỏa thuận trước), những sản phẩm phải gửi bảo hành nước
                  ngoài thời gian chờ bảo hành sẽ theo chính sách của hãng:
                  Apple, Surface, Intel,…).
                </h3>
              </div>
              <div id="HEADLINE213" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">Từ ngày thứ 16</h3>
              </div>
            </div>
          </div>
          <div id="HEADLINE221" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              3. Trường hợp không bảo hành được hoặc thời gian bảo hành quá lâu
            </h3>
          </div>
          <div id="GROUP227" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE226" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >Đổi sang thiết bị khác tương đương với sản phẩm bảo hành
                    hoặc sản phẩm có thông số kỹ thuật cao hơn với chi phí thỏa
                    thuận.</span
                  >
                </h3>
              </div>
              <div id="HEADLINE224" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >A. ĐỔI SANG THIẾT BỊ KHÁC</span
                  ><br />
                </h3>
              </div>
              <div id="IMAGE225" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP228" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE229" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >Giá nhập lại sản phẩm được tính dựa trên: tình trạng vật lý
                    của sản phẩm, phụ kiện, vỏ hộp,…và khấu hao thời gian sử
                    dụng.</span
                  >
                </h3>
              </div>
              <div id="HEADLINE230" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >B. NHẬP LẠI SẢN PHẨM THEO GIÁ THỎA THUẬN</span
                  >
                </h3>
              </div>
              <div id="IMAGE231" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP148" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE149" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >ĐIỀU KIỆN SẢN PHẨM ĐƯỢC ÁP DỤNG</span
                  ><br />ĐỔI MỚI 100%<br />
                </h3>
              </div>
              <div id="IMAGE150" class="ladi-element">
                <div class="ladi-image ladi-transition">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="SHAPE207" class="ladi-element">
            <div class="ladi-shape ladi-transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 1536 1896.08"
                class=""
                fill="#000"
              >
                <use xlink:href="#shape_iVHYmLaADf"></use>
              </svg>
            </div>
          </div>
          <div id="GROUP397" class="ladi-element">
            <div class="ladi-group">
              <div id="SHAPE195" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE196" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Sản phẩm phải có đầy đủ vỏ hộp, phụ kiện kèm theo, không bị
                  trầy xước.
                </h3>
              </div>
              <div id="SHAPE197" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE198" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Không vi phạm điều kiện bảo hành khác và không phải là vật tư
                  tiêu hao.
                </h3>
              </div>
              <div id="SHAPE205" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
              <div id="HEADLINE206" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Trong 15 ngày đầu khi phát sinh lỗi từ nhà sản xuất
                </h3>
              </div>
              <div id="HEADLINE208" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Không áp dụng với các sản phẩm: CPU, máy in, máy chiếu, máy
                  photo, máy fax, TV, các sản phẩm của Apple, Surface, máy chơi
                  game Sony, Nintendo, Xbox, hàng thanh lý, hàng cũ,… (nếu lỗi HACOM sẽ
                  tiếp nhận bảo hành sản phẩm).<br />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION232" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE233" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Chính sách bảo hành<br />tận nơi sử dụng
            </h3>
          </div>
          <div id="IMAGE234" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="GROUP253" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE235" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  KHÁCH HÀNG DOANH NGHIỆP
                </h3>
              </div>
              <div id="GROUP240" class="ladi-element">
                <div class="ladi-group">
                  <div id="HEADLINE236" class="ladi-element">
                    <h3 class="ladi-headline ladi-transition">
                      <span style="color: rgb(0, 0, 0)"
                        >Áp dụng cho khách hàng doanh nghiệp có thẻ bảo hành
                        vàng của HACOM.</span
                      >
                    </h3>
                  </div>
                  <div id="SHAPE239" class="ladi-element">
                    <div class="ladi-shape ladi-transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1536 1896.08"
                        class=""
                        fill="#000"
                      >
                        <use xlink:href="#shape_iVHYmLaADf"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="IMAGE241" class="ladi-element">
            <div class="ladi-image ladi-transition">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE242" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">KHÁCH HÀNG CÁ NHÂN</h3>
          </div>
          <div id="GROUP243" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE244" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="color: rgb(0, 0, 0)"
                    >Dịch vụ bảo hành tận nơi sử dụng chỉ áp dụng cho khách hàng
                    có địa chỉ cách chi nhánh gần nhất <20km.<br
                  /></span>
                </h3>
              </div>
              <div id="SHAPE245" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP246" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE247" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Chúng tôi sẽ có mặt trực tiếp để thực hiện nghiệp vụ bảo hành
                  tại nơi sử dụng cho sản phẩm của Quý khách.<br />
                </h3>
              </div>
              <div id="SHAPE248" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP249" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE250" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  Thời gian đáp ứng yêu cầu bảo hành tại nơi sử dụng: Chậm nhất
                  là 180 phút kể từ thời điểm nhận được thông tin của khách
                  hàng.<br />
                </h3>
              </div>
              <div id="SHAPE251" class="ladi-element">
                <div class="ladi-shape ladi-transition">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 1536 1896.08"
                    class=""
                    fill="#000"
                  >
                    <use xlink:href="#shape_iVHYmLaADf"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION254" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE255" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              Chính sách bảo hành hãng
            </h3>
          </div>
          <div id="HEADLINE256" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              <span style="color: rgb(0, 0, 0)"
                ><span style="font-weight: bold"
                  >Thời gian bảo hành dự kiến (trừ thứ 7, chủ nhật và các ngày
                  lễ tết): </span
                >theo thông báo qui định của nhà sản xuất/nhà cung cấp, thời
                gian bảo hành có thể thay đổi.<br
              /></span>
            </h3>
          </div>
          <div id="GROUP388" class="ladi-element">
            <div class="ladi-group">
              <div id="GROUP382" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX327" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf"
                    target="_blank"
                    id="HEADLINE328"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">KINGFAST</h3></a
                  >
                </div>
              </div>
              <div id="GROUP383" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX329" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf"
                    target="_blank"
                    id="HEADLINE330"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">AVEXIR</h3></a
                  >
                </div>
              </div>
              <div id="GROUP359" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX271" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.dell.com/support/home/en-vn?app=warranty"
                    target="_blank"
                    id="HEADLINE269"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">Dell</h3></a
                  >
                </div>
              </div>
              <div id="GROUP358" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX272" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://support.hp.com/vn-en"
                    target="_blank"
                    id="HEADLINE276"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">HP</h3></a
                  >
                </div>
              </div>
              <div id="GROUP357" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX273" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://amdvietnam.vn/chinh-sach-bao-hanh.html"
                    target="_blank"
                    id="HEADLINE277"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">AMD</h3></a
                  >
                </div>
              </div>
              <div id="GROUP355" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX274" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://western.com.vn/media/news/2410_chinh-sach-bao-hanh-tai-trung-tam-wd-viet-nam-1.jpg"
                    target="_blank"
                    id="HEADLINE278"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">WESTERN</h3></a
                  >
                </div>
              </div>
              <div id="GROUP356" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX275" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.lg.com/vn/tro-giup/bao-hanh"
                    target="_blank"
                    id="HEADLINE279"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">LG</h3></a
                  >
                </div>
              </div>
              <div id="GROUP360" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX280" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.brother.com.vn/vi-vn/contents/onlinewarranty"
                    target="_blank"
                    id="HEADLINE281"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">BROTHER</h3></a
                  >
                </div>
              </div>
              <div id="GROUP362" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX282" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.logitech.com/vi-vn/tos/terms.html?id=3101.html"
                    target="_blank"
                    id="HEADLINE283"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">LOGITECH</h3></a
                  >
                </div>
              </div>
              <div id="GROUP361" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX284" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.asus.com/support/images/upload/ee6559a7-9868-4949-8411-06f022e5893e.pdf"
                    target="_blank"
                    id="HEADLINE285"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">ASUS</h3></a
                  >
                </div>
              </div>
              <div id="GROUP363" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX286" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.gigabyte.com/vn/Support/Warranty"
                    target="_blank"
                    id="HEADLINE287"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">GIGABYTE</h3></a
                  >
                </div>
              </div>
              <div id="GROUP386" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX288" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://customer.epson.asia/customer/ewarranty.do#/wry/VN"
                    target="_blank"
                    id="HEADLINE289"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">EPSON</h3></a
                  >
                </div>
              </div>
              <div id="GROUP368" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX290" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.samsung.com/vn/support/warranty/"
                    target="_blank"
                    id="HEADLINE291"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">SAMSUNG</h3></a
                  >
                </div>
              </div>
              <div id="GROUP367" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX292" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.acer.com/vn-vi/support/warranty"
                    target="_blank"
                    id="HEADLINE293"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">ACER</h3></a
                  >
                </div>
              </div>
              <div id="GROUP366" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX294" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.toshiba-lifestyle.com/vn/dieu-khoan-bao-hanh"
                    target="_blank"
                    id="HEADLINE295"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">TOSHIBA</h3></a
                  >
                </div>
              </div>
              <div id="GROUP365" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX296" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://vn.msi.com/page/warranty"
                    target="_blank"
                    id="HEADLINE297"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">MSI</h3></a
                  >
                </div>
              </div>
              <div id="GROUP364" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX298" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://vn.aoc.com/index/explore/route/warranty"
                    target="_blank"
                    id="HEADLINE299"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">AOC</h3></a
                  >
                </div>
              </div>
              <div id="GROUP369" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX300" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1-R-LNmrohriye6BGgXpL__9jMXBdTdKa/view"
                    target="_blank"
                    id="HEADLINE301"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">LG</h3></a
                  >
                </div>
              </div>
              <div id="GROUP370" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX302" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html"
                    target="_blank"
                    id="HEADLINE303"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">APPLE</h3></a
                  >
                </div>
              </div>
              <div id="GROUP371" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX304" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.intel.vn/content/www/vn/vi/support/articles/000005494/processors.html"
                    target="_blank"
                    id="HEADLINE305"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">INTEL</h3></a
                  >
                </div>
              </div>
              <div id="GROUP372" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX306" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://support.microsoft.com/vi-vn/topic/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-v%E1%BB%81-g%C3%B3i-b%E1%BA%A3o-h%C3%A0nh-v%C3%A0-b%E1%BA%A3o-v%E1%BB%87-ki%E1%BB%87n-eedf7a23-84a7-1a47-480b-0e10503eedf5"
                    target="_blank"
                    id="HEADLINE307"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">MICROSOFT</h3></a
                  >
                </div>
              </div>
              <div id="GROUP373" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX308" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.sony.com.vn/electronics/support/articles/00242897"
                    target="_blank"
                    id="HEADLINE309"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">SONY</h3></a
                  >
                </div>
              </div>
              <div id="GROUP374" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX310" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.totolink.vn/page/chinh-sach-bao-hanh.html"
                    target="_blank"
                    id="HEADLINE311"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">TOTOLINK</h3></a
                  >
                </div>
              </div>
              <div id="GROUP375" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX312" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.tp-link.com/vn/support/replacement-warranty/"
                    target="_blank"
                    id="HEADLINE313"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">TP-LINK</h3></a
                  >
                </div>
              </div>
              <div id="GROUP376" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX314" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.viewsonic.com/vn/support/warranty/"
                    target="_blank"
                    id="HEADLINE315"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">VIEWSONIC</h3></a
                  >
                </div>
              </div>
              <div id="GROUP377" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX316" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.seagate.com/as/en/support/vietnam/"
                    target="_blank"
                    id="HEADLINE317"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">SEAGATE</h3></a
                  >
                </div>
              </div>
              <div id="GROUP378" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX318" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://namthanh.com.vn/bao-hanh/microlab/"
                    target="_blank"
                    id="HEADLINE320"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">MICROLAB</h3></a
                  >
                </div>
              </div>
              <div id="GROUP379" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX321" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="http://edravn.com/chinh-sach-bao-hanh.htm"
                    target="_blank"
                    id="HEADLINE322"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">EDRA</h3></a
                  >
                </div>
              </div>
              <div id="GROUP380" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX323" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://www.leadtek.com/eng/support/warranty/"
                    target="_blank"
                    id="HEADLINE324"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">LEADTEK</h3></a
                  >
                </div>
              </div>
              <div id="GROUP381" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX325" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf"
                    target="_blank"
                    id="HEADLINE326"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">FSP</h3></a
                  >
                </div>
              </div>
              <div id="GROUP385" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX331" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf"
                    target="_blank"
                    id="HEADLINE332"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">AXPRO</h3></a
                  >
                </div>
              </div>
              <div id="GROUP384" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX333" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <a
                    href="https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf"
                    target="_blank"
                    id="HEADLINE334"
                    class="ladi-element"
                    ><h3 class="ladi-headline ladi-transition">
                      SILICON POWER
                    </h3></a
                  >
                </div>
              </div>
            </div>
          </div>
          <a
            href="https://hacom.vn/chinh-sach-bao-hanh"
            id="BUTTON397"
            class="ladi-element"
            ><div class="ladi-button ladi-transition">
              <div class="ladi-button-background"></div>
              <div
                id="BUTTON_TEXT397"
                class="ladi-element ladi-button-headline"
              >
                <p class="ladi-headline ladi-transition">
                  Xem chi tiết tại đây!
                </p>
              </div>
            </div></a
          >
        </div>
      </div>
      <div id="SECTION335" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE336" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              HACOM CHÂN THÀNH CẢM ƠN QUÝ KHÁCH
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div id="backdrop-popup" class="backdrop-popup"></div>
    <div id="backdrop-dropbox" class="backdrop-dropbox"></div>
    <div id="lightbox-screen" class="lightbox-screen"></div>
    <script id="script_lazyload" type="text/javascript">
      window.lazyload_run = function (dom, is_first, check_dom_rect) {
        if (
          check_dom_rect &&
          (document.body.clientWidth <= 0 || document.body.clientheight <= 0)
        ) {
          return setTimeout(function () {
            window.lazyload_run(dom, is_first, check_dom_rect);
          }, 1);
        }
        var style_lazyload = document.getElementById("style_lazyload");
        var list_element_lazyload = dom.querySelectorAll(
          ".ladi-overlay, .ladi-box, .ladi-button-background, .ladi-collection-item, .ladi-countdown-background, .ladi-form-item-background, .ladi-form-label-container .ladi-form-label-item.image, .ladi-frame-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-headline, .ladi-image-background, .ladi-image-compare, .ladi-list-paragraph ul li, .ladi-section-background, .ladi-survey-option-background, .ladi-survey-option-image, .ladi-tabs-background, .ladi-video-background, .ladi-banner, .ladi-spin-lucky-screen, .ladi-spin-lucky-start"
        );
        var docEventScroll = window;
        for (var i = 0; i < list_element_lazyload.length; i++) {
          var rect = list_element_lazyload[i].getBoundingClientRect();
          if (
            rect.x == "undefined" ||
            rect.x == undefined ||
            rect.y == "undefined" ||
            rect.y == undefined
          ) {
            rect.x = rect.left;
            rect.y = rect.top;
          }
          var offset_top = rect.y + window.scrollY;
          if (
            offset_top >= window.scrollY + window.innerHeight ||
            window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight
          ) {
            list_element_lazyload[i].classList.add("ladi-lazyload");
          }
        }
        if (
          typeof style_lazyload != "undefined" &&
          style_lazyload != undefined
        ) {
          style_lazyload.parentElement.removeChild(style_lazyload);
        }
        var currentScrollY = window.scrollY;
        var stopLazyload = function (event) {
          if (event.type == "scroll" && window.scrollY == currentScrollY) {
            currentScrollY = -1;
            return;
          }
          docEventScroll.removeEventListener("scroll", stopLazyload);
          list_element_lazyload =
            document.getElementsByClassName("ladi-lazyload");
          while (list_element_lazyload.length > 0) {
            list_element_lazyload[0].classList.remove("ladi-lazyload");
          }
        };
        if (is_first) {
          var scrollEventPassive = null;
          try {
            var opts = Object.defineProperty({}, "passive", {
              get: function () {
                scrollEventPassive = { passive: true };
              },
            });
            window.addEventListener("testPassive", null, opts);
            window.removeEventListener("testPassive", null, opts);
          } catch (e) {}
          docEventScroll.addEventListener(
            "scroll",
            stopLazyload,
            scrollEventPassive
          );
        }
        return dom;
      };
      window.lazyload_run(document, true, true);
    </script>
    <!--[if lt IE 9
      ]><script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1687845069506"></script>
      <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1687845069506"></script><!
    [endif]--><link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
      rel="stylesheet"
      type="text/css"
    /><style type="text/css">
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
      @-webkit-keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
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
    </style>
    <script
      src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1687845069506"
      type="text/javascript"
    ></script>
    <script id="script_event_data" type="application/json">
      {
        "HEADLINE20": { "a": "headline", "F": "bounceInLeft", "C": "1s" },
        "HEADLINE21": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "IMAGE25": { "a": "image", "F": "bounceInLeft", "C": "1s" },
        "HEADLINE26": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE27": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "IMAGE28": { "a": "image", "F": "bounceInLeft", "C": "1.5s" },
        "HEADLINE30": { "a": "headline", "F": "fadeInDown", "C": "1.5s" },
        "HEADLINE31": { "a": "headline", "F": "fadeInDown", "C": "2s" },
        "GROUP53": {
          "a": "group",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hacom.vn/",
              "a": "link"
            }
          ],
          "F": "fadeIn",
          "C": "1s"
        },
        "HEADLINE55": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE66": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE77": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE85": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE88": { "a": "headline", "F": "bounceInLeft", "C": "1s" },
        "HEADLINE100": { "a": "headline", "F": "bounceInLeft", "C": "1s" },
        "IMAGE134": { "a": "image", "F": "bounceInLeft", "C": "2s" },
        "HEADLINE137": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE149": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE213": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE214": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE215": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE216": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "GROUP220": { "a": "group", "E": "fadeInDown", "B": "1s" },
        "HEADLINE221": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE226": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE229": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE233": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "IMAGE234": { "a": "image", "F": "bounceInRight", "C": "1s" },
        "HEADLINE235": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "IMAGE241": { "a": "image", "F": "bounceInLeft", "C": "1s" },
        "HEADLINE242": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE255": { "a": "headline", "F": "fadeInDown", "C": "1s" },
        "HEADLINE269": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.dell.com/support/home/en-vn?app=warranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE276": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://support.hp.com/vn-en",
              "a": "link"
            }
          ]
        },
        "HEADLINE277": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://amdvietnam.vn/chinh-sach-bao-hanh.html",
              "a": "link"
            }
          ]
        },
        "HEADLINE278": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://western.com.vn/media/news/2410_chinh-sach-bao-hanh-tai-trung-tam-wd-viet-nam-1.jpg",
              "a": "link"
            }
          ]
        },
        "HEADLINE279": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.lg.com/vn/tro-giup/bao-hanh",
              "a": "link"
            }
          ]
        },
        "HEADLINE281": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.brother.com.vn/vi-vn/contents/onlinewarranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE283": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.logitech.com/vi-vn/tos/terms.html?id=3101.html",
              "a": "link"
            }
          ]
        },
        "HEADLINE285": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.asus.com/support/images/upload/ee6559a7-9868-4949-8411-06f022e5893e.pdf",
              "a": "link"
            }
          ]
        },
        "HEADLINE287": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.gigabyte.com/vn/Support/Warranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE289": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://customer.epson.asia/customer/ewarranty.do#/wry/VN",
              "a": "link"
            }
          ]
        },
        "HEADLINE291": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.samsung.com/vn/support/warranty/",
              "a": "link"
            }
          ]
        },
        "HEADLINE293": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.acer.com/vn-vi/support/warranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE295": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.toshiba-lifestyle.com/vn/dieu-khoan-bao-hanh",
              "a": "link"
            }
          ]
        },
        "HEADLINE297": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://vn.msi.com/page/warranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE299": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://vn.aoc.com/index/explore/route/warranty",
              "a": "link"
            }
          ]
        },
        "HEADLINE301": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://drive.google.com/file/d/1-R-LNmrohriye6BGgXpL__9jMXBdTdKa/view",
              "a": "link"
            }
          ]
        },
        "HEADLINE303": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.apple.com/legal/warranty/products/ios-warranty-rest-of-apac-vietnamese.html",
              "a": "link"
            }
          ]
        },
        "HEADLINE305": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.intel.vn/content/www/vn/vi/support/articles/000005494/processors.html",
              "a": "link"
            }
          ]
        },
        "HEADLINE307": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://support.microsoft.com/vi-vn/topic/%C4%91i%E1%BB%81u-kho%E1%BA%A3n-v%E1%BB%81-g%C3%B3i-b%E1%BA%A3o-h%C3%A0nh-v%C3%A0-b%E1%BA%A3o-v%E1%BB%87-ki%E1%BB%87n-eedf7a23-84a7-1a47-480b-0e10503eedf5",
              "a": "link"
            }
          ]
        },
        "HEADLINE309": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.sony.com.vn/electronics/support/articles/00242897",
              "a": "link"
            }
          ]
        },
        "HEADLINE311": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.totolink.vn/page/chinh-sach-bao-hanh.html",
              "a": "link"
            }
          ]
        },
        "HEADLINE313": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.tp-link.com/vn/support/replacement-warranty/",
              "a": "link"
            }
          ]
        },
        "HEADLINE315": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.viewsonic.com/vn/support/warranty/",
              "a": "link"
            }
          ]
        },
        "HEADLINE317": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.seagate.com/as/en/support/vietnam/",
              "a": "link"
            }
          ]
        },
        "HEADLINE320": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://namthanh.com.vn/bao-hanh/microlab/",
              "a": "link"
            }
          ]
        },
        "HEADLINE322": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "http://edravn.com/chinh-sach-bao-hanh.htm",
              "a": "link"
            }
          ]
        },
        "HEADLINE324": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://www.leadtek.com/eng/support/warranty/",
              "a": "link"
            }
          ]
        },
        "HEADLINE326": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf",
              "a": "link"
            }
          ]
        },
        "HEADLINE328": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf",
              "a": "link"
            }
          ]
        },
        "HEADLINE330": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf",
              "a": "link"
            }
          ]
        },
        "HEADLINE332": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf",
              "a": "link"
            }
          ]
        },
        "HEADLINE334": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hanoicomputercdn.com/media/lib/10-01-2023/thongbaothaydoichinhsachbaohanhspnhapkhau_hacom-2023.pdf",
              "a": "link"
            }
          ]
        },
        "BUTTON397": {
          "a": "button",
          "cs": [
            {
              "dr": "action",
              "dv": "_self",
              "dw": "https://hacom.vn/chinh-sach-bao-hanh",
              "a": "link"
            }
          ]
        }
      }
    </script>
    <script id="script_ladipage_run" type="text/javascript">
      (function () {
        var run = function () {
          if (
            typeof window.LadiPageScript == "undefined" ||
            typeof window.ladi == "undefined" ||
            window.ladi == undefined
          ) {
            setTimeout(run, 100);
            return;
          }
          window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
          window.LadiPageScript.runtime.ladipage_id =
            "649bebcca8748100121d574b";
          window.LadiPageScript.runtime.publish_platform = "LADIPAGE";
          window.LadiPageScript.runtime.version = "1687845069506";
          window.LadiPageScript.runtime.cdn_url =
            "https://w.ladicdn.com/v2/source/";
          window.LadiPageScript.runtime.DOMAIN_FREE = [
            "preview.ladipage.me",
            "ldp.link",
            "ldp.page",
          ];
          window.LadiPageScript.runtime.bodyFontSize = 12;
          window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045";
          window.LadiPageScript.runtime.time_zone = 7;
          window.LadiPageScript.runtime.currency = "VND";
          window.LadiPageScript.runtime.convert_replace_str = true;
          window.LadiPageScript.runtime.desktop_width = 960;
          window.LadiPageScript.runtime.mobile_width = 420;
          window.LadiPageScript.runtime.tracking_button_click = true;
          window.LadiPageScript.runtime.lang = "vi";
          window.LadiPageScript.run(true);
          window.LadiPageScript.runEventScroll();
        };
        run();
      })();
    </script>
  </body>
</html>
<!--Publish time: Wed, 28 Jun 2023 08:14:27 GMT--><!--LadiPage build time: Tue, 27 Jun 2023 05:51:09 GMT-->

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
