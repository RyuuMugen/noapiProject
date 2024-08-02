import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Hướng Dẫn Mua Hàng Trực Tuyến",
  description: "HACOM - Hướng Dẫn Mua Hàng Trực Tuyến",
};
const page = () => {
  const aaa = `
  <!DOCTYPE html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <title>HACOM - Hướng Dẫn Mua Hàng Trực Tuyến</title>
    <meta http-equiv="Cache-Control" content="no-cache" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta http-equiv="Expires" content="-1" />
    <meta name="keywords" content="" />
    <meta name="description" content="HACOM - Hướng Dẫn Mua Hàng Trực Tuyến" />
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
    <meta property="og:title" content="HACOM - Hướng Dẫn Mua Hàng Trực Tuyến" />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png"
    />
    <meta
      property="og:description"
      content="HACOM - Hướng Dẫn Mua Hàng Trực Tuyến"
    />
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
        #HEADLINE401,
        #HEADLINE473 {
          opacity: 0 !important;
          pointer-events: none !important;
        }
      }
      @media (max-width: 767px) {
        #HEADLINE20,
        #HEADLINE21,
        #HEADLINE401,
        #HEADLINE473 {
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
      #IMAGE519,
      #HEADLINE471,
      #BUTTON407,
      #BUTTON408,
      #IMAGE543,
      #HEADLINE501 {
        top: 0px;
      }
      #IMAGE519 > .ladi-image > .ladi-image-background,
      #IMAGE535 > .ladi-image > .ladi-image-background,
      #IMAGE536 > .ladi-image > .ladi-image-background,
      #BUTTON405,
      #BUTTON406,
      #IMAGE539,
      #IMAGE539 > .ladi-image > .ladi-image-background,
      #BOX465,
      #IMAGE540,
      #IMAGE540 > .ladi-image > .ladi-image-background,
      #BOX466,
      #IMAGE541,
      #IMAGE541 > .ladi-image > .ladi-image-background,
      #BOX467,
      #IMAGE542,
      #IMAGE542 > .ladi-image > .ladi-image-background,
      #BOX468,
      #IMAGE543 > .ladi-image > .ladi-image-background,
      #BOX471,
      #IMAGE544,
      #IMAGE544 > .ladi-image > .ladi-image-background,
      #BOX472,
      #IMAGE545 > .ladi-image > .ladi-image-background,
      #IMAGE546 > .ladi-image > .ladi-image-background,
      #BOX473,
      #HEADLINE486,
      #BOX478,
      #GROUP519,
      #HEADLINE489,
      #GROUP500,
      #BOX480,
      #GROUP520,
      #GROUP525,
      #IMAGE548 > .ladi-image > .ladi-image-background {
        top: 0px;
        left: 0px;
      }
      #HEADLINE20 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
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
      #HEADLINE473 > .ladi-headline:hover,
      #HEADLINE401 > .ladi-headline:hover,
      #BOX463 > .ladi-box:hover,
      #BOX465 > .ladi-box:hover,
      #BOX466 > .ladi-box:hover,
      #BOX467 > .ladi-box:hover,
      #BOX468 > .ladi-box:hover,
      #BOX470 > .ladi-box:hover,
      #BOX471 > .ladi-box:hover,
      #BOX472 > .ladi-box:hover,
      #BOX473 > .ladi-box:hover,
      #BOX478 > .ladi-box:hover,
      #BOX480 > .ladi-box:hover {
        opacity: 1;
      }
      #HEADLINE21 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #HEADLINE21.ladi-animation > .ladi-headline,
      #HEADLINE473.ladi-animation > .ladi-headline,
      #HEADLINE401.ladi-animation > .ladi-headline {
        animation-name: fadeInDown;
        animation-delay: 0s;
        animation-duration: 1s;
        animation-iteration-count: 1;
      }
      #HEADLINE473 > .ladi-headline,
      #HEADLINE401 > .ladi-headline {
        font-family: VVRNIEFbJvbGQudHRm;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(236, 29, 34);
        text-align: center;
      }
      #Cacbuocbaohanh > .ladi-section-background,
      #BOX463 > .ladi-box,
      #BOX470 > .ladi-box {
        background-color: rgb(245, 245, 245);
      }
      #HEADLINE463 > .ladi-headline {
        font-size: 18px;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE471 {
        width: 321px;
      }
      #HEADLINE471 > .ladi-headline {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE472 {
        width: 415px;
      }
      #HEADLINE472 > .ladi-headline {
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
      }
      #BUTTON405,
      #GROUP466 {
        width: 212px;
      }
      #BUTTON405 > .ladi-button > .ladi-button-background,
      #BUTTON406 > .ladi-button > .ladi-button-background,
      #BUTTON407 > .ladi-button > .ladi-button-background,
      #BOX468 > .ladi-box,
      #BUTTON408 > .ladi-button > .ladi-button-background,
      #BUTTON409 > .ladi-button > .ladi-button-background,
      #BOX472 > .ladi-box,
      #BOX478 > .ladi-box {
        background-color: rgb(236, 28, 36);
      }
      #BUTTON405 > .ladi-button,
      #BUTTON406 > .ladi-button,
      #BOX468 > .ladi-box,
      #BUTTON409 > .ladi-button {
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(236, 28, 36);
      }
      #BUTTON_TEXT405 {
        width: 210px;
      }
      #BUTTON_TEXT405,
      #BOX463,
      #BUTTON_TEXT407,
      #BOX470,
      #BUTTON_TEXT408,
      #BUTTON_TEXT409,
      #BUTTON_TEXT410,
      #BUTTON_TEXT411,
      #HEADLINE490,
      #HEADLINE491,
      #SHAPE444 {
        left: 0px;
      }
      #BUTTON_TEXT405 > .ladi-headline,
      #BUTTON_TEXT406 > .ladi-headline {
        font-size: 24px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: center;
      }
      #SHAPE416 {
        width: 20.5934px;
        left: 22px;
      }
      #SHAPE416 svg:last-child,
      #SHAPE418 svg:last-child,
      #SHAPE444 svg:last-child {
        fill: rgb(255, 255, 255);
      }
      #SECTION397 > .ladi-section-background,
      #SECTION402 > .ladi-section-background,
      #BOX471 > .ladi-box,
      #BUTTON410 > .ladi-button > .ladi-button-background {
        background-color: rgb(255, 255, 255);
      }
      #BUTTON406,
      #GROUP467 {
        width: 279px;
        height: 60px;
      }
      #BUTTON_TEXT406 {
        width: 277px;
        top: 9px;
        left: 0px;
      }
      #SHAPE418 {
        width: 22px;
        height: 22px;
        top: 21px;
        left: 18.5px;
      }
      #BOX463 > .ladi-box,
      #BOX470 > .ladi-box {
        border-width: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(236, 29, 34);
      }
      #BUTTON407 > .ladi-button,
      #BUTTON408 > .ladi-button {
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(255, 22, 22);
      }
      #BUTTON_TEXT407 > .ladi-headline,
      #BUTTON_TEXT408 > .ladi-headline {
        font-size: 21px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: center;
      }
      #BOX465 > .ladi-box,
      #BOX466 > .ladi-box,
      #BOX467 > .ladi-box,
      #BUTTON411 > .ladi-button {
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(19, 9, 126);
      }
      #BOX465 > .ladi-box,
      #BOX466 > .ladi-box,
      #BOX467 > .ladi-box,
      #BUTTON411 > .ladi-button > .ladi-button-background,
      #BOX473 > .ladi-box,
      #BOX480 > .ladi-box {
        background-color: rgb(19, 9, 126);
      }
      #HEADLINE474 > .ladi-headline,
      #HEADLINE475 > .ladi-headline,
      #HEADLINE476 > .ladi-headline,
      #HEADLINE477 > .ladi-headline {
        font-size: 15px;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #BOX471 > .ladi-box,
      #BOX472 > .ladi-box,
      #BOX478 > .ladi-box,
      #BOX480 > .ladi-box {
        border-width: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(236, 28, 36);
      }
      #HEADLINE478 > .ladi-headline {
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: center;
      }
      #BUTTON_TEXT409 > .ladi-headline,
      #BUTTON_TEXT411 > .ladi-headline {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: center;
      }
      #BUTTON410 > .ladi-button {
        border-width: 1px;
        border-radius: 5px;
        border-style: solid;
        border-color: rgb(168, 166, 166);
      }
      #BUTTON_TEXT410 > .ladi-headline {
        font-size: 14px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: center;
      }
      #HEADLINE479 > .ladi-headline,
      #HEADLINE480 > .ladi-headline,
      #HEADLINE481 > .ladi-headline,
      #HEADLINE489 > .ladi-headline,
      #HEADLINE490 > .ladi-headline,
      #HEADLINE491 > .ladi-headline,
      #HEADLINE498 > .ladi-headline {
        font-size: 16px;
        line-height: 1.6;
        color: rgb(0, 0, 0);
        text-align: left;
      }
      #HEADLINE483 > .ladi-headline,
      #HEADLINE484 > .ladi-headline,
      #HEADLINE485 > .ladi-headline,
      #HEADLINE486 > .ladi-headline,
      #HEADLINE487 > .ladi-headline,
      #HEADLINE488 > .ladi-headline,
      #HEADLINE492 > .ladi-headline,
      #HEADLINE493 > .ladi-headline,
      #HEADLINE501 > .ladi-headline,
      #HEADLINE500 > .ladi-headline,
      #HEADLINE499 > .ladi-headline,
      #HEADLINE503 > .ladi-headline {
        font-size: 16px;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #BOX473 > .ladi-box {
        border-width: 1px;
        border-radius: 10px;
        border-style: solid;
        border-color: rgb(19, 9, 126);
      }
      #HEADLINE486,
      #HEADLINE487,
      #HEADLINE488 {
        width: 524px;
      }
      #HEADLINE487 {
        top: 50.8824px;
        left: 0px;
      }
      #HEADLINE488 {
        top: 78.9145px;
        left: 0px;
      }
      #GROUP533 {
        width: 524px;
        height: 129.915px;
        top: 12.8153px;
        left: 29.2418px;
      }
      #HEADLINE502 > .ladi-headline {
        font-size: 18px;
        font-weight: bold;
        line-height: 1.6;
        color: rgb(255, 255, 255);
        text-align: left;
      }
      #IMAGE548,
      #IMAGE548 > .ladi-image > .ladi-image-background {
        width: 366.54px;
        height: 675.9px;
      }
      #IMAGE548 > .ladi-image > .ladi-image-background {
        background-image: url("https://w.ladicdn.com/s700x1000/5d3c13acdc09063fd1918045/25-20230613081449-km0dv.png");
      }
      @media (min-width: 768px) {
        #Header {
          height: 649.893px;
        }
        #IMAGE519,
        #IMAGE519 > .ladi-image > .ladi-image-background {
          width: 1921.78px;
          height: 565.893px;
        }
        #IMAGE519 {
          left: -480px;
        }
        #IMAGE519 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s2250x900/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
        }
        #HEADLINE20,
        #HEADLINE21 {
          width: 606px;
        }
        #HEADLINE20 {
          top: 180.447px;
          left: -153.25px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 48px;
          line-height: 1.2;
        }
        #HEADLINE21 {
          top: 312.447px;
          left: -153.25px;
        }
        #HEADLINE21 > .ladi-headline {
          font-size: 24px;
        }
        #IMAGE535,
        #IMAGE535 > .ladi-image > .ladi-image-background {
          width: 638.208px;
          height: 486.439px;
        }
        #IMAGE535 {
          top: 79.454px;
          left: 466.859px;
        }
        #IMAGE535 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s950x800/5d3c13acdc09063fd1918045/header-1-20230613044639-vgqju.png");
        }
        #HEADLINE473 {
          width: 719px;
          top: 585.087px;
          left: -117px;
        }
        #HEADLINE473 > .ladi-headline,
        #HEADLINE401 > .ladi-headline {
          font-size: 32px;
        }
        #Cacbuocbaohanh {
          height: 524.077px;
        }
        #IMAGE536,
        #IMAGE536 > .ladi-image > .ladi-image-background {
          width: 718.451px;
          height: 478.967px;
        }
        #IMAGE536 {
          top: 45.11px;
          left: -153.25px;
        }
        #IMAGE536 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1050x800/5d3c13acdc09063fd1918045/nv2-1-20230613045308-2umpg.png");
        }
        #HEADLINE463 {
          width: 477px;
          top: 146.69px;
          left: 0px;
        }
        #HEADLINE471 {
          left: 67.5px;
        }
        #HEADLINE472 {
          top: 110px;
          left: 31px;
        }
        #HEADLINE472 > .ladi-headline {
          font-size: 18px;
          text-align: left;
        }
        #BUTTON405,
        #GROUP466 {
          height: 60px;
        }
        #BUTTON_TEXT405,
        #BUTTON_TEXT407,
        #BUTTON_TEXT409,
        #BUTTON_TEXT410,
        #BUTTON_TEXT411 {
          top: 9px;
        }
        #SHAPE416 {
          height: 27.732px;
          top: 19.134px;
        }
        #GROUP466 {
          top: 36.72px;
          left: 122px;
        }
        #GROUP464 {
          width: 477px;
          height: 319.69px;
          top: 102.194px;
          left: 625.5px;
        }
        #SECTION397 {
          height: 1193.2px;
        }
        #HEADLINE401 {
          width: 1046px;
          top: 21.277px;
          left: -119.25px;
        }
        #GROUP467 {
          top: 93.971px;
          left: 329.25px;
        }
        #BOX463 {
          width: 1200px;
          height: 939px;
          top: 20px;
        }
        #BUTTON407 {
          width: 415px;
          height: 60px;
        }
        #BUTTON407,
        #BUTTON408 {
          left: 22.25px;
        }
        #BUTTON_TEXT407,
        #BUTTON_TEXT408 {
          width: 413px;
        }
        #GROUP469 {
          width: 1200px;
          height: 959px;
          top: 189.53px;
          left: -119.25px;
        }
        #IMAGE539,
        #IMAGE539 > .ladi-image > .ladi-image-background,
        #IMAGE541,
        #IMAGE541 > .ladi-image > .ladi-image-background {
          width: 566.804px;
          height: 319.867px;
        }
        #IMAGE539 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x650/5d3c13acdc09063fd1918045/11-20230613062439-nozsl.png");
        }
        #BOX465,
        #GROUP471,
        #BOX466,
        #GROUP472,
        #BOX467,
        #GROUP477,
        #BOX468,
        #GROUP480 {
          width: 478px;
          height: 143px;
        }
        #HEADLINE474,
        #HEADLINE475,
        #HEADLINE476,
        #HEADLINE477 {
          width: 438px;
          top: 21.5px;
          left: 29px;
        }
        #GROUP471,
        #GROUP477 {
          top: 245.433px;
          left: 44.402px;
        }
        #GROUP474,
        #GROUP476 {
          width: 566.804px;
          height: 388.433px;
        }
        #GROUP474 {
          top: 290.597px;
          left: -98px;
        }
        #IMAGE540,
        #IMAGE540 > .ladi-image > .ladi-image-background,
        #IMAGE542,
        #IMAGE542 > .ladi-image > .ladi-image-background {
          width: 567.348px;
          height: 319.867px;
        }
        #IMAGE540 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x650/5d3c13acdc09063fd1918045/12-20230613062511-c2n9_.png");
        }
        #GROUP472,
        #GROUP480 {
          top: 245.433px;
          left: 44.674px;
        }
        #GROUP475,
        #GROUP479 {
          width: 567.348px;
          height: 388.433px;
        }
        #GROUP475 {
          top: 290.597px;
          left: 493.19px;
        }
        #IMAGE541 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x650/5d3c13acdc09063fd1918045/13-20230613064151-zdyb6.png");
        }
        #GROUP476 {
          top: 719.597px;
          left: -98px;
        }
        #IMAGE542 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x650/5d3c13acdc09063fd1918045/14-20230613064409-dxmtv.png");
        }
        #GROUP479 {
          top: 719.597px;
          left: 493.19px;
        }
        #SECTION402 {
          height: 3236.83px;
        }
        #BOX470 {
          width: 1200px;
          height: 2366.55px;
          top: 31.4457px;
        }
        #BUTTON408 {
          width: 415px;
          height: 72.1054px;
        }
        #BUTTON_TEXT408 {
          top: 14.1506px;
        }
        #GROUP482 {
          width: 1200px;
          height: 2398px;
          top: 38.9128px;
          left: -123.25px;
        }
        #IMAGE543,
        #IMAGE543 > .ladi-image > .ladi-image-background,
        #IMAGE544,
        #IMAGE544 > .ladi-image > .ladi-image-background {
          width: 1175.02px;
          height: 661.613px;
        }
        #IMAGE543 {
          left: 0px;
        }
        #IMAGE543 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1500x1000/5d3c13acdc09063fd1918045/21-20230613070001-7pedb.png");
        }
        #BOX471,
        #BOX472,
        #GROUP489 {
          width: 945px;
          height: 196px;
        }
        #HEADLINE478,
        #HEADLINE479,
        #HEADLINE480,
        #HEADLINE481,
        #HEADLINE483,
        #HEADLINE484,
        #HEADLINE485,
        #HEADLINE489,
        #HEADLINE490,
        #HEADLINE491,
        #HEADLINE498 {
          width: 864px;
        }
        #HEADLINE478 {
          top: 14.5px;
          left: 41.25px;
        }
        #HEADLINE478 > .ladi-headline {
          font-size: 16px;
        }
        #BUTTON409,
        #BUTTON410,
        #BUTTON411 {
          width: 219px;
          height: 40px;
        }
        #BUTTON409 {
          top: 42.502px;
          left: 186.5px;
        }
        #BUTTON_TEXT409,
        #BUTTON_TEXT410,
        #BUTTON_TEXT411 {
          width: 217px;
        }
        #BUTTON410 {
          top: 92.502px;
          left: 187.5px;
        }
        #BUTTON411 {
          top: 141.307px;
          left: 188.5px;
        }
        #HEADLINE479 {
          top: 53.502px;
          left: 97.25px;
        }
        #HEADLINE480 {
          top: 99.502px;
          left: 97.25px;
        }
        #HEADLINE481 {
          top: 146.307px;
          left: 97.25px;
        }
        #GROUP486 {
          width: 961.25px;
          height: 196px;
        }
        #GROUP486,
        #GROUP489 {
          top: 527.306px;
          left: 115.5px;
        }
        #GROUP487,
        #GROUP488 {
          width: 1175.02px;
          height: 723.306px;
        }
        #GROUP487 {
          top: 142.524px;
          left: -108px;
        }
        #IMAGE544 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s1500x1000/5d3c13acdc09063fd1918045/22-20230613071946-7030z.png");
        }
        #HEADLINE483 {
          top: 37.502px;
          left: 65.25px;
        }
        #HEADLINE484 {
          top: 91.502px;
          left: 66.25px;
        }
        #HEADLINE485 {
          top: 130.307px;
          left: 65.25px;
        }
        #GROUP488 {
          top: 886.528px;
          left: -108px;
        }
        #IMAGE545,
        #IMAGE545 > .ladi-image > .ladi-image-background {
          width: 585.985px;
          height: 783.2px;
        }
        #IMAGE545 {
          top: 1630.23px;
          left: -108px;
        }
        #IMAGE545 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x1100/5d3c13acdc09063fd1918045/23-20230613072647-4lfg1.png");
        }
        #IMAGE546,
        #IMAGE546 > .ladi-image > .ladi-image-background {
          width: 568.64px;
          height: 624px;
        }
        #IMAGE546 {
          top: 1630.23px;
          left: 495.656px;
        }
        #IMAGE546 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s900x950/5d3c13acdc09063fd1918045/24-20230613072717-7bhse.png");
        }
        #BOX473,
        #GROUP495 {
          width: 568.64px;
          height: 150.6px;
        }
        #GROUP495 {
          top: 2262.83px;
          left: 495.656px;
        }
        #BOX478,
        #GROUP519,
        #GROUP504,
        #BOX480,
        #GROUP520,
        #GROUP525,
        #GROUP528 {
          width: 945px;
          height: 279px;
        }
        #HEADLINE492,
        #HEADLINE499 {
          width: 699px;
        }
        #HEADLINE492 {
          top: 54.383px;
          left: 37.9109px;
        }
        #HEADLINE493 {
          width: 741px;
          top: 122.25px;
          left: 37.9109px;
        }
        #GROUP504 {
          top: 2600.83px;
          left: -123.25px;
        }
        #HEADLINE490 {
          top: 34px;
        }
        #HEADLINE491 {
          top: 69.805px;
        }
        #GROUP500 {
          width: 864px;
          height: 95.805px;
        }
        #HEADLINE498 {
          top: 101.81px;
          left: 0px;
        }
        #GROUP516 {
          width: 864px;
          height: 127.81px;
          top: 2457.33px;
          left: -61px;
        }
        #SHAPE444 {
          width: 8.89774px;
          height: 11px;
          top: 6.125px;
        }
        #HEADLINE501,
        #HEADLINE500,
        #HEADLINE503 {
          width: 714px;
        }
        #HEADLINE501 {
          left: 18.8138px;
        }
        #GROUP524 {
          width: 732.814px;
          height: 26px;
          top: 181.25px;
          left: 42.4823px;
        }
        #HEADLINE500 {
          top: 123.25px;
          left: 31.2961px;
        }
        #HEADLINE499 {
          top: 61.383px;
          left: 30.9109px;
        }
        #HEADLINE502 {
          width: 68px;
          top: 23px;
          left: 42.4823px;
        }
        #HEADLINE503 {
          top: 181.25px;
          left: 31.2961px;
        }
        #GROUP528 {
          top: 2901.83px;
          left: -123.25px;
        }
        #IMAGE548 {
          top: 2504.93px;
          left: 746px;
        }
      }
      @media (max-width: 767px) {
        #Header {
          height: 166.552px;
        }
        #IMAGE519,
        #IMAGE519 > .ladi-image > .ladi-image-background {
          width: 420px;
          height: 123.674px;
        }
        #IMAGE519 {
          left: 0px;
        }
        #IMAGE519 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
        }
        #HEADLINE20 {
          width: 190px;
          top: 20.465px;
          left: 14px;
        }
        #HEADLINE20 > .ladi-headline {
          font-size: 15px;
          line-height: 1.6;
        }
        #HEADLINE21 {
          width: 209px;
          top: 74.965px;
          left: 14px;
        }
        #HEADLINE21 > .ladi-headline {
          font-size: 11px;
        }
        #IMAGE535,
        #IMAGE535 > .ladi-image > .ladi-image-background {
          width: 163.84px;
          height: 124.878px;
        }
        #IMAGE535 {
          top: -0.602px;
          left: 229px;
        }
        #IMAGE535 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s500x450/5d3c13acdc09063fd1918045/header-1-20230613044639-vgqju.png");
        }
        #HEADLINE473 {
          width: 416px;
          top: 123.674px;
          left: 1px;
        }
        #HEADLINE473 > .ladi-headline,
        #HEADLINE401 > .ladi-headline {
          font-size: 19px;
        }
        #Cacbuocbaohanh {
          height: 616.356px;
        }
        #IMAGE536,
        #IMAGE536 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 266.666px;
        }
        #IMAGE536 {
          top: 7px;
          left: 8.75px;
        }
        #IMAGE536 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/nv2-1-20230613045308-2umpg.png");
        }
        #HEADLINE463 {
          width: 412px;
          top: 121.94px;
          left: 5.5px;
        }
        #HEADLINE471 {
          left: 36.5px;
        }
        #HEADLINE472 {
          top: 89.2412px;
          left: 0px;
        }
        #HEADLINE472 > .ladi-headline {
          font-size: 17px;
          text-align: center;
        }
        #BUTTON405,
        #GROUP466 {
          height: 50.7081px;
        }
        #BUTTON_TEXT405 {
          top: 7.60622px;
        }
        #SHAPE416 {
          height: 23.4373px;
          top: 16.1708px;
        }
        #GROUP466 {
          top: 29px;
          left: 91px;
        }
        #GROUP464 {
          width: 417.5px;
          height: 323.94px;
          top: 292.417px;
          left: 1.25px;
        }
        #SECTION397 {
          height: 1677.73px;
        }
        #HEADLINE401 {
          width: 410px;
          top: 5px;
          left: 5px;
        }
        #GROUP467 {
          top: 73px;
          left: 76.5px;
        }
        #BOX463 {
          width: 419.25px;
          height: 1465.69px;
          top: 24.3067px;
        }
        #BUTTON407 {
          width: 354.111px;
          height: 67.9201px;
        }
        #BUTTON407,
        #BUTTON408 {
          left: 7.77357px;
        }
        #BUTTON_TEXT407,
        #BUTTON_TEXT408 {
          width: 352px;
        }
        #BUTTON_TEXT407 {
          top: 10.9379px;
        }
        #GROUP469 {
          width: 419.25px;
          height: 1490px;
          top: 154px;
          left: 0px;
        }
        #IMAGE539,
        #IMAGE539 > .ladi-image > .ladi-image-background {
          width: 407.737px;
          height: 224.665px;
        }
        #IMAGE539 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/11-20230613062439-nozsl.png");
        }
        #BOX465,
        #GROUP471 {
          width: 342.781px;
          height: 148.039px;
        }
        #HEADLINE474 {
          width: 314px;
          top: 16.2436px;
          left: 20.7963px;
        }
        #GROUP471 {
          top: 160.429px;
          left: 32.478px;
        }
        #GROUP474 {
          width: 407.737px;
          height: 308.468px;
          top: 238px;
          left: 6.1315px;
        }
        #IMAGE540,
        #IMAGE540 > .ladi-image > .ladi-image-background,
        #IMAGE542,
        #IMAGE542 > .ladi-image > .ladi-image-background {
          width: 407.737px;
          height: 229.88px;
        }
        #IMAGE540 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/12-20230613062511-c2n9_.png");
        }
        #BOX466,
        #GROUP472 {
          width: 343.525px;
          height: 188.77px;
        }
        #HEADLINE475,
        #HEADLINE476,
        #HEADLINE477 {
          width: 315px;
        }
        #HEADLINE475 {
          top: 28.3814px;
          left: 20.8415px;
        }
        #GROUP472,
        #GROUP480 {
          top: 176.386px;
          left: 32.1059px;
        }
        #GROUP475 {
          width: 407.737px;
          height: 365.156px;
          top: 557.3px;
          left: 5.7565px;
        }
        #IMAGE541,
        #IMAGE541 > .ladi-image > .ladi-image-background {
          width: 407.737px;
          height: 230.1px;
        }
        #IMAGE541 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/13-20230613064151-zdyb6.png");
        }
        #BOX467,
        #GROUP477 {
          width: 343.855px;
          height: 134.869px;
        }
        #HEADLINE476 {
          top: 20.2775px;
          left: 20.8615px;
        }
        #GROUP477 {
          top: 176.555px;
          left: 31.9411px;
        }
        #GROUP476 {
          width: 407.737px;
          height: 311.424px;
          top: 934.446px;
          left: 6.1315px;
        }
        #IMAGE542 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/14-20230613064409-dxmtv.png");
        }
        #BOX468,
        #GROUP480 {
          width: 343.525px;
          height: 171.77px;
        }
        #HEADLINE477 {
          top: 16.2062px;
          left: 20.8415px;
        }
        #GROUP479 {
          width: 407.737px;
          height: 348.156px;
          top: 1256.87px;
          left: 6.1315px;
        }
        #SECTION402 {
          height: 4052.99px;
        }
        #BOX470 {
          width: 419.25px;
          height: 2210.35px;
          top: 36.6559px;
        }
        #BUTTON408 {
          width: 354.111px;
          height: 75.968px;
        }
        #BUTTON_TEXT408 {
          top: 16.495px;
        }
        #GROUP482 {
          width: 419.25px;
          height: 2247.01px;
          top: 10px;
          left: 0.375px;
        }
        #IMAGE543,
        #IMAGE543 > .ladi-image > .ladi-image-background {
          width: 403.376px;
          height: 227.127px;
        }
        #IMAGE543 {
          left: 8.312px;
        }
        #IMAGE543 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/21-20230613070001-7pedb.png");
        }
        #BOX471,
        #GROUP486 {
          width: 420px;
          height: 268.285px;
        }
        #HEADLINE478,
        #HEADLINE499 {
          width: 378px;
        }
        #HEADLINE478 {
          top: 5.9132px;
          left: 15.2505px;
        }
        #HEADLINE478 > .ladi-headline {
          font-size: 14px;
        }
        #BUTTON409,
        #BUTTON410,
        #BUTTON411 {
          width: 215.967px;
          height: 39.4459px;
        }
        #BUTTON409 {
          top: 50.9132px;
          left: 96.267px;
        }
        #BUTTON_TEXT409,
        #BUTTON_TEXT410,
        #BUTTON_TEXT411 {
          width: 214px;
          top: 8.87532px;
        }
        #BUTTON410 {
          top: 118.359px;
          left: 96.267px;
        }
        #BUTTON411 {
          top: 186.35px;
          left: 96.267px;
        }
        #HEADLINE479 {
          width: 394px;
          top: 67.3591px;
          left: 12.4369px;
        }
        #HEADLINE480 {
          width: 377px;
          top: 135.35px;
          left: 11.9753px;
        }
        #HEADLINE481 {
          width: 381px;
          top: 201.28px;
          left: 10.0394px;
        }
        #GROUP486 {
          top: 182.021px;
          left: 0px;
        }
        #GROUP487 {
          width: 420px;
          height: 450.306px;
          top: 122px;
          left: 0px;
        }
        #IMAGE544,
        #IMAGE544 > .ladi-image > .ladi-image-background {
          width: 419.405px;
          height: 236.153px;
        }
        #IMAGE544 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x550/5d3c13acdc09063fd1918045/22-20230613071946-7030z.png");
        }
        #BOX472,
        #GROUP489 {
          width: 419.405px;
          height: 207.959px;
        }
        #HEADLINE483,
        #HEADLINE484,
        #HEADLINE485 {
          width: 383px;
        }
        #HEADLINE483 {
          top: 15.613px;
          left: 26.9589px;
        }
        #HEADLINE484 {
          top: 100.79px;
          left: 28.9589px;
        }
        #HEADLINE485 {
          top: 135.275px;
          left: 26.9589px;
        }
        #GROUP489 {
          top: 207.153px;
          left: 0px;
        }
        #GROUP488 {
          width: 419.405px;
          height: 415.112px;
          top: 599.31px;
          left: 0px;
        }
        #IMAGE545,
        #IMAGE545 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 534.621px;
        }
        #IMAGE545 {
          top: 1028.61px;
          left: 10px;
        }
        #IMAGE545 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x850/5d3c13acdc09063fd1918045/23-20230613072647-4lfg1.png");
        }
        #IMAGE546,
        #IMAGE546 > .ladi-image > .ladi-image-background {
          width: 400px;
          height: 438.942px;
        }
        #IMAGE546 {
          top: 1573.23px;
          left: 10px;
        }
        #IMAGE546 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s750x750/5d3c13acdc09063fd1918045/24-20230613072717-7bhse.png");
        }
        #BOX473,
        #GROUP495 {
          width: 419.625px;
          height: 214.24px;
        }
        #GROUP495 {
          top: 2022.18px;
          left: 0px;
        }
        #BOX478,
        #GROUP519,
        #GROUP504 {
          width: 420px;
          height: 444px;
        }
        #HEADLINE492 {
          width: 311px;
          top: 47.3px;
          left: 27.0716px;
        }
        #HEADLINE493 {
          width: 329px;
          top: 155.243px;
          left: 27.5623px;
        }
        #GROUP504 {
          top: 3198.99px;
          left: 0px;
        }
        #HEADLINE489,
        #HEADLINE490,
        #HEADLINE491,
        #HEADLINE498 {
          width: 407px;
        }
        #HEADLINE490 {
          top: 55.2362px;
        }
        #HEADLINE491 {
          top: 106.715px;
        }
        #GROUP500 {
          width: 407px;
          height: 157.715px;
        }
        #HEADLINE498 {
          top: 158.472px;
          left: 0.0001px;
        }
        #GROUP516 {
          width: 407px;
          height: 209.472px;
          top: 2274.78px;
          left: 10.9088px;
        }
        #SHAPE444 {
          width: 3.95455px;
          height: 12.8136px;
          top: 7.13485px;
        }
        #HEADLINE501,
        #HEADLINE500,
        #HEADLINE503 {
          width: 318px;
        }
        #HEADLINE501 {
          left: 8.36167px;
        }
        #GROUP524 {
          width: 325.695px;
          height: 30.2867px;
          top: 209.133px;
          left: 18.881px;
        }
        #BOX480,
        #GROUP520,
        #GROUP525,
        #GROUP528 {
          width: 420px;
          height: 325px;
        }
        #HEADLINE500 {
          top: 140.241px;
          left: 27.2427px;
        }
        #HEADLINE499 {
          top: 39.5142px;
          left: 28.8439px;
        }
        #HEADLINE502 {
          width: 93px;
          top: 17.7921px;
          left: 18.881px;
        }
        #HEADLINE503 {
          top: 270.25px;
          left: 24.2427px;
        }
        #GROUP528 {
          top: 3669.99px;
          left: 0px;
        }
        #IMAGE548 {
          top: 2515.59px;
          left: 26.73px;
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
              HƯỚNG DẪN<br />MUA HÀNG TRỰC TUYẾN<br />
            </h3>
          </div>
          <div id="HEADLINE21" class="ladi-element">
            <h3 class="ladi-headline ladi-transition">
              CAM KẾT GIÁ TỐT NHẤT THỊ TRƯỜNG
            </h3>
          </div>
          <div id="IMAGE535" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="HEADLINE473" class="ladi-element">
            <p class="ladi-headline ladi-transition">
              CÁCH 1: ĐẶT MUA HÀNG QUA ĐIỆN THOẠI
            </p>
          </div>
        </div>
      </div>
      <div id="Cacbuocbaohanh" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="IMAGE536" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="GROUP464" class="ladi-element">
            <div class="ladi-group">
              <div id="HEADLINE463" class="ladi-element">
                <p class="ladi-headline">
                  Đội ngũ nhân viên tư vấn nhiệt tình, giàu kinh nghiệm của
                  HACOM sẽ giới thiệu với quý khách hàng những sản phẩm phù hợp
                  nhất theo nhu cầu và kinh phí, cũng như hướng dẫn quý khách
                  phương pháp thanh toán và sử dụng các dịch vụ khác một cách
                  nhanh chóng, thuận tiện và an toàn nhất.<br />
                </p>
              </div>
              <div id="HEADLINE471" class="ladi-element">
                <p class="ladi-headline">
                  Gọi điện đến số tổng đài 1900 1903<br />
                </p>
              </div>
              <div id="HEADLINE472" class="ladi-element">
                <p class="ladi-headline">
                  từ 8h00 đến 21h30 tất cả các ngày trong tuần.<br />
                </p>
              </div>
              <div id="GROUP466" class="ladi-element">
                <div class="ladi-group">
                  <div id="BUTTON405" class="ladi-element">
                    <div class="ladi-button">
                      <div class="ladi-button-background"></div>
                      <div
                        id="BUTTON_TEXT405"
                        class="ladi-element ladi-button-headline"
                      >
                        <p class="ladi-headline">1900 1903</p>
                      </div>
                    </div>
                  </div>
                  <div id="SHAPE416" class="ladi-element">
                    <div class="ladi-shape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        preserveAspectRatio="none"
                        viewBox="0 0 1408 1896.0833"
                        class=""
                        fill="#FFFFFF"
                      >
                        <path
                          d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION397" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="HEADLINE401" class="ladi-element">
            <p class="ladi-headline ladi-transition">
              CÁCH 2: ĐẶT MUA HÀNG QUA HỆ THỐNG WEBSITE CỦA HACOM
            </p>
          </div>
          <a
            href="https://hacom.vn/"
            target="_blank"
            id="GROUP467"
            class="ladi-element"
            ><div class="ladi-group">
              <div id="BUTTON406" class="ladi-element">
                <div class="ladi-button">
                  <div class="ladi-button-background"></div>
                  <div
                    id="BUTTON_TEXT406"
                    class="ladi-element ladi-button-headline"
                  >
                    <p class="ladi-headline">www.hacom.vn</p>
                  </div>
                </div>
              </div>
              <div id="SHAPE418" class="ladi-element">
                <div class="ladi-shape">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    preserveAspectRatio="none"
                    viewBox="0 0 24 24"
                    class=""
                    fill="rgba(255, 255, 255, 1)"
                  >
                    <path
                      d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                  </svg>
                </div>
              </div></div
          ></a>
          <div id="GROUP469" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX463" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="BUTTON407" class="ladi-element">
                <div class="ladi-button">
                  <div class="ladi-button-background"></div>
                  <div
                    id="BUTTON_TEXT407"
                    class="ladi-element ladi-button-headline"
                  >
                    <p class="ladi-headline">BƯỚC 1: Tìm sản phẩm cần mua</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP474" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE539" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP471" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX465" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE474" class="ladi-element">
                    <h3 class="ladi-headline">
                      ● Tìm kiếm sản phẩm bạn muốn mua bằng cách sử dụng menu
                      của website. Chọn loại sản phẩm mà bạn muốn mua. Ví dụ:
                      Laptop Gaming, CPU - Bộ vi xử lý, Bàn phím, Chuột,...<br />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP475" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE540" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP472" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX466" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE475" class="ladi-element">
                    <h3 class="ladi-headline">
                      ● Trong trường hợp đã có một sản phẩm mà quý khách muốn
                      mua, quý khách có thể gõ tên sản phẩm vào ô tìm kiếm và ấn
                      Enter, website sẽ gợi ý và hiển thị những sản phẩm tốt và
                      phù hợp nhất theo nhu cầu của quý khách.<br />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP476" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE541" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP477" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX467" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE476" class="ladi-element">
                    <h3 class="ladi-headline">
                      ● Sử dụng bộ lọc phía bên trái để tìm kiếm các sản phẩm
                      theo mong muốn về thương hiệu, tính năng, thông số kỹ
                      thuật,...<br />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP479" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE542" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP480" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX468" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE477" class="ladi-element">
                    <h3 class="ladi-headline">
                      ● Trong trường hợp quý khách cần sự giúp đỡ, vui lòng nhắn
                      tin với nhân viên tư vấn của HACOM bằng khung chat ở góc
                      dưới phía bên phải màn hình. HACOM luôn sẵn sàng hỗ trợ từ
                      8h00 đến 21h30 tất cả các ngày trong tuần.<br />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SECTION402" class="ladi-section">
        <div class="ladi-section-background"></div>
        <div class="ladi-container">
          <div id="GROUP482" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX470" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="BUTTON408" class="ladi-element">
                <div class="ladi-button">
                  <div class="ladi-button-background"></div>
                  <div
                    id="BUTTON_TEXT408"
                    class="ladi-element ladi-button-headline"
                  >
                    <p class="ladi-headline">BƯỚC 2: Đặt mua sản phẩm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP487" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE543" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP486" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX471" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE478" class="ladi-element">
                    <p class="ladi-headline">
                      Sau khi đã lựa chọn được sản phẩm ưng ý, bạn có thể đặt
                      mua sản phẩm bằng cách:<br />
                    </p>
                  </div>
                  <div id="BUTTON409" class="ladi-element">
                    <div class="ladi-button">
                      <div class="ladi-button-background"></div>
                      <div
                        id="BUTTON_TEXT409"
                        class="ladi-element ladi-button-headline"
                      >
                        <p class="ladi-headline">ĐẶT MUA NGAY</p>
                      </div>
                    </div>
                  </div>
                  <div id="BUTTON410" class="ladi-element">
                    <div class="ladi-button">
                      <div class="ladi-button-background"></div>
                      <div
                        id="BUTTON_TEXT410"
                        class="ladi-element ladi-button-headline"
                      >
                        <p class="ladi-headline">Thêm vào giỏ hàng</p>
                      </div>
                    </div>
                  </div>
                  <div id="BUTTON411" class="ladi-element">
                    <div class="ladi-button">
                      <div class="ladi-button-background"></div>
                      <div
                        id="BUTTON_TEXT411"
                        class="ladi-element ladi-button-headline"
                      >
                        <p class="ladi-headline">TRẢ GÓP</p>
                      </div>
                    </div>
                  </div>
                  <div id="HEADLINE479" class="ladi-element">
                    <p class="ladi-headline">
                      ● Chọn nút&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; nếu bạn muốn thanh toán
                      luôn toàn bộ giá tiền sản phẩm.<br />
                    </p>
                  </div>
                  <div id="HEADLINE480" class="ladi-element">
                    <p class="ladi-headline">
                      ● Chọn nút&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; nếu bạn muốn mua thêm
                      các sản phẩm khác.<br />
                    </p>
                  </div>
                  <div id="HEADLINE481" class="ladi-element">
                    <p class="ladi-headline">
                      ● Chọn nút&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; nếu bạn muốn mua theo
                      hình thức trả góp.<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP488" class="ladi-element">
            <div class="ladi-group">
              <div id="IMAGE544" class="ladi-element">
                <div class="ladi-image">
                  <div class="ladi-image-background"></div>
                </div>
              </div>
              <div id="GROUP489" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX472" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE483" class="ladi-element">
                    <p class="ladi-headline">
                      ● Điền thông tin liên hệ để nhân viên giao vận của HACOM
                      có thể giao hàng cho quý khách nhanh chóng và chính xác
                      nhất.<br />
                    </p>
                  </div>
                  <div id="HEADLINE484" class="ladi-element">
                    <p class="ladi-headline">
                      ● Lựa chọn phương thức thanh toán và ấn đặt hàng.<br />
                    </p>
                  </div>
                  <div id="HEADLINE485" class="ladi-element">
                    <p class="ladi-headline">
                      ● Website sẽ hiển thị trang thông báo chúc mừng quý khách
                      đã đặt hàng thành công!<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="IMAGE545" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="IMAGE546" class="ladi-element">
            <div class="ladi-image">
              <div class="ladi-image-background"></div>
            </div>
          </div>
          <div id="GROUP495" class="ladi-element">
            <div class="ladi-group">
              <div id="BOX473" class="ladi-element">
                <div class="ladi-box ladi-transition"></div>
              </div>
              <div id="GROUP533" class="ladi-element">
                <div class="ladi-group">
                  <div id="HEADLINE486" class="ladi-element">
                    <p class="ladi-headline">
                      ● Trong trường hợp quý khách muốn lựa chọn mua trả góp,
                      vui lòng ấn vào nút “mua trả góp”<br />
                    </p>
                  </div>
                  <div id="HEADLINE487" class="ladi-element">
                    <p class="ladi-headline">
                      ● Lựa chọn phương thức trả góp và làm theo hướng dẫn.<br />
                    </p>
                  </div>
                  <a
                    href="https://hacom.vn/huong-dan-mua-hang-tra-gop"
                    target="_blank"
                    id="HEADLINE488"
                    class="ladi-element"
                    ><p class="ladi-headline">
                      ● Chi tiết chính sách mua hàng trả góp quý khách vui lòng
                      xem tại:
                      <br />https://hacom.vn/huong-dan-mua-hang-tra-gop<br /></p
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP504" class="ladi-element">
            <div class="ladi-group">
              <div id="GROUP519" class="ladi-element">
                <div class="ladi-group">
                  <div id="BOX478" class="ladi-element">
                    <div class="ladi-box ladi-transition"></div>
                  </div>
                  <div id="HEADLINE492" class="ladi-element">
                    <p class="ladi-headline">
                      ● Trong quy trình thao tác, nếu quý khách có bất cứ thắc
                      mắc nào, xin vui lòng liên hệ với nhân viên tư vấn của
                      HACOM qua khung chat để được hỗ trợ.<br />
                    </p>
                  </div>
                  <div id="HEADLINE493" class="ladi-element">
                    <p class="ladi-headline">
                      ● HACOM cam kết tất cả hàng hóa gửi đến quý khách đều là
                      sản phẩm chính hãng mới 100%. Quý khách vui lòng kiểm tra
                      hàng hóa thật kỹ trước khi nhận hàng để tránh những thiệt
                      hại không đáng có trong trường hợp hàng hóa bị va đập, ẩm
                      ướt, tai nạn,... trong quá trình vận chuyển. HACOM xin hết
                      lòng phục vụ nhằm đảm bảo tuyệt đối lợi ích của quý khách
                      trong bất kỳ trường hợp nào.<br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="GROUP516" class="ladi-element">
            <div class="ladi-group">
              <div id="GROUP500" class="ladi-element">
                <div class="ladi-group">
                  <div id="HEADLINE489" class="ladi-element">
                    <p class="ladi-headline">
                      ● Sau khi đặt hàng thành công, HACOM sẽ liên hệ với quý
                      khách để xác nhận đơn hàng và hoàn tất thủ tục.<br />
                    </p>
                  </div>
                  <div id="HEADLINE490" class="ladi-element">
                    <p class="ladi-headline">
                      ● HACOM xin phép được hỗ trợ 100% chi phí vận chuyển đối
                      với mọi giá trị đơn hàng trên toàn quốc.<br />
                    </p>
                  </div>
                  <div id="HEADLINE491" class="ladi-element">
                    <p class="ladi-headline">
                      ● Thời gian giao hàng sẽ tùy thuộc vào vị trí và khoảng
                      cách địa lý.<br />
                    </p>
                  </div>
                </div>
              </div>
              <a
                href=" https://hacom.vn/tra-don-hang"
                target="_blank"
                id="HEADLINE498"
                class="ladi-element"
                ><p class="ladi-headline">
                  ● Quý khách có thể tra cứu tình trạng đơn hàng theo đường dẫn:
                  https://hacom.vn/tra-don-hang<br /></p
              ></a>
            </div>
          </div>
          <div id="GROUP528" class="ladi-element">
            <div class="ladi-group">
              <div id="GROUP525" class="ladi-element">
                <div class="ladi-group">
                  <div id="GROUP524" class="ladi-element">
                    <div class="ladi-group">
                      <div id="SHAPE444" class="ladi-element">
                        <div class="ladi-shape">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox="0 0 1536 1896.0833"
                            class=""
                            fill="#FFFFFF"
                          >
                            <path
                              d="M1536 896q0 209-103 385.5T1153.5 1561 768 1664t-385.5-103T103 1281.5 0 896t103-385.5T382.5 231 768 128t385.5 103T1433 510.5 1536 896z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div id="HEADLINE501" class="ladi-element">
                        <p class="ladi-headline">
                          Xem chi tiết tại:
                          https://hacom.vn/thong-bao-gia-mao-website-hacom<br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="GROUP520" class="ladi-element">
                    <div class="ladi-group">
                      <div id="BOX480" class="ladi-element">
                        <div class="ladi-box ladi-transition"></div>
                      </div>
                      <div id="HEADLINE500" class="ladi-element">
                        <p class="ladi-headline">
                          ● Để đảm bảo an toàn cho quyền lợi của quý khách nhằm
                          tránh những thiệt hại không đáng có, quý khách vui
                          lòng chỉ giao dịch, trao đổi với HACOM qua các kênh
                          chính thức.<br />
                        </p>
                      </div>
                      <div id="HEADLINE499" class="ladi-element">
                        <p class="ladi-headline">
                          ● Hiện có rất nhiều website giả mạo lợi dụng tên
                          thương hiệu của HACOM (HANOICOMPUTER) nhằm mục đích
                          lừa đảo, bán hàng giả, hàng kém chất lượng.&nbsp;<br />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div id="HEADLINE502" class="ladi-element">
                    <h3 class="ladi-headline">LƯU Ý:<br /></h3>
                  </div>
                </div>
              </div>
              <div id="HEADLINE503" class="ladi-element">
                <p class="ladi-headline">
                  ● Xem chi tiết tại:
                  https://hacom.vn/thong-bao-gia-mao-website-hacom<br />
                </p>
              </div>
            </div>
          </div>
          <div id="IMAGE548" class="ladi-element">
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
        "HEADLINE473": { "a": "headline", "F": "fadeInDown", "C": "0s" },
        "GROUP467": {
          "a": "group",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hacom.vn/",
              "a": "link"
            }
          ]
        },
        "HEADLINE498": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": " https://hacom.vn/tra-don-hang",
              "a": "link"
            }
          ]
        },
        "HEADLINE488": {
          "a": "headline",
          "cs": [
            {
              "dr": "action",
              "dv": "_blank",
              "dw": "https://hacom.vn/huong-dan-mua-hang-tra-gop",
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
            "649bd9d3dbf0b40012040cee";
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
<!--Publish time: Wed, 28 Jun 2023 06:58:32 GMT--><!--LadiPage build time: Tue, 27 Jun 2023 05:51:09 GMT-->

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
