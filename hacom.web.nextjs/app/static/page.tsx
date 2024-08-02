import React from "react";

const page = () => {
  const aaa = `<!DOCTYPE html>
  <html lang="vi">
    <head>
      <meta charset="UTF-8" />
      <title>HACOM - Hệ Thống Showroom</title>
      <meta http-equiv="Cache-Control" content="no-cache" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Expires" content="-1" />
      <meta name="keywords" content="" />
      <meta name="description" content="HACOM - Hệ Thống Showroom" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script type="text/javascript">
        window.ladi_viewport = function (b) {
          var a = document;
          b = b ? b : "innerWidth";
          var c = window[b];
          var d = c < 768;
          if (
            typeof window.ladi_is_desktop == "undefined" ||
            window.ladi_is_desktop == undefined
          ) {
            window.ladi_is_desktop = !d;
          }
          var e = 1200;
          var f = 420;
          var g = "";
          if (!d) {
            g = "width=" + e + ",user-scalable=no,initial-scale=1.0";
          } else {
            var h = 1;
            var i = f;
            if (i != c) {
              h = c / i;
            }
            g =
              "width=" +
              i +
              ",user-scalable=no,initial-scale=" +
              h +
              ",minimum-scale=" +
              h +
              ",maximum-scale=" +
              h;
          }
          var j = a.getElementById("viewport");
          if (!j) {
            j = a.createElement("meta");
            j.id = "viewport";
            j.name = "viewport";
            a.head.appendChild(j);
          }
          j.setAttribute("content", g);
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
        href="https://khuyenmai.hacom.vn/hacom-he-thong-showroom"
      />
      <meta
        property="og:url"
        content="https://khuyenmai.hacom.vn/hacom-he-thong-showroom"
      />
      <meta property="og:title" content="HACOM - Hệ Thống Showroom" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="HACOM - Hệ Thống Showroom" />
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
      <link rel="preconnect" href="https://api1.ldpform.com/" crossorigin />
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
        href="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1708759205002"
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
        .ladi-carousel {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ladi-carousel .ladi-carousel-content {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          top: 0;
          transition: top 350ms ease-in-out, left 350ms ease-in-out;
        }
        .ladi-carousel .ladi-carousel-arrow {
          position: absolute;
          top: calc(50% - (33px) / 2);
          cursor: pointer;
          z-index: 90000040;
          width: 33px;
          height: 33px;
          background-repeat: no-repeat;
          background-position: center center;
          background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        .ladi-carousel .ladi-carousel-arrow-left {
          left: 5px;
          transform: rotateY(180deg);
          -webkit-transform: rotateY(180deg);
        }
        .ladi-carousel .ladi-carousel-arrow-right {
          right: 5px;
        }
        .ladi-carousel-indicators-circle {
          display: inline-flex;
          gap: 10px;
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          margin: auto;
          width: fit-content;
        }
        .ladi-carousel-indicators-circle .item {
          width: 10px;
          height: 10px;
          background-color: #d6d6d6;
          border-radius: 100%;
          cursor: pointer;
          outline: 1px solid #fff;
        }
        .ladi-carousel-indicators-circle .item.selected,
        .ladi-carousel-indicators-circle .item:hover {
          background-color: #808080;
        }
        .ladi-carousel-indicators-number {
          display: inline-flex;
          gap: 10px;
          position: absolute;
          bottom: -20px;
          left: 0;
          right: 0;
          margin: auto;
          width: fit-content;
        }
        .ladi-carousel-indicators-number .item {
          width: 15px;
          height: 15px;
          background-color: #d6d6d6;
          border-radius: 100%;
          cursor: pointer;
          font-size: 10px;
          text-align: center;
          line-height: 15px;
          outline: 1px solid #fff;
        }
        .ladi-carousel-indicators-number .item.selected,
        .ladi-carousel-indicators-number .item:hover {
          background-color: #808080;
          color: #fff;
        }
        .ladi-box {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ladi-frame {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .ladi-frame-bg .ladi-frame-background {
          height: 100%;
          width: 100%;
          pointer-events: none;
          transition: inherit;
        }
        .ladi-frame-bg:not(.ladi-frame) {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
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
          .ladi-carousel-fullwidth {
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
          .ladi-carousel .ladi-carousel-content {
            transition: top 300ms ease-in-out, left 300ms ease-in-out;
          }
        }
      </style>
      <style type="text/css" id="style_animation">
        @media (min-width: 768px) {
          #HEADLINE20,
          #GROUP547 {
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
          src: url("https://w.ladicdn.com/5d3c13acdc09063fd1918045/utm-avobold-20230113032040-7gm8f.ttf")
            format("truetype");
        }
        body {
          font-family: "Open Sans", sans-serif;
        }
      </style>
      <style id="style_element" type="text/css">
        #IMAGE724,
        #GROUP535,
        #GROUP541,
        #SHAPE670 {
          top: 0px;
        }
        #IMAGE724 > .ladi-image > .ladi-image-background,
        #BOX523,
        #IMAGE725 > .ladi-image > .ladi-image-background,
        #BOX527,
        #IMAGE730 > .ladi-image > .ladi-image-background,
        #BOX526,
        #IMAGE731 > .ladi-image > .ladi-image-background,
        #CAROUSEL_ITEM466,
        #IMAGE801 > .ladi-image > .ladi-image-background,
        #IMAGE800 > .ladi-image > .ladi-image-background,
        #IMAGE802 > .ladi-image > .ladi-image-background,
        #IMAGE803 > .ladi-image > .ladi-image-background,
        #IMAGE761 > .ladi-image > .ladi-image-background,
        #IMAGE760 > .ladi-image > .ladi-image-background,
        #IMAGE762 > .ladi-image > .ladi-image-background,
        #IMAGE763 > .ladi-image > .ladi-image-background,
        #IMAGE764 > .ladi-image > .ladi-image-background,
        #IMAGE765 > .ladi-image > .ladi-image-background,
        #IMAGE766 > .ladi-image > .ladi-image-background,
        #IMAGE767 > .ladi-image > .ladi-image-background,
        #IMAGE768 > .ladi-image > .ladi-image-background,
        #IMAGE769 > .ladi-image > .ladi-image-background,
        #IMAGE770 > .ladi-image > .ladi-image-background,
        #IMAGE771 > .ladi-image > .ladi-image-background,
        #IMAGE772 > .ladi-image > .ladi-image-background,
        #IMAGE799 > .ladi-image > .ladi-image-background,
        #CAROUSEL_ITEM530,
        #IMAGE773 > .ladi-image > .ladi-image-background,
        #IMAGE774 > .ladi-image > .ladi-image-background,
        #IMAGE775 > .ladi-image > .ladi-image-background,
        #IMAGE776 > .ladi-image > .ladi-image-background,
        #IMAGE777 > .ladi-image > .ladi-image-background,
        #IMAGE778 > .ladi-image > .ladi-image-background,
        #IMAGE779 > .ladi-image > .ladi-image-background,
        #IMAGE780 > .ladi-image > .ladi-image-background,
        #IMAGE781 > .ladi-image > .ladi-image-background,
        #IMAGE782 > .ladi-image > .ladi-image-background,
        #IMAGE783 > .ladi-image > .ladi-image-background,
        #IMAGE784 > .ladi-image > .ladi-image-background,
        #IMAGE785 > .ladi-image > .ladi-image-background,
        #IMAGE798 > .ladi-image > .ladi-image-background,
        #IMAGE805 > .ladi-image > .ladi-image-background,
        #IMAGE806 > .ladi-image > .ladi-image-background,
        #IMAGE807 > .ladi-image > .ladi-image-background,
        #IMAGE808 > .ladi-image > .ladi-image-background,
        #IMAGE742 > .ladi-image > .ladi-image-background,
        #IMAGE743 > .ladi-image > .ladi-image-background,
        #IMAGE744 > .ladi-image > .ladi-image-background,
        #IMAGE745 > .ladi-image > .ladi-image-background,
        #IMAGE746 > .ladi-image > .ladi-image-background,
        #IMAGE747 > .ladi-image > .ladi-image-background,
        #IMAGE748 > .ladi-image > .ladi-image-background,
        #IMAGE749 > .ladi-image > .ladi-image-background,
        #IMAGE750 > .ladi-image > .ladi-image-background,
        #IMAGE751 > .ladi-image > .ladi-image-background,
        #BOX528,
        #HEADLINE846,
        #BOX529,
        #HEADLINE850 {
          top: 0px;
          left: 0px;
        }
        #HEADLINE20 > .ladi-headline {
          font-family: VVRNIEFbJvbGQudHRm;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
        }
        #HEADLINE20.ladi-animation > .ladi-headline {
          animation-name: bounceInLeft;
          animation-delay: 0s;
          animation-duration: 1s;
          animation-iteration-count: 1;
        }
        #HEADLINE20 > .ladi-headline:hover,
        #BOX523 > .ladi-box:hover,
        #BOX527 > .ladi-box:hover,
        #BOX526 > .ladi-box:hover,
        #CAROUSEL_ITEM466 > .ladi-frame:hover,
        #CAROUSEL_ITEM466 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM465 > .ladi-frame:hover,
        #CAROUSEL_ITEM465 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM467 > .ladi-frame:hover,
        #CAROUSEL_ITEM467 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM468 > .ladi-frame:hover,
        #CAROUSEL_ITEM468 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM507 > .ladi-frame:hover,
        #CAROUSEL_ITEM507 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM508 > .ladi-frame:hover,
        #CAROUSEL_ITEM508 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM509 > .ladi-frame:hover,
        #CAROUSEL_ITEM509 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM448 > .ladi-frame:hover,
        #CAROUSEL_ITEM448 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM449 > .ladi-frame:hover,
        #CAROUSEL_ITEM449 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM450 > .ladi-frame:hover,
        #CAROUSEL_ITEM450 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM451 > .ladi-frame:hover,
        #CAROUSEL_ITEM451 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM452 > .ladi-frame:hover,
        #CAROUSEL_ITEM452 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM457 > .ladi-frame:hover,
        #CAROUSEL_ITEM457 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM458 > .ladi-frame:hover,
        #CAROUSEL_ITEM458 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM459 > .ladi-frame:hover,
        #CAROUSEL_ITEM459 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM460 > .ladi-frame:hover,
        #CAROUSEL_ITEM460 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM461 > .ladi-frame:hover,
        #CAROUSEL_ITEM461 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM464 > .ladi-frame:hover,
        #CAROUSEL_ITEM464 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM530 > .ladi-frame:hover,
        #CAROUSEL_ITEM530 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM531 > .ladi-frame:hover,
        #CAROUSEL_ITEM531 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM532 > .ladi-frame:hover,
        #CAROUSEL_ITEM532 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM533 > .ladi-frame:hover,
        #CAROUSEL_ITEM533 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM534 > .ladi-frame:hover,
        #CAROUSEL_ITEM534 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM535 > .ladi-frame:hover,
        #CAROUSEL_ITEM535 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM536 > .ladi-frame:hover,
        #CAROUSEL_ITEM536 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM537 > .ladi-frame:hover,
        #CAROUSEL_ITEM537 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM538 > .ladi-frame:hover,
        #CAROUSEL_ITEM538 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM539 > .ladi-frame:hover,
        #CAROUSEL_ITEM539 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM540 > .ladi-frame:hover,
        #CAROUSEL_ITEM540 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM541 > .ladi-frame:hover,
        #CAROUSEL_ITEM541 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM542 > .ladi-frame:hover,
        #CAROUSEL_ITEM542 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM463 > .ladi-frame:hover,
        #CAROUSEL_ITEM463 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM470 > .ladi-frame:hover,
        #CAROUSEL_ITEM470 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM471 > .ladi-frame:hover,
        #CAROUSEL_ITEM471 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM472 > .ladi-frame:hover,
        #CAROUSEL_ITEM472 > .ladi-frame:hover ~ .ladi-frame-bg,
        #CAROUSEL_ITEM473 > .ladi-frame:hover,
        #CAROUSEL_ITEM473 > .ladi-frame:hover ~ .ladi-frame-bg,
        #BOX528 > .ladi-box:hover,
        #BOX529 > .ladi-box:hover {
          opacity: 1;
        }
        #SECTION405 > .ladi-section-background,
        #BOX523 > .ladi-box,
        #BOX527 > .ladi-box,
        #BOX526 > .ladi-box,
        #address > .ladi-section-background,
        #SECTION406 > .ladi-section-background,
        #SECTION408 > .ladi-section-background,
        #SECTION407 > .ladi-section-background {
          background-color: rgb(255, 255, 255);
        }
        #GROUP536 {
          top: 15.607px;
        }
        #GROUP535,
        #BOX523,
        #GROUP541,
        #BOX527,
        #GROUP545,
        #BOX526 {
          width: 166px;
          height: 166px;
        }
        #BOX523 > .ladi-box,
        #BOX527 > .ladi-box,
        #BOX526 > .ladi-box {
          border-width: 4px;
          border-radius: 100px;
          border-style: solid;
          border-color: rgb(237, 28, 36);
        }
        #IMAGE725,
        #IMAGE725 > .ladi-image > .ladi-image-background {
          width: 80px;
          height: 85px;
        }
        #IMAGE725 {
          top: 40.5px;
          left: 43px;
        }
        #IMAGE725 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_stores-20230812042629-_kwis.png");
        }
        #HEADLINE837 > .ladi-headline,
        #HEADLINE841 > .ladi-headline,
        #HEADLINE862 > .ladi-headline,
        #HEADLINE873 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(236, 28, 36);
          text-align: center;
        }
        #HEADLINE838,
        #HEADLINE842,
        #HEADLINE840 {
          left: 0px;
        }
        #HEADLINE838 > .ladi-headline,
        #HEADLINE842 > .ladi-headline,
        #HEADLINE840 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(0, 0, 0);
          text-align: center;
        }
        #IMAGE730,
        #IMAGE730 > .ladi-image > .ladi-image-background {
          width: 80px;
          height: 72px;
        }
        #IMAGE730 {
          top: 48px;
          left: 43.5px;
        }
        #IMAGE730 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_open-20230812042629-jw-om.png");
        }
        #GROUP546,
        #HEADLINE840 {
          width: 267px;
        }
        #HEADLINE839 {
          width: 176px;
          left: 45.5px;
        }
        #HEADLINE839 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(236, 28, 36);
        }
        #GROUP545 {
          top: 0px;
          left: 50.5px;
        }
        #IMAGE731,
        #IMAGE731 > .ladi-image > .ladi-image-background {
          width: 80px;
          height: 70px;
        }
        #IMAGE731 {
          top: 48px;
          left: 43px;
        }
        #IMAGE731 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_like-20230812042629-rcgxv.png");
        }
        #CAROUSEL447,
        #CAROUSEL462 {
          height: 250px;
        }
        #CAROUSEL447 .ladi-carousel .ladi-carousel-arrow,
        #CAROUSEL462 .ladi-carousel .ladi-carousel-arrow {
          background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23EC1C24%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        #CAROUSEL447 .ladi-carousel .ladi-carousel-content,
        #CAROUSEL462 .ladi-carousel .ladi-carousel-content {
          width: 7280px;
        }
        #CAROUSEL_ITEM466,
        #CAROUSEL_ITEM465,
        #CAROUSEL_ITEM467,
        #CAROUSEL_ITEM468,
        #CAROUSEL_ITEM507,
        #CAROUSEL_ITEM508,
        #CAROUSEL_ITEM509,
        #CAROUSEL_ITEM448,
        #CAROUSEL_ITEM449,
        #CAROUSEL_ITEM450,
        #CAROUSEL_ITEM451,
        #CAROUSEL_ITEM452,
        #CAROUSEL_ITEM457,
        #CAROUSEL_ITEM458,
        #CAROUSEL_ITEM459,
        #CAROUSEL_ITEM460,
        #CAROUSEL_ITEM461,
        #CAROUSEL_ITEM464,
        #CAROUSEL_ITEM530,
        #CAROUSEL_ITEM531,
        #CAROUSEL_ITEM532,
        #CAROUSEL_ITEM533,
        #CAROUSEL_ITEM534,
        #CAROUSEL_ITEM535,
        #CAROUSEL_ITEM536,
        #CAROUSEL_ITEM537,
        #CAROUSEL_ITEM538,
        #CAROUSEL_ITEM539,
        #CAROUSEL_ITEM540,
        #CAROUSEL_ITEM541,
        #CAROUSEL_ITEM542,
        #CAROUSEL_ITEM463,
        #CAROUSEL_ITEM470,
        #CAROUSEL_ITEM471,
        #CAROUSEL_ITEM472,
        #CAROUSEL_ITEM473 {
          width: 395px;
          height: 250px;
        }
        #CAROUSEL_ITEM466 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM465 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM467 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM468 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM507 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM508 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM509 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM448 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM449 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM450 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM451 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM452 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM457 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM458 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM459 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM460 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM461 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM464 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM530 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM531 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM532 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM533 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM534 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM535 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM536 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM537 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM538 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM539 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM540 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM541 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM542 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM463 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM470 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM471 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM472 > .ladi-frame-bg > .ladi-frame-background,
        #CAROUSEL_ITEM473 > .ladi-frame-bg > .ladi-frame-background {
          background-color: rgba(244, 244, 244, 0);
        }
        #IMAGE801,
        #IMAGE801 > .ladi-image > .ladi-image-background,
        #IMAGE800,
        #IMAGE800 > .ladi-image > .ladi-image-background,
        #IMAGE802,
        #IMAGE802 > .ladi-image > .ladi-image-background,
        #IMAGE803,
        #IMAGE803 > .ladi-image > .ladi-image-background,
        #IMAGE761,
        #IMAGE761 > .ladi-image > .ladi-image-background,
        #IMAGE760,
        #IMAGE760 > .ladi-image > .ladi-image-background,
        #IMAGE762,
        #IMAGE762 > .ladi-image > .ladi-image-background,
        #IMAGE763,
        #IMAGE763 > .ladi-image > .ladi-image-background,
        #IMAGE764,
        #IMAGE764 > .ladi-image > .ladi-image-background,
        #IMAGE765,
        #IMAGE765 > .ladi-image > .ladi-image-background,
        #IMAGE766,
        #IMAGE766 > .ladi-image > .ladi-image-background,
        #IMAGE767,
        #IMAGE767 > .ladi-image > .ladi-image-background,
        #IMAGE768,
        #IMAGE768 > .ladi-image > .ladi-image-background,
        #IMAGE769,
        #IMAGE769 > .ladi-image > .ladi-image-background,
        #IMAGE770,
        #IMAGE770 > .ladi-image > .ladi-image-background,
        #IMAGE771,
        #IMAGE771 > .ladi-image > .ladi-image-background,
        #IMAGE772,
        #IMAGE772 > .ladi-image > .ladi-image-background,
        #IMAGE799,
        #IMAGE799 > .ladi-image > .ladi-image-background,
        #IMAGE773,
        #IMAGE773 > .ladi-image > .ladi-image-background,
        #IMAGE774,
        #IMAGE774 > .ladi-image > .ladi-image-background,
        #IMAGE775,
        #IMAGE775 > .ladi-image > .ladi-image-background,
        #IMAGE776,
        #IMAGE776 > .ladi-image > .ladi-image-background,
        #IMAGE777,
        #IMAGE777 > .ladi-image > .ladi-image-background,
        #IMAGE778,
        #IMAGE778 > .ladi-image > .ladi-image-background,
        #IMAGE779,
        #IMAGE779 > .ladi-image > .ladi-image-background,
        #IMAGE780,
        #IMAGE780 > .ladi-image > .ladi-image-background,
        #IMAGE781,
        #IMAGE781 > .ladi-image > .ladi-image-background,
        #IMAGE782,
        #IMAGE782 > .ladi-image > .ladi-image-background,
        #IMAGE783,
        #IMAGE783 > .ladi-image > .ladi-image-background,
        #IMAGE784,
        #IMAGE784 > .ladi-image > .ladi-image-background,
        #IMAGE785,
        #IMAGE785 > .ladi-image > .ladi-image-background,
        #IMAGE798,
        #IMAGE798 > .ladi-image > .ladi-image-background,
        #IMAGE805,
        #IMAGE805 > .ladi-image > .ladi-image-background,
        #IMAGE806,
        #IMAGE806 > .ladi-image > .ladi-image-background,
        #IMAGE807,
        #IMAGE807 > .ladi-image > .ladi-image-background,
        #IMAGE808,
        #IMAGE808 > .ladi-image > .ladi-image-background {
          width: 392.5px;
          height: 223.576px;
        }
        #IMAGE801,
        #IMAGE800,
        #IMAGE802,
        #IMAGE803,
        #IMAGE761,
        #IMAGE760,
        #IMAGE762,
        #IMAGE763,
        #IMAGE764,
        #IMAGE765,
        #IMAGE766,
        #IMAGE767,
        #IMAGE768,
        #IMAGE769,
        #IMAGE770,
        #IMAGE771,
        #IMAGE772,
        #IMAGE799,
        #IMAGE773,
        #IMAGE774,
        #IMAGE775,
        #IMAGE776,
        #IMAGE777,
        #IMAGE778,
        #IMAGE779,
        #IMAGE780,
        #IMAGE781,
        #IMAGE782,
        #IMAGE783,
        #IMAGE784,
        #IMAGE785,
        #IMAGE798,
        #IMAGE805,
        #IMAGE806,
        #IMAGE807,
        #IMAGE808 {
          top: 13.212px;
          left: 2.5px;
        }
        #IMAGE801 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/2-20240226031051-orjtj.jpg");
        }
        #CAROUSEL_ITEM465,
        #CAROUSEL_ITEM531 {
          top: 0px;
          left: 405px;
        }
        #IMAGE800 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/1-20240226030944-3awk1.jpg");
        }
        #CAROUSEL_ITEM467,
        #CAROUSEL_ITEM532 {
          top: 0px;
          left: 810px;
        }
        #IMAGE802 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/3-20240226031101-9p-be.jpg");
        }
        #CAROUSEL_ITEM468,
        #CAROUSEL_ITEM533 {
          top: 0px;
          left: 1215px;
        }
        #IMAGE803 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/4-20240226031234-6uvet.jpg");
        }
        #CAROUSEL_ITEM507,
        #CAROUSEL_ITEM534 {
          top: 0px;
          left: 1620px;
        }
        #IMAGE761 > .ladi-image > .ladi-image-background,
        #IMAGE799 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/rectangle-34-20230814080511-v4jz5.png");
        }
        #CAROUSEL_ITEM508,
        #CAROUSEL_ITEM535 {
          top: 0px;
          left: 2025px;
        }
        #IMAGE760 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/rectangle-35-20230814080557-k_ha7.png");
        }
        #CAROUSEL_ITEM509,
        #CAROUSEL_ITEM536 {
          top: 0px;
          left: 2430px;
        }
        #IMAGE762 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/rectangle-36-20230814080609-cxap9.png");
        }
        #CAROUSEL_ITEM448,
        #CAROUSEL_ITEM537 {
          top: 0px;
          left: 2835px;
        }
        #IMAGE763 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/4-20230814084229-y9izl.jpg");
        }
        #CAROUSEL_ITEM449,
        #CAROUSEL_ITEM538 {
          top: 0px;
          left: 3240px;
        }
        #IMAGE764 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/6-20230814084458-azanr.jpg");
        }
        #CAROUSEL_ITEM450,
        #CAROUSEL_ITEM539 {
          top: 0px;
          left: 3645px;
        }
        #IMAGE765 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/7-20230814084536-xyvrm.jpg");
        }
        #CAROUSEL_ITEM451,
        #CAROUSEL_ITEM540 {
          top: 0px;
          left: 4050px;
        }
        #IMAGE766 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/9-20230814084604-yw2jp.jpg");
        }
        #CAROUSEL_ITEM452,
        #CAROUSEL_ITEM541 {
          top: 0px;
          left: 4455px;
        }
        #IMAGE767 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/10-20230814084645-nnczu.jpg");
        }
        #CAROUSEL_ITEM457,
        #CAROUSEL_ITEM542 {
          top: 0px;
          left: 4860px;
        }
        #IMAGE768 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/11-20230814084707-kt5pu.jpg");
        }
        #CAROUSEL_ITEM458,
        #CAROUSEL_ITEM463 {
          top: 0px;
          left: 5265px;
        }
        #IMAGE769 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/12-20230814084725-2rocp.jpg");
        }
        #CAROUSEL_ITEM459,
        #CAROUSEL_ITEM470 {
          top: 0px;
          left: 5670px;
        }
        #IMAGE770 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/13-20230814084748-mes-3.jpg");
        }
        #CAROUSEL_ITEM460,
        #CAROUSEL_ITEM471 {
          top: 0px;
          left: 6075px;
        }
        #IMAGE771 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/14-20230814084804-cnc1y.jpg");
        }
        #CAROUSEL_ITEM461,
        #CAROUSEL_ITEM472 {
          top: 0px;
          left: 6480px;
        }
        #IMAGE772 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/15-20230814084823-idz9m.jpg");
        }
        #CAROUSEL_ITEM464,
        #CAROUSEL_ITEM473 {
          top: 0px;
          left: 6885px;
        }
        #IMAGE773 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/1-20240226025153-ohnar.jpg");
        }
        #IMAGE774 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/2-20240226025213-grz61.jpg");
        }
        #IMAGE775 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/3-20240226025230-h_bqy.jpg");
        }
        #IMAGE776 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/4-20240226025255-unlyd.jpg");
        }
        #IMAGE777 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/5-20240226025311-smgq5.jpg");
        }
        #IMAGE778 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/6-20240226025334-um8vs.jpg");
        }
        #IMAGE779 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/7-20240226025350-hgcjp.jpg");
        }
        #IMAGE780 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/8-20240226025406-kro_l.jpg");
        }
        #IMAGE781 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/9-20240226025419-m_md-.jpg");
        }
        #IMAGE782 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/10-20240226025516--viki.jpg");
        }
        #IMAGE783 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/11-20240226025527-ixxom.jpg");
        }
        #IMAGE784 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/12-20240226025558-qgz6b.jpg");
        }
        #IMAGE785 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/13-20240226025608-gxgmh.jpg");
        }
        #IMAGE798 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/14-20240226025715-vm_jj.jpg");
        }
        #IMAGE805 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/15-20240226032741-xvltb.jpg");
        }
        #IMAGE806 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/16-20240226032801-c_v2u.jpg");
        }
        #IMAGE807 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/17-20240226032832-2isee.jpg");
        }
        #IMAGE808 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s700x550/5d3c13acdc09063fd1918045/18-20240226032846-dvoql.jpg");
        }
        #GROUP564,
        #GROUP565,
        #GROUP567,
        #GROUP568,
        #GROUP570 {
          width: 153px;
          height: 109.307px;
        }
        #IMAGE742,
        #IMAGE742 > .ladi-image > .ladi-image-background,
        #IMAGE743,
        #IMAGE743 > .ladi-image > .ladi-image-background,
        #IMAGE744,
        #IMAGE744 > .ladi-image > .ladi-image-background,
        #IMAGE745,
        #IMAGE745 > .ladi-image > .ladi-image-background,
        #IMAGE746,
        #IMAGE746 > .ladi-image > .ladi-image-background,
        #IMAGE747,
        #IMAGE747 > .ladi-image > .ladi-image-background,
        #IMAGE748,
        #IMAGE748 > .ladi-image > .ladi-image-background,
        #IMAGE749,
        #IMAGE749 > .ladi-image > .ladi-image-background,
        #IMAGE750,
        #IMAGE750 > .ladi-image > .ladi-image-background,
        #IMAGE751,
        #IMAGE751 > .ladi-image > .ladi-image-background {
          width: 80px;
          height: 80px;
        }
        #IMAGE742,
        #IMAGE743,
        #IMAGE745,
        #IMAGE746,
        #IMAGE747,
        #IMAGE748 {
          top: 0px;
          left: 36.5px;
        }
        #IMAGE742 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_bike-20230812044402-rblyb.png");
        }
        #HEADLINE863,
        #HEADLINE864,
        #HEADLINE866,
        #HEADLINE867,
        #HEADLINE869 {
          width: 153px;
        }
        #HEADLINE863,
        #HEADLINE864,
        #HEADLINE865,
        #HEADLINE866,
        #HEADLINE867,
        #HEADLINE868,
        #HEADLINE869,
        #HEADLINE870,
        #HEADLINE871,
        #HEADLINE872 {
          top: 83.307px;
          left: 0px;
        }
        #HEADLINE863 > .ladi-headline,
        #HEADLINE864 > .ladi-headline,
        #HEADLINE865 > .ladi-headline,
        #HEADLINE866 > .ladi-headline,
        #HEADLINE867 > .ladi-headline,
        #HEADLINE868 > .ladi-headline,
        #HEADLINE869 > .ladi-headline,
        #HEADLINE870 > .ladi-headline,
        #HEADLINE871 > .ladi-headline,
        #HEADLINE872 > .ladi-headline {
          font-size: 16px;
          line-height: 1.6;
          color: rgb(0, 0, 0);
          text-align: center;
        }
        #IMAGE743 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_wifi-20230812044544-mud9o.png");
        }
        #GROUP566,
        #GROUP571 {
          width: 241px;
          height: 109.307px;
        }
        #IMAGE744,
        #IMAGE749 {
          top: 0px;
          left: 80.5px;
        }
        #IMAGE744 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_laptop-20230812044553-px5-x.png");
        }
        #HEADLINE865,
        #HEADLINE870 {
          width: 241px;
        }
        #IMAGE745 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_chat-20230812044609-siw_v.png");
        }
        #IMAGE746 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_money-20230812044617-qpnmk.png");
        }
        #GROUP569 {
          width: 171px;
          height: 109.307px;
        }
        #IMAGE747 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_sercurity-20230812044828-8y4xd.png");
        }
        #HEADLINE868 {
          width: 171px;
        }
        #IMAGE748 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_order-20230812044838-xat-h.png");
        }
        #IMAGE749 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_truck-20230812045522-ubg3i.png");
        }
        #GROUP572 {
          width: 207px;
          height: 109.307px;
        }
        #IMAGE750 {
          top: 0px;
          left: 57.5px;
        }
        #IMAGE750 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_setup-20230812045535-hfpxc.png");
        }
        #HEADLINE871 {
          width: 207px;
        }
        #GROUP573 {
          width: 225px;
          height: 109.307px;
        }
        #IMAGE751 {
          top: 0px;
          left: 72.5px;
        }
        #IMAGE751 > .ladi-image > .ladi-image-background {
          background-image: url("https://w.ladicdn.com/s400x400/5d3c13acdc09063fd1918045/icon_pc-20230812045550-anecu.png");
        }
        #HEADLINE872 {
          width: 225px;
        }
        #GROUP547,
        #BOX528,
        #GROUP550,
        #BOX529 {
          width: 592px;
          height: 246px;
        }
        #BOX528 > .ladi-box,
        #BOX529 > .ladi-box {
          border-width: 1px;
          border-radius: 10px;
          border-style: solid;
          border-color: rgb(236, 28, 36);
          background-color: rgb(236, 28, 36);
        }
        #GROUP574 {
          height: 87.712px;
        }
        #SHAPE668 {
          height: 21px;
          top: 32.98px;
          left: 0px;
        }
        #SHAPE668 svg:last-child,
        #SHAPE669 svg:last-child,
        #SHAPE670 svg:last-child,
        #SHAPE671 svg:last-child,
        #SHAPE672 svg:last-child {
          fill: rgb(255, 255, 255);
        }
        #SHAPE669 {
          height: 23.732px;
          top: 63.98px;
        }
        #SHAPE670 {
          height: 31.8267px;
        }
        #HEADLINE843 {
          top: 4.33px;
        }
        #HEADLINE843 > .ladi-headline,
        #HEADLINE844 > .ladi-headline,
        #HEADLINE845 > .ladi-headline,
        #HEADLINE848 > .ladi-headline,
        #HEADLINE849 > .ladi-headline {
          font-size: 14px;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: left;
        }
        #HEADLINE844 {
          top: 33.48px;
        }
        #HEADLINE845 {
          top: 62.48px;
        }
        #HEADLINE846 > .ladi-headline,
        #HEADLINE850 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: center;
        }
        #HEADLINE847 {
          top: 40.02px;
          left: 0px;
        }
        #HEADLINE847 > .ladi-headline,
        #HEADLINE851 > .ladi-headline {
          font-size: 16px;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: center;
        }
        #SHAPE671 {
          width: 21px;
          height: 21px;
        }
        #SHAPE672 {
          width: 17.623px;
          height: 23.732px;
        }
        #HEADLINE848,
        #HEADLINE849 {
          width: 352px;
        }
        #HEADLINE851 {
          width: 403px;
        }
        @media (min-width: 768px) {
          #Header {
            height: 640.805px;
          }
          #IMAGE724,
          #IMAGE724 > .ladi-image > .ladi-image-background {
            width: 2178.74px;
            height: 640.805px;
          }
          #IMAGE724 {
            left: -491.05px;
          }
          #IMAGE724 > .ladi-image > .ladi-image-background {
            background-image: url("https://w.ladicdn.com/s2500x950/5d3c13acdc09063fd1918045/img_header-20230812041834-zlvu9.png");
          }
          #HEADLINE20 {
            width: 939px;
            top: 418.447px;
            left: 128.82px;
          }
          #HEADLINE20 > .ladi-headline {
            font-size: 60px;
            text-align: center;
          }
          #SECTION405 {
            height: 309.6px;
          }
          #GROUP536 {
            width: 267px;
            height: 256.5px;
            left: 0px;
          }
          #GROUP535 {
            left: 50.5px;
          }
          #HEADLINE837 {
            width: 46px;
            top: 168.75px;
            left: 110.5px;
          }
          #HEADLINE837 > .ladi-headline,
          #HEADLINE841 > .ladi-headline,
          #HEADLINE839 > .ladi-headline,
          #HEADLINE862 > .ladi-headline,
          #HEADLINE873 > .ladi-headline,
          #HEADLINE846 > .ladi-headline,
          #HEADLINE850 > .ladi-headline {
            font-size: 32px;
          }
          #HEADLINE838 {
            width: 267px;
            top: 222.5px;
          }
          #HEADLINE838 > .ladi-headline,
          #HEADLINE842 > .ladi-headline,
          #HEADLINE840 > .ladi-headline {
            font-size: 21px;
          }
          #GROUP542 {
            width: 420px;
            height: 292.307px;
            top: 15.607px;
            left: 780px;
          }
          #HEADLINE841 {
            width: 167px;
            top: 168.807px;
            left: 126.5px;
          }
          #HEADLINE842 {
            width: 420px;
            top: 225.307px;
          }
          #GROUP541 {
            left: 127px;
          }
          #GROUP546 {
            height: 262px;
            top: 15.607px;
            left: 438.5px;
          }
          #HEADLINE839 {
            top: 175px;
          }
          #HEADLINE840 {
            top: 228px;
          }
          #address {
            height: 10.6px;
          }
          #SECTION406 {
            height: 634.6px;
          }
          #HEADLINE862,
          #HEADLINE873 {
            width: 785px;
          }
          #HEADLINE862 {
            top: 19.307px;
            left: 210px;
          }
          #CAROUSEL447,
          #CAROUSEL462 {
            width: 1205px;
          }
          #CAROUSEL447 {
            top: 91.807px;
            left: 0px;
          }
          #CAROUSEL462 {
            top: 359.807px;
            left: 0px;
          }
          #SECTION408 {
            height: 401.6px;
          }
          #GROUP564 {
            top: 107px;
            left: 0px;
          }
          #GROUP565 {
            top: 107px;
            left: 239.75px;
          }
          #GROUP566 {
            top: 107px;
            left: 479.5px;
          }
          #GROUP567 {
            top: 107px;
            left: 808.25px;
          }
          #GROUP568 {
            top: 107px;
            left: 1045px;
          }
          #GROUP569 {
            top: 253px;
            left: 0px;
          }
          #GROUP570 {
            top: 253px;
            left: 239.75px;
          }
          #GROUP571 {
            top: 253px;
            left: 479.5px;
          }
          #GROUP572 {
            top: 253.003px;
            left: 781.25px;
          }
          #GROUP573 {
            top: 253.003px;
            left: 1009px;
          }
          #HEADLINE873 {
            top: 15.307px;
            left: 207.5px;
          }
          #SECTION407 {
            height: 331.6px;
          }
          #GROUP547 {
            top: 35px;
            left: -8px;
          }
          #GROUP547.ladi-animation > .ladi-group {
            animation-name: fadeInUp;
            animation-delay: 0s;
            animation-duration: 1s;
            animation-iteration-count: 1;
          }
          #GROUP548 {
            width: 505px;
            height: 149.232px;
            top: 47.384px;
            left: 31.5px;
          }
          #GROUP574 {
            width: 473.677px;
            top: 61.52px;
            left: 30.0694px;
          }
          #SHAPE668 {
            width: 26.3152px;
          }
          #SHAPE669,
          #SHAPE670 {
            width: 22.0834px;
            left: 2.5062px;
          }
          #HEADLINE843,
          #HEADLINE844,
          #HEADLINE845 {
            width: 441px;
            left: 32.5856px;
          }
          #HEADLINE846,
          #HEADLINE847 {
            width: 505px;
          }
          #GROUP550 {
            top: 34px;
            left: 630px;
          }
          #GROUP551 {
            width: 509px;
            height: 153.232px;
            top: 48.384px;
            left: 40.5px;
          }
          #SHAPE671 {
            top: 98.5px;
            left: 130.996px;
          }
          #SHAPE672 {
            top: 129.5px;
            left: 132.996px;
          }
          #HEADLINE848 {
            top: 99px;
            left: 157px;
          }
          #HEADLINE849 {
            top: 128px;
            left: 157px;
          }
          #HEADLINE850 {
            width: 509px;
          }
          #HEADLINE851 {
            top: 62.02px;
            left: 54px;
          }
        }
        @media (max-width: 767px) {
          #Header {
            height: 123.529px;
          }
          #IMAGE724,
          #IMAGE724 > .ladi-image > .ladi-image-background {
            width: 420px;
            height: 123.529px;
          }
          #IMAGE724 {
            left: 0px;
          }
          #IMAGE724 > .ladi-image > .ladi-image-background {
            background-image: url("https://w.ladicdn.com/s750x450/5d3c13acdc09063fd1918045/img_header-20230812041834-zlvu9.png");
          }
          #HEADLINE20 {
            width: 236px;
            top: 80.647px;
            left: 120px;
          }
          #HEADLINE20 > .ladi-headline {
            font-size: 15px;
            text-align: left;
          }
          #SECTION405 {
            height: 871.08px;
          }
          #GROUP536 {
            width: 261px;
            height: 226px;
            left: 70px;
          }
          #GROUP535 {
            left: 47.5px;
          }
          #HEADLINE837,
          #HEADLINE841 {
            width: 200px;
          }
          #HEADLINE837 {
            top: 168px;
            left: 33px;
          }
          #HEADLINE837 > .ladi-headline,
          #HEADLINE838 > .ladi-headline,
          #HEADLINE841 > .ladi-headline,
          #HEADLINE842 > .ladi-headline,
          #HEADLINE840 > .ladi-headline {
            font-size: 18px;
          }
          #HEADLINE838 {
            width: 261px;
            top: 197px;
          }
          #GROUP542 {
            width: 386px;
            height: 267px;
            top: 284.607px;
            left: 17px;
          }
          #HEADLINE841 {
            top: 176px;
            left: 93px;
          }
          #HEADLINE842 {
            width: 386px;
            top: 209px;
          }
          #GROUP541 {
            left: 110px;
          }
          #GROUP546 {
            height: 245.693px;
            top: 594.607px;
            left: 76.5px;
          }
          #HEADLINE839 {
            top: 179px;
          }
          #HEADLINE839 > .ladi-headline {
            font-size: 18px;
            text-align: center;
          }
          #HEADLINE840 {
            top: 216.693px;
          }
          #address {
            height: 116.06px;
          }
          #SECTION406 {
            height: 619.06px;
          }
          #HEADLINE862 {
            width: 441px;
            top: 28px;
            left: -16px;
          }
          #HEADLINE862 > .ladi-headline,
          #HEADLINE873 > .ladi-headline {
            font-size: 16px;
          }
          #CAROUSEL447,
          #CAROUSEL462 {
            width: 420px;
          }
          #CAROUSEL447 {
            top: 73px;
            left: 15px;
          }
          #CAROUSEL462 {
            top: 332px;
            left: 15px;
          }
          #SECTION408 {
            height: 781.13px;
          }
          #GROUP564 {
            top: 79px;
            left: 37.75px;
          }
          #GROUP565 {
            top: 630.763px;
            left: 240.5px;
          }
          #GROUP566 {
            top: 630.763px;
            left: -6.25px;
          }
          #GROUP567 {
            top: 492.822px;
            left: 240.5px;
          }
          #GROUP568 {
            top: 492.822px;
            left: 37.75px;
          }
          #GROUP569 {
            top: 79px;
            left: 231.5px;
          }
          #GROUP570 {
            top: 354.882px;
            left: 240.5px;
          }
          #GROUP571 {
            top: 354.882px;
            left: -6.25px;
          }
          #GROUP572 {
            top: 216.941px;
            left: 10.75px;
          }
          #GROUP573 {
            top: 216.941px;
            left: 204.5px;
          }
          #HEADLINE873 {
            width: 522px;
            top: 16px;
            left: -61px;
          }
          #SECTION407 {
            height: 531px;
          }
          #GROUP547 {
            top: 10px;
            left: -86px;
          }
          #GROUP548 {
            width: 403px;
            height: 189.232px;
          }
          #GROUP548,
          #GROUP551 {
            top: 22.384px;
            left: 94.5px;
          }
          #GROUP574 {
            width: 378.004px;
            top: 51.52px;
            left: 23.996px;
          }
          #SHAPE668 {
            width: 21px;
          }
          #SHAPE669,
          #SHAPE670 {
            width: 17.623px;
            left: 2px;
          }
          #HEADLINE843,
          #HEADLINE844,
          #HEADLINE845 {
            width: 352px;
            left: 26.004px;
          }
          #HEADLINE846,
          #HEADLINE847,
          #HEADLINE850 {
            width: 403px;
          }
          #HEADLINE846 > .ladi-headline,
          #HEADLINE850 > .ladi-headline {
            font-size: 24px;
          }
          #GROUP550 {
            top: 266px;
            left: -86px;
          }
          #GROUP551 {
            width: 455px;
            height: 136.232px;
          }
          #SHAPE671 {
            top: 81.5px;
            left: 76.996px;
          }
          #SHAPE672 {
            top: 112.5px;
            left: 78.996px;
          }
          #HEADLINE848 {
            top: 82px;
            left: 103px;
          }
          #HEADLINE849 {
            top: 111px;
            left: 103px;
          }
          #HEADLINE851 {
            top: 45.02px;
            left: 0px;
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
        .box-info:hover .ladi-box {
          scale: 1.03;
        }
        .stores-list #CAROUSEL431 .ladi-carousel .ladi-carousel-arrow {
          background-color: #00000087;
        }
        #CAROUSEL462 .ladi-carousel .ladi-carousel-arrow,
        #CAROUSEL447 .ladi-carousel .ladi-carousel-arrow {
          background-color: #fff;
          border-radius: 50%;
        }
      </style>
    </head>
    <body class="lazyload">
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
        <symbol id="shape_zPNckGoiPO" viewBox="0 0 24 24">
          <path
            d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
          ></path>
        </symbol>
        <symbol id="shape_eoELqZRGIE" viewBox="0 0 1408 1896.0833">
          <path
            d="M1408 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5T959 1520t-47.5-14.5T856 1485t-49-18q-98-35-175-83-128-79-264.5-215.5T152 904q-48-77-83-175-3-9-18-49t-20.5-55.5T16 577 3.5 519.5 0 467q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"
          ></path>
        </symbol>
      </svg>
      <div class="ladi-wraper">
        <div id="Header" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="IMAGE724" class="ladi-element">
              <div class="ladi-image">
                <div class="ladi-image-background"></div>
              </div>
            </div>
            <div id="HEADLINE20" class="ladi-element">
              <h3 class="ladi-headline ladi-transition">
                HỆ THỐNG SHOWROOM<br />
              </h3>
            </div>
          </div>
        </div>
        <div id="SECTION405" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="GROUP536" class="ladi-element">
              <div class="ladi-group">
                <div id="GROUP535" class="ladi-element">
                  <div class="ladi-group">
                    <div id="BOX523" class="ladi-element">
                      <div class="ladi-box ladi-transition"></div>
                    </div>
                    <div id="IMAGE725" class="ladi-element">
                      <div class="ladi-image">
                        <div class="ladi-image-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE837" class="ladi-element">
                  <p class="ladi-headline">16<br /></p>
                </div>
                <div id="HEADLINE838" class="ladi-element">
                  <h3 class="ladi-headline">Cửa hàng trên toàn quốc<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP542" class="ladi-element">
              <div class="ladi-group">
                <div id="HEADLINE841" class="ladi-element">
                  <p class="ladi-headline">8h - 21h30<br /></p>
                </div>
                <div id="HEADLINE842" class="ladi-element">
                  <h3 class="ladi-headline">
                    Phục vụ hàng ngày<br />Thời gian hoạt động tuỳ từng chi
                    nhánh<br />
                  </h3>
                </div>
                <div id="GROUP541" class="ladi-element">
                  <div class="ladi-group">
                    <div id="BOX527" class="ladi-element">
                      <div class="ladi-box ladi-transition"></div>
                    </div>
                    <div id="IMAGE730" class="ladi-element">
                      <div class="ladi-image">
                        <div class="ladi-image-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP546" class="ladi-element">
              <div class="ladi-group">
                <div id="HEADLINE839" class="ladi-element">
                  <p class="ladi-headline">&gt;1.000.000<br /></p>
                </div>
                <div id="HEADLINE840" class="ladi-element">
                  <h3 class="ladi-headline">Khách hàng đã tin tưởng</h3>
                </div>
                <div id="GROUP545" class="ladi-element">
                  <div class="ladi-group">
                    <div id="BOX526" class="ladi-element">
                      <div class="ladi-box ladi-transition"></div>
                    </div>
                    <div id="IMAGE731" class="ladi-element">
                      <div class="ladi-image">
                        <div class="ladi-image-background"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="address" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container"></div>
        </div>
        <div id="SECTION406" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="HEADLINE862" class="ladi-element">
              <h3 class="ladi-headline">DẠO ONLINE SHOWROOM CỦA HACOM<br /></h3>
            </div>
            <div id="CAROUSEL447" class="ladi-element showroom">
              <div class="ladi-carousel">
                <div class="ladi-carousel-content">
                  <div id="CAROUSEL_ITEM466" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE801" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM465" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE800" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM467" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE802" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM468" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE803" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM507" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE761" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM508" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE760" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM509" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE762" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM448" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE763" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM449" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE764" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM450" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE765" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM451" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE766" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM452" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE767" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM457" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE768" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM458" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE769" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM459" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE770" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM460" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE771" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM461" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE772" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM464" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE799" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="ladi-carousel-arrow ladi-carousel-arrow-left opacity-0"
                ></div>
                <div
                  class="ladi-carousel-arrow ladi-carousel-arrow-right opacity-0"
                ></div>
              </div>
            </div>
            <div id="CAROUSEL462" class="ladi-element showroom">
              <div class="ladi-carousel">
                <div class="ladi-carousel-content">
                  <div id="CAROUSEL_ITEM530" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE773" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM531" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE774" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM532" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE775" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM533" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE776" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM534" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE777" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM535" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE778" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM536" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE779" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM537" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE780" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM538" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE781" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM539" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE782" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM540" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE783" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM541" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE784" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM542" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE785" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM463" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE798" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM470" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE805" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM471" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE806" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM472" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE807" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="CAROUSEL_ITEM473" class="ladi-element">
                    <div class="ladi-frame ladi-frame-bg ladi-transition">
                      <div class="ladi-frame-background"></div>
                      <div id="IMAGE808" class="ladi-element">
                        <div class="ladi-image">
                          <div class="ladi-image-background"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="ladi-carousel-arrow ladi-carousel-arrow-left opacity-0"
                ></div>
                <div
                  class="ladi-carousel-arrow ladi-carousel-arrow-right opacity-0"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div id="SECTION408" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="GROUP564" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE742" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE863" class="ladi-element">
                  <h3 class="ladi-headline">Gửi xe miễn phí<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP565" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE743" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE864" class="ladi-element">
                  <h3 class="ladi-headline">Wifi miễn phí<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP566" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE744" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE865" class="ladi-element">
                  <h3 class="ladi-headline">
                    Trải nghiệm sản phẩm miễn phí<br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP567" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE745" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE866" class="ladi-element">
                  <h3 class="ladi-headline">Tư vấn miễn phí<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP568" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE746" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE867" class="ladi-element">
                  <h3 class="ladi-headline">Thanh toán đa dạng<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP569" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE747" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE868" class="ladi-element">
                  <h3 class="ladi-headline">Sản phẩm chính hãng&nbsp;<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP570" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE748" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE869" class="ladi-element">
                  <h3 class="ladi-headline">Trả góp lãi suất 0%&nbsp;<br /></h3>
                </div>
              </div>
            </div>
            <div id="GROUP571" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE749" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE870" class="ladi-element">
                  <h3 class="ladi-headline">
                    Giao hàng miễn phí Toàn quốc&nbsp;<br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP572" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE750" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE871" class="ladi-element">
                  <h3 class="ladi-headline">
                    Bảo hành tận nơi sử dụng&nbsp;<br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="GROUP573" class="ladi-element">
              <div class="ladi-group">
                <div id="IMAGE751" class="ladi-element">
                  <div class="ladi-image">
                    <div class="ladi-image-background"></div>
                  </div>
                </div>
                <div id="HEADLINE872" class="ladi-element">
                  <h3 class="ladi-headline">
                    Vệ sinh PC/Laptop miễn phí&nbsp;<br />
                  </h3>
                </div>
              </div>
            </div>
            <div id="HEADLINE873" class="ladi-element">
              <h3 class="ladi-headline">
                TẬN TÂM - TRÁCH NHIỆM - SÁNG TẠO - KHÁC BIỆT<br />
              </h3>
            </div>
          </div>
        </div>
        <div id="SECTION407" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="GROUP547" class="ladi-element box-info">
              <div class="ladi-group">
                <div id="BOX528" class="ladi-element">
                  <div class="ladi-box ladi-transition"></div>
                </div>
                <div id="GROUP548" class="ladi-element">
                  <div class="ladi-group">
                    <div id="GROUP574" class="ladi-element">
                      <div class="ladi-group">
                        <div id="SHAPE668" class="ladi-element">
                          <div class="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="none"
                              viewBox="0 0 24 24"
                              class=""
                              fill="#FFFFFF"
                            >
                              <use xlink:href="#shape_zPNckGoiPO"></use>
                            </svg>
                          </div>
                        </div>
                        <div id="SHAPE669" class="ladi-element">
                          <div class="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="none"
                              viewBox="0 0 1408 1896.08"
                              class=""
                              fill="#FFFFFF"
                            >
                              <use xlink:href="#shape_eoELqZRGIE"></use>
                            </svg>
                          </div>
                        </div>
                        <div id="SHAPE670" class="ladi-element">
                          <div class="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="none"
                              viewBox="0 0 1049.8953 1896.0833"
                              class=""
                              fill="#FFFFFF"
                            >
                              <path
                                d="M768 640q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm256 0q0 109-33 179l-364 774q-16 33-47.5 52t-67.5 19-67.5-19-46.5-52L33 819Q0 749 0 640q0-212 150-362t362-150 362 150 150 362z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div id="HEADLINE843" class="ladi-element">
                          <h3 class="ladi-headline">
                            Tầng 3 Tòa nhà Lilama, số 124 Minh Khai, Hai Bà Trưng,
                            Hà Nội.<br />
                          </h3>
                        </div>
                        <div id="HEADLINE844" class="ladi-element">
                          <h3 class="ladi-headline">
                            dichvukhachhang@hacom.vn<br />
                          </h3>
                        </div>
                        <div id="HEADLINE845" class="ladi-element">
                          <h3 class="ladi-headline">
                            1900 1903 (máy lẻ: 0)<br />
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div id="HEADLINE846" class="ladi-element">
                      <h3 class="ladi-headline">CHĂM SÓC KHÁCH HÀNG<br /></h3>
                    </div>
                    <div id="HEADLINE847" class="ladi-element">
                      <h3 class="ladi-headline"></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP550" class="ladi-element">
              <div class="ladi-group">
                <div id="BOX529" class="ladi-element">
                  <div class="ladi-box ladi-transition"></div>
                </div>
                <div id="GROUP551" class="ladi-element">
                  <div class="ladi-group">
                    <div id="SHAPE671" class="ladi-element">
                      <div class="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                          class=""
                          fill="#FFFFFF"
                        >
                          <use xlink:href="#shape_zPNckGoiPO"></use>
                        </svg>
                      </div>
                    </div>
                    <div id="SHAPE672" class="ladi-element">
                      <div class="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 1408 1896.08"
                          class=""
                          fill="#FFFFFF"
                        >
                          <use xlink:href="#shape_eoELqZRGIE"></use>
                        </svg>
                      </div>
                    </div>
                    <div id="HEADLINE848" class="ladi-element">
                      <h3 class="ladi-headline">thuydb@hacom.vn<br /></h3>
                    </div>
                    <div id="HEADLINE849" class="ladi-element">
                      <h3 class="ladi-headline">0983 303 390<br /></h3>
                    </div>
                    <div id="HEADLINE850" class="ladi-element">
                      <h3 class="ladi-headline">
                        LIÊN HỆ HỢP TÁC KINH DOANH<br />
                      </h3>
                    </div>
                    <div id="HEADLINE851" class="ladi-element">
                      <h3 class="ladi-headline">Ms ĐẶNG BÍCH THUỶ<br /></h3>
                    </div>
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
            "body.lazyload .ladi-overlay, body.lazyload .ladi-box, body.lazyload .ladi-button-background, body.lazyload .ladi-collection-item, body.lazyload .ladi-countdown-background, body.lazyload .ladi-form-item-background, body.lazyload .ladi-form-label-container .ladi-form-label-item.image, body.lazyload .ladi-frame-background, body.lazyload .ladi-gallery-view-item, body.lazyload .ladi-gallery-control-item, body.lazyload .ladi-headline, body.lazyload .ladi-image-background, body.lazyload .ladi-image-compare, body.lazyload .ladi-list-paragraph ul li, body.lazyload .ladi-section-background, body.lazyload .ladi-survey-option-background, body.lazyload .ladi-survey-option-image, body.lazyload .ladi-tabs-background, body.lazyload .ladi-video-background, body.lazyload .ladi-banner, body.lazyload .ladi-spin-lucky-screen, body.lazyload .ladi-spin-lucky-start"
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
          document.body.classList.remove("lazyload");
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
        ]><script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1708759205002"></script>
        <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1708759205002"></script><!
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
        @-webkit-keyframes fadeInUp {
          0% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            -webkit-transform: translateY(20px);
            -ms-transform: translateY(20px);
            transform: translateY(20px);
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
        src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1708759205002"
        type="text/javascript"
      ></script>
      <script id="script_event_data" type="application/json">
        {
          "HEADLINE20": { "a": "headline", "F": "bounceInLeft", "C": "0s" },
          "GROUP547": { "a": "group", "E": "fadeInUp", "B": "0s" },
          "CAROUSEL447": {
            "a": "carousel",
            "cN": 2,
            "cG": "type_abab",
            "cM": "10px",
            "cJ": "horizontal",
            "R": true,
            "O": 5,
            "I": "395px"
          },
          "CAROUSEL462": {
            "a": "carousel",
            "cN": 2,
            "cG": "type_abab",
            "cM": "10px",
            "cJ": "horizontal",
            "R": true,
            "O": 5,
            "I": "395px"
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
              "64d7047dc082e500120e4ef4";
            window.LadiPageScript.runtime.publish_platform = "LADIPAGEDNS";
            window.LadiPageScript.runtime.version = "1708759205002";
            window.LadiPageScript.runtime.cdn_url =
              "https://w.ladicdn.com/v2/source/";
            window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["hacom.vn"];
            window.LadiPageScript.runtime.DOMAIN_FREE = [
              "preview.ldp.page",
              "ldp.link",
              "ldp.page",
            ];
            window.LadiPageScript.runtime.bodyFontSize = 12;
            window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045";
            window.LadiPageScript.runtime.time_zone = 7;
            window.LadiPageScript.runtime.currency = "VND";
            window.LadiPageScript.runtime.convert_replace_str = true;
            window.LadiPageScript.runtime.desktop_width = 1200;
            window.LadiPageScript.runtime.mobile_width = 420;
            window.LadiPageScript.runtime.tracking_button_click = true;
            window.LadiPageScript.runtime.publish_time = 1708918804297;
            window.LadiPageScript.runtime.lang = "vi";
            window.LadiPageScript.run(true);
            window.LadiPageScript.runEventScroll();
          };
          run();
        })();
      </script>
    </body>
  </html>
  <!--Publish time: Mon, 26 Feb 2024 03:40:05 GMT--><!--LadiPage build time: Sat, 24 Feb 2024 07:20:05 GMT-->
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
