import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Chính Sách Hàng Chính Hãng",
  description: "HACOM - Chính Sách Hàng Chính Hãng",
};
const page = () => {
  const aaa = `
  <!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>Chính sách cho doanh nghiệp</title>
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Expires" content="-1" />
    <meta name="keywords" content="" />
    <meta name="description" content="HACOM - Chính sách chính hãng" />
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
    <link
      rel="canonical"
      href="http://preview.ladipage.me/649bcf8edbf0b40012039b7a"
    />
    <meta
      property="og:url"
      content="http://preview.ladipage.me/649bcf8edbf0b40012039b7a"
    />
    <meta property="og:title" content="Chính sách cho doanh nghiệp" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png"
    />
    <meta property="og:description" content="HACOM - Chính sách chính hãng" />
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
        #HEADLINE401,
        #HEADLINE461,
        #HEADLINE462,
        #HEADLINE464 {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      }
      @media (max-width: 767px) {
        #HEADLINE20,
        #HEADLINE21,
        #HEADLINE401,
        #HEADLINE461,
        #HEADLINE462,
        #HEADLINE464 {
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
      #IMAGE519 {
        top: 0px;
      }
      #IMAGE519 > .ladi-image > .ladi-image-background,
      #IMAGE520 > .ladi-image > .ladi-image-background,
      #IMAGE521 > .ladi-image > .ladi-image-background,
      #HEADLINE462,
      #IMAGE533 > .ladi-image > .ladi-image-background,
      #BOX458,
      #BOX461,
      #BOX462,
      #IMAGE522 > .ladi-image > .ladi-image-background,
      #IMAGE523 > .ladi-image > .ladi-image-background,
      #IMAGE524 > .ladi-image > .ladi-image-background,
      #IMAGE525 > .ladi-image > .ladi-image-background,
      #IMAGE526 > .ladi-image > .ladi-image-background,
      #IMAGE527 > .ladi-image > .ladi-image-background,
      #IMAGE528 > .ladi-image > .ladi-image-background,
      #IMAGE529 > .ladi-image > .ladi-image-background,
      #IMAGE530 > .ladi-image > .ladi-image-background,
      #IMAGE531 > .ladi-image > .ladi-image-background,
      #IMAGE534 > .ladi-image > .ladi-image-background {
        top: 0px;
        left: 0px;
      }
      #HEADLINE20 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #HEADLINE20.ladi-animation > .ladi-headline {
        animation-name: bounceInLeft;
        animation-delay: 0s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #HEADLINE20 > .ladi-headline:hover,
      #HEADLINE21 > .ladi-headline:hover,
      #HEADLINE461 > .ladi-headline:hover,
      #HEADLINE462 > .ladi-headline:hover,
      #HEADLINE401 > .ladi-headline:hover,
      #BOX458 > .ladi-box:hover,
      #BOX461 > .ladi-box:hover,
      #BOX462 > .ladi-box:hover,
      #HEADLINE464 > .ladi-headline:hover {
        opacity: 1;
      }
      #HEADLINE21 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #HEADLINE21.ladi-animation > .ladi-headline,
      #HEADLINE461.ladi-animation > .ladi-headline,
      #HEADLINE462.ladi-animation > .ladi-headline,
      #HEADLINE401.ladi-animation > .ladi-headline,
      #HEADLINE464.ladi-animation > .ladi-headline {
        animation-name: fadeInDown;
        animation-delay: 0s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #Cacbuocbaohanh > .ladi-section-background,
      #SECTION397 > .ladi-section-background,
      #BUTTON404 > .ladi-button > .ladi-button-background,
      #SECTION402 > .ladi-section-background {
        background-color: rgb(255, 255, 255);
      }
      #HEADLINE461 {
        left: 0px;
      }
      #HEADLINE461 > .ladi-headline,
      #HEADLINE462 > .ladi-headline {
        line-height: 1.6;
        color: rgb(236, 28, 36);
        text-align: left;
      }
      #HEADLINE463 > .ladi-headline {
        font-size: 18px;
        line-height: 1.6;
        color: rgb(0, 0, 0);
      }
      #HEADLINE401 > .ladi-headline,
      #HEADLINE464 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: center;
      }
      #BOX458,
      #GROUP460,
      #BOX461,
      #GROUP461,
      #BOX462,
      #GROUP462 {
        width: 365px;
        height: 100px;
      }
      #BOX458 > .ladi-box,
      #BOX461 > .ladi-box,
      #BOX462 > .ladi-box,
      #BUTTON404 > .ladi-button {
        border-width: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(236, 28, 36);
      }
      #BOX458 > .ladi-box,
      #BOX461 > .ladi-box,
      #BOX462 > .ladi-box {
        background-color: rgb(236, 28, 36);
      }
      #HEADLINE467 {
        width: 258px;
      }
      #HEADLINE467,
      #HEADLINE469 {
        top: 32.5px;
        left: 54px;
      }
      #HEADLINE467 > .ladi-headline,
      #HEADLINE468 > .ladi-headline,
      #HEADLINE469 > .ladi-headline {
        font-size: 26px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #HEADLINE468 {
        width: 349px;
        top: 31.5px;
        left: 11px;
      }
      #HEADLINE469 {
        width: 268px;
      }
      #HEADLINE470 > .ladi-headline {
        line-height: 1.6;
        color: rgb(0, 0, 0);
      }
      #BUTTON_TEXT404 {
        top: 9px;
        left: 0px;
      }
      #BUTTON_TEXT404 > .ladi-headline {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 28, 36);
        text-align: center;
      }
      #HEADLINE465 > .ladi-headline {
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: center;
      }
      #IMAGE522,
      #IMAGE522 > .ladi-image > .ladi-image-background,
      #IMAGE523,
      #IMAGE523 > .ladi-image > .ladi-image-background,
      #IMAGE524,
      #IMAGE524 > .ladi-image > .ladi-image-background,
      #IMAGE525,
      #IMAGE525 > .ladi-image > .ladi-image-background,
      #IMAGE526,
      #IMAGE526 > .ladi-image > .ladi-image-background,
      #IMAGE527,
      #IMAGE527 > .ladi-image > .ladi-image-background,
      #IMAGE528,
      #IMAGE528 > .ladi-image > .ladi-image-background,
      #IMAGE529,
      #IMAGE529 > .ladi-image > .ladi-image-background,
      #IMAGE530,
      #IMAGE530 > .ladi-image > .ladi-image-background,
      #IMAGE531,
      #IMAGE531 > .ladi-image > .ladi-image-background {
        width: 180px;
        height: 50px;
      }
      #IMAGE522 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-samsung-20230607072448-pnhev.png");
      }
      #IMAGE523 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-msi-20230607072448-idwf_.png");
      }
      #IMAGE524 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-intel-20230607072448-bgdht.png");
      }
      #IMAGE525 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-hp-20230607072448-k7izl.png");
      }
      #IMAGE526 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-gigabyte-20230607072448-dhrfh.png");
      }
      #IMAGE527 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-dell-20230607072447-ihlil.png");
      }
      #IMAGE528 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-asus-20230607072447-a6bzv.png");
      }
      #IMAGE529 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-amd-20230607072447-0rjh8.png");
      }
      #IMAGE530 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-acer-20230607072447-v8tcy.png");
      }
      #IMAGE531 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-lenovo-20230607072448-nxj6c.png");
      }
      @media (min-width: 768px) {
        #Header {
          height: 565.893px;
        }
        #IMAGE519 {
          width: 1921.78px;
          height: 565.893px;
          left: -480px;
        }
        #IMAGE519 > .ladi-image > .ladi-image-background {
          width: 1921.78px;
          height: 565.893px;
          background-image: url("https://w.ladicdn.com/s2250x900/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
        }
        #HEADLINE20 {
          width: 606px;
          top: 180.447px;
          left: -236.25px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 48px;
        }
        #HEADLINE21 {
          width: 606px;
          top: 347.447px;
          left: -236.25px;
        }
        #HEADLINE21 > .ladi-headline {
          font-size: 24px;
        }
        #IMAGE520 {
          width: 949.172px;
          height: 530.857px;
          top: 17.518px;
          left: 354.422px;
        }
        #IMAGE520 > .ladi-image > .ladi-image-background {
          width: 949.172px;
          height: 530.857px;
          background-image: url("https://w.ladicdn.com/s1250x850/5d3c13acdc09063fd1918045/imag_header-20230612020730-mtda2.png");
        }
        #Cacbuocbaohanh {
          height: 524.077px;
        }
        #IMAGE521 {
          width: 946.859px;
          height: 484.077px;
          top: 0px;
          left: -480px;
        }
        #IMAGE521 > .ladi-image > .ladi-image-background {
          width: 946.859px;
          height: 484.077px;
          background-image: url("https://w.ladicdn.com/s1250x800/5d3c13acdc09063fd1918045/nhanvien-20230612021103-gxohw.png");
        }
        #HEADLINE461 {
          width: 659px;
          top: 57px;
        }
        #HEADLINE461 > .ladi-headline,
        #HEADLINE401 > .ladi-headline,
        #HEADLINE464 > .ladi-headline {
          font-size: 32px;
        }
        #HEADLINE462 {
          width: 33px;
        }
        #HEADLINE462 > .ladi-headline {
          font-size: 90px;
        }
        #GROUP459 {
          width: 659px;
          height: 211px;
          top: 83.554px;
          left: 506.508px;
        }
        #HEADLINE463 {
          width: 705px;
          top: 311.077px;
          left: 506.508px;
        }
        #HEADLINE463 > .ladi-headline {
          text-align: left;
        }
        #SECTION397 {
          height: 814.2px;
        }
        #HEADLINE401 {
          width: 960px;
          top: -0.723px;
          left: 0px;
        }
        #IMAGE533 {
          width: 451.9px;
          height: 410.818px;
          top: 45.1209px;
          left: 254.05px;
        }
        #IMAGE533 > .ladi-image > .ladi-image-background {
          width: 451.9px;
          height: 410.818px;
          background-image: url("https://w.ladicdn.com/s800x750/5d3c13acdc09063fd1918045/camket-20230612023239--varn.png");
        }
        #GROUP460 {
          top: 466.03px;
          left: -127px;
        }
        #GROUP461 {
          top: 466.03px;
          left: 722px;
        }
        #GROUP462 {
          top: 466.03px;
          left: 297.5px;
        }
        #HEADLINE470 {
          width: 1214px;
          top: 589.2px;
          left: -127px;
        }
        #HEADLINE470 > .ladi-headline {
          font-size: 16px;
          text-align: left;
        }
        #BUTTON404 {
          width: 455px;
          height: 50px;
          top: 727.03px;
          left: 252.5px;
        }
        #BUTTON_TEXT404 {
          width: 453px;
        }
        #SECTION402 {
          height: 982.827px;
        }
        #HEADLINE464 {
          width: 960px;
          top: 0.277px;
          left: 0px;
        }
        #HEADLINE465 {
          width: 1214px;
          top: 65px;
          left: -127px;
        }
        #HEADLINE465 > .ladi-headline {
          font-size: 16px;
        }
        #IMAGE522 {
          top: 233.5px;
          left: 689.8px;
        }
        #IMAGE523 {
          top: 233.5px;
          left: 494.8px;
        }
        #IMAGE524 {
          top: 165.5px;
          left: -90px;
        }
        #IMAGE525 {
          top: 165.5px;
          left: 689.2px;
        }
        #IMAGE526 {
          top: 233.5px;
          left: 299.8px;
        }
        #IMAGE527 {
          top: 165.5px;
          left: 494.4px;
        }
        #IMAGE528 {
          top: 233.5px;
          left: 104.8px;
        }
        #IMAGE529 {
          top: 165.5px;
          left: 104.8px;
        }
        #IMAGE530 {
          top: 165.5px;
          left: 299.6px;
        }
        #IMAGE531 {
          top: 165.5px;
          left: 884px;
        }
        #IMAGE534 {
          width: 1139.31px;
          height: 698.115px;
          top: 284.712px;
          left: -90px;
        }
        #IMAGE534 > .ladi-image > .ladi-image-background {
          width: 1139.31px;
          height: 698.115px;
          background-image: url("https://w.ladicdn.com/s1450x1000/5d3c13acdc09063fd1918045/chungchi-20230612025140-maob7.png");
        }
      }
      @media (max-width: 767px) {
        #Header {
          height: 123.674px;
        }
        #IMAGE519 {
          width: 420px;
          height: 123.674px;
          left: 0px;
        }
        #IMAGE519 > .ladi-image > .ladi-image-background {
          width: 420px;
          height: 123.674px;
          background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
        }
        #HEADLINE20 {
          width: 175px;
          top: 25.587px;
          left: 10px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 15px;
        }
        #HEADLINE21 {
          width: 209px;
          top: 80.087px;
          left: 10px;
        }
        #HEADLINE21 > .ladi-headline {
          font-size: 11px;
        }
        #IMAGE520 {
          width: 191.006px;
          height: 106.826px;
          top: 8.424px;
          left: 218.994px;
        }
        #IMAGE520 > .ladi-image > .ladi-image-background {
          width: 191.006px;
          height: 106.826px;
          background-image: url("https://w.ladicdn.com/s500x450/5d3c13acdc09063fd1918045/imag_header-20230612020730-mtda2.png");
        }
        #Cacbuocbaohanh {
          height: 697.22px;
        }
        #IMAGE521 {
          width: 419.12px;
          height: 214.274px;
          top: 10px;
          left: 0.220013px;
        }
        #IMAGE521 > .ladi-image > .ladi-image-background {
          width: 419.12px;
          height: 214.274px;
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/nhanvien-20230612021103-gxohw.png");
        }
        #HEADLINE461 {
          width: 402px;
          top: 55.8518px;
        }
        #HEADLINE461 > .ladi-headline {
          font-size: 20px;
        }
        #HEADLINE462 {
          width: 31px;
        }
        #HEADLINE462 > .ladi-headline {
          font-size: 70px;
        }
        #GROUP459 {
          width: 401.741px;
          height: 149.918px;
          top: 205.274px;
          left: 10px;
        }
        #HEADLINE463 {
          width: 402px;
          top: 360.498px;
          left: 10px;
        }
        #HEADLINE463 > .ladi-headline {
          text-align: justify;
        }
        #SECTION397 {
          height: 1117.38px;
        }
        #HEADLINE401 {
          width: 400px;
          top: 12px;
          left: 10px;
        }
        #HEADLINE401 > .ladi-headline {
          font-size: 19px;
        }
        #IMAGE533 {
          width: 400px;
          height: 363.636px;
          top: 43px;
          left: 11px;
        }
        #IMAGE533 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 363.636px;
          background-image: url("https://w.ladicdn.com/s750x700/5d3c13acdc09063fd1918045/camket-20230612023239--varn.png");
        }
        #GROUP460 {
          top: 420.636px;
          left: 27.5px;
        }
        #GROUP461 {
          top: 644.636px;
          left: 27.5px;
        }
        #GROUP462 {
          top: 534.636px;
          left: 27.5px;
        }
        #HEADLINE470 {
          width: 404px;
          top: 756.636px;
          left: 8px;
        }
        #HEADLINE470 > .ladi-headline {
          font-size: 17.31px;
          text-align: center;
        }
        #BUTTON404 {
          width: 352px;
          height: 40px;
          top: 1047.64px;
          left: 34px;
        }
        #BUTTON_TEXT404 {
          width: 160px;
        }
        #SECTION402 {
          height: 914.17px;
        }
        #HEADLINE464 {
          width: 400px;
          top: 3px;
          left: 10px;
        }
        #HEADLINE464 > .ladi-headline {
          font-size: 21px;
        }
        #HEADLINE465 {
          width: 420px;
          top: 43.7475px;
          left: 0px;
        }
        #HEADLINE465 > .ladi-headline {
          font-size: 18px;
        }
        #IMAGE522 {
          top: 337.298px;
          left: 217.5px;
        }
        #IMAGE523 {
          top: 470.297px;
          left: 217.5px;
        }
        #IMAGE524 {
          top: 337.298px;
          left: 22.5px;
        }
        #IMAGE525 {
          top: 605.297px;
          left: 217.5px;
        }
        #IMAGE526 {
          top: 470.297px;
          left: 22.5px;
        }
        #IMAGE527 {
          top: 605.297px;
          left: 22.5px;
        }
        #IMAGE528 {
          top: 403.298px;
          left: 217.5px;
        }
        #IMAGE529 {
          top: 537.297px;
          left: 217.5px;
        }
        #IMAGE530 {
          top: 537.297px;
          left: 22.5px;
        }
        #IMAGE531 {
          top: 403.298px;
          left: 22.5px;
        }
        #IMAGE534 {
          width: 400px;
          height: 245.101px;
          top: 655.297px;
          left: 10px;
        }
        #IMAGE534 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 245.101px;
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/chungchi-20230612025140-maob7.png");
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
      .box-reason .ladi-box {
        transition: all 0.3s;
      }
      .box-reason:hover .ladi-box {
        border-color: #ec1c24 !important;
        box-shadow: 0px 4px 4px 0px #00000040;
      }
      .box-info:hover .ladi-box {
        background-color: #ec1c24 !important;
        border-color: #ec1c24 !important;
      }
      .box-info:hover .ladi-button-background {
        background-color: #fff !important;
      }
      .box-info:hover .ladi-button-headline .ladi-headline {
        color: #ec1c24 !important;
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
  <body>
    <div class="ladi-wraper">
      <div id="Header" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="IMAGE519" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE20" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              CHÍNH SÁCH<br />HÀNG CHÍNH HÃNG<br />
            </h3>
          </div>
          <div id="HEADLINE21" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              CAM KẾT GIÁ TỐT NHẤT THỊ TRƯỜNG
            </h3>
          </div>
          <div id="IMAGE520" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
        </div>
      </div>
      <div id="Cacbuocbaohanh" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="IMAGE521" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="GROUP459" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE461" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">
                  <span style="font-weight: bold"
                    >&nbsp; &nbsp; Thương hiệu hàng đầu</span
                  >
                  chuyên kinh<br />doanh các sản phẩm
                  <span style="font-weight: bold"
                    >Máy tính và Thiết bị <br />Công nghệ</span
                  >
                  tại Việt Nam.
                </h3>
              </div>
              <div id="HEADLINE462" class="ladi-element">
                <h3 class="ladi-headline ladi-transition">“</h3>
              </div>
            </div>
          </div>
          <div id="HEADLINE463" class="ladi-element">
            <p class="ladi-headline">
              Được thành lập từ năm 2001, Công ty Cổ Phần Đầu Tư Công Nghệ HACOM
              (trước đây là HANOICOMPUTER) là một trong những thương hiệu hàng
              đầu chuyên kinh doanh các sản phẩm máy tính và thiết bị công nghệ
              tại Việt Nam. Với tiêu chí tối ưu trải nghiệm khách hàng bằng chất
              lượng sản phẩm vượt trội, trong hơn 2 thập kỷ qua HACOM đã gây
              dựng được uy tín vô cùng lớn mạnh về một thương hiệu luôn cung cấp
              những sản phẩm cao cấp, nguồn gốc rõ ràng.<br />
            </p>
          </div>
        </div>
      </div>
      <div id="SECTION397" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE401" class="ladi-element">
            <p class="ladi-headline ladi-transition">
              CAM KẾT VỀ CHẤT LƯỢNG SẢN PHẨM
            </p>
          </div>
          <div id="IMAGE533" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="GROUP460" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX458" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="HEADLINE467" class="ladi-element">
                <p class="ladi-headline">ĐÚNG NGUỒN GỐC</p>
              </div>
            </div>
          </div>
          <div id="GROUP461" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX461" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="HEADLINE468" class="ladi-element">
                <p class="ladi-headline">CAM KẾT HOÀN TIỀN 100%</p>
              </div>
            </div>
          </div>
          <div id="GROUP462" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX462" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="HEADLINE469" class="ladi-element">
                <p class="ladi-headline">ĐÚNG CHẤT LƯỢNG</p>
              </div>
            </div>
          </div>
          <div id="HEADLINE470" class="ladi-element">
            <h3 class="ladi-headline">
              Với sự tự tin tuyệt đối vào chất lượng và nguồn gốc sản phẩm,
              HACOM xin tự hào cam kết: nếu sản phẩm có bất kỳ thông số kỹ
              thuật, mẫu mã, chất lượng không đúng với các thông số của hãng,
              của nhà sản xuất, chúng tôi sẽ hoàn trả lại 100% số tiền đã thanh
              toán cho quý khách trong thời hạn 3 ngày kể từ ngày khách hàng mua
              sản phẩm và còn giữ đầy đủ vỏ hộp, không trầy xước. <br />Các cơ
              chế bảo hành của HACOM và bảo hành 1 đổi 1 trong vòng 15 ngày vui
              lòng xem tại:&nbsp;<br />
            </h3>
          </div>
          <a
            href="http://www.hacom.vn/chinh-sach-bao-hanh"
            target="_blank"
            id="BUTTON404"
            class="ladi-element"
            ><div class="ladi-button">
              <div class="ladi-button-background"></div>
              <div
                id="BUTTON_TEXT404"
                class="ladi-element ladi-button-headline"
              >
                <p class="ladi-headline">
                  http://www.hacom.vn/chinh-sach-bao-hanh
                </p>
              </div>
            </div></a
          >
        </div>
      </div>
      <div id="SECTION402" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE464" class="ladi-element">
            <p class="ladi-headline ladi-transition">ĐỐI TÁC ĐÁNG TIN CẬY</p>
          </div>
          <div id="HEADLINE465" class="ladi-element">
            <h3 class="ladi-headline">
              HACOM hiện là đối tác chiến lược, nhà phân phối chính hãng của các
              thương hiệu công nghệ hàng đầu thế giới như: Intel, AMD, Samsung,
              Acer, ASUS, Gigabyte, MSI, Dell, HP, Lenovo, Microsoft, LG, FPS,
              Kingfast,... và rất nhiều các thương hiệu lớn khác. Tất cả các sản
              phẩm được bán tại HACOM đều nhận được giấy phép ủy quyền chính
              hãng, giấy tờ chứng minh nguồn gốc xuất xứ, cơ sở sản xuất cũng
              như đầy đủ các loại giấy tờ pháp lý khác.<br />
            </h3>
          </div>
          <div id="IMAGE522" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE523" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE524" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE525" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE526" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE527" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE528" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE529" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE530" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE531" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE534" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
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
    </style>
    <script
      src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1687845069506"
      type="text/javascript"
    ></script>
    <script id="script_event_data" type="application/json">
      {
        "HEADLINE20": { "a": "headline", "F": "bounceInLeft", "C": "0s" },
        "HEADLINE21": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "HEADLINE401": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "HEADLINE461": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "HEADLINE462": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "HEADLINE464": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "BUTTON404": {
          "a": "button",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "http://www.hacom.vn/chinh-sach-bao-hanh",
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
            "649bcf8edbf0b40012039b7a";
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
<!--Publish time: Wed, 28 Jun 2023 06:18:34 GMT--><!--LadiPage build time: Tue, 27 Jun 2023 05:51:09 GMT-->

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
