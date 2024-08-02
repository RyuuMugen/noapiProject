"use client";
import { Roboto } from "next/font/google";
import { TextInput, Button, Group, Textarea } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState, useEffect } from "react";
import style from "./style.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Contact() {
  const [success, setSuccess] = useState("");
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      content: "",
    },

    validate: {
      email: (value) => {
        if (/^\S+@\S+$/.test(value)) {
          return null;
        }
        return "Email không đúng, Mời bạn nhập lại!";
      },
      name: (value) =>
        value && value.trim() ? null : "Họ và tên không được để trống",
      phone: (value) =>
        /^\d{10}$/.test(value.trim()) ? null : "Số điện thoại không hợp lệ",
      content: isNotEmpty("Nội dung không được để trống"),
    },
  });
  const onsubmit = (data: any) => {
    form.reset();
    setSuccess("Đã gửi thông tin Thành Công!");
  };
  const aaa = `<!DOCTYPE html>
  <html lang="vi">
    <head>
      <meta charset="UTF-8" />
      <title>HACOM - Góp Ý Khiếu Nại</title>
      <meta http-equiv="Cache-Control" content="no-cache" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="Expires" content="-1" />
      <meta name="keywords" content="" />
      <meta name="description" content="HACOM - Góp Ý Khiếu Nại" />
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
            widthDevice = 1200;
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
        href="http://preview.ladipage.me/64cb3292cd2bf400124fb6dd"
      />
      <meta
        property="og:url"
        content="http://preview.ladipage.me/64cb3292cd2bf400124fb6dd"
      />
      <meta property="og:title" content="HACOM - Góp Ý Khiếu Nại" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://static.ladipage.net/5d3c13acdc09063fd1918045/chinh-sach-bao-hanh-20230206035016-7qw00.png"
      />
      <meta property="og:description" content="HACOM - Góp Ý Khiếu Nại" />
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
        href="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1690882153727"
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
          #HEADLINE822 {
            opacity: 0 !important;
            pointer-events: none !important;
          }
        }
        @media (max-width: 767px) {
          #HEADLINE20,
          #HEADLINE822 {
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
        #IMAGE519 > .ladi-image > .ladi-image-background,
        #IMAGE724 > .ladi-image > .ladi-image-background,
        #BOX518,
        #SHAPE661,
        #GROUP537,
        #GROUP539,
        #HEADLINE841,
        #GROUP545,
        #HEADLINE842,
        #GROUP553,
        #GROUP552,
        #HEADLINE846,
        #GROUP559,
        #GROUP558 {
          top: 0px;
          left: 0px;
        }
        #HEADLINE20 > .ladi-headline {
          font-family: VVRNIEFbJvbGQudHRm;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
        }
        #HEADLINE20.ladi-animation > .ladi-headline,
        #HEADLINE822.ladi-animation > .ladi-headline {
          animation-name: bounceInLeft;
          animation-delay: 0s;
          animation-duration: 1s;
          animation-iteration-count: 1;
        }
        #HEADLINE20 > .ladi-headline:hover,
        #HEADLINE822 > .ladi-headline:hover,
        #BOX518 > .ladi-box:hover,
        #BOX520 > .ladi-box:hover,
        #BOX522 > .ladi-box:hover,
        #BOX523 > .ladi-box:hover,
        #BOX524 > .ladi-box:hover {
          opacity: 1;
        }
        #Cacbuocbaohanh > .ladi-section-background,
        #SECTION406 > .ladi-section-background,
        #BOX520 > .ladi-box,
        #BOX522 > .ladi-box,
        #BOX523 > .ladi-box,
        #BOX524 > .ladi-box,
        #SECTION408 > .ladi-section-background {
          background-color: rgb(255, 255, 255);
        }
        #HEADLINE822 > .ladi-headline {
          font-family: VVRNIEFbJvbGQudHRm;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(236, 28, 36);
        }
        #HEADLINE823 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(0, 0, 0);
        }
        #BOX518 > .ladi-box,
        #BOX520 > .ladi-box,
        #BOX522 > .ladi-box,
        #BOX523 > .ladi-box,
        #BOX524 > .ladi-box {
          border-width: 1px;
          border-radius: 10px;
          border-style: solid;
          border-color: rgb(236, 28, 36);
        }
        #BOX518 > .ladi-box {
          background-color: rgb(236, 28, 36);
        }
        #HEADLINE824,
        #BUTTON469,
        #HEADLINE834,
        #BUTTON471,
        #GROUP546,
        #HEADLINE840,
        #BUTTON472,
        #BUTTON473 {
          top: 0px;
        }
        #HEADLINE824 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: center;
        }
        #HEADLINE826,
        #HEADLINE827,
        #HEADLINE825 {
          width: 385px;
        }
        #HEADLINE826 {
          top: 0px;
          left: 24.75px;
        }
        #HEADLINE826 > .ladi-headline,
        #HEADLINE827 > .ladi-headline,
        #HEADLINE825 > .ladi-headline {
          font-size: 18px;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: left;
        }
        #SHAPE659 {
          width: 21px;
          height: 21px;
          top: 4px;
          left: 0px;
        }
        #SHAPE659 svg:last-child,
        #SHAPE660 svg:last-child,
        #SHAPE661 svg:last-child {
          fill: rgb(255, 255, 255);
        }
        #GROUP529 {
          width: 409.75px;
          height: 29px;
        }
        #GROUP529,
        #GROUP530 {
          left: 4px;
        }
        #HEADLINE827 {
          top: 0px;
          left: 25.75px;
        }
        #SHAPE660 {
          width: 19.1082px;
          height: 25.732px;
          top: 1.634px;
          left: 0px;
        }
        #GROUP530 {
          width: 410.75px;
          height: 29px;
        }
        #HEADLINE825 {
          top: 0px;
          left: 30.75px;
        }
        #SHAPE661 {
          width: 29px;
          height: 29px;
        }
        #GROUP528 {
          width: 415.75px;
          height: 29px;
        }
        #BOX520,
        #BUTTON_TEXT469,
        #HEADLINE835,
        #GROUP548 {
          left: 0px;
        }
        #BUTTON469 > .ladi-button > .ladi-button-background,
        #BUTTON471 > .ladi-button > .ladi-button-background,
        #BUTTON472 > .ladi-button > .ladi-button-background,
        #BUTTON473 > .ladi-button > .ladi-button-background {
          background-color: rgb(19, 9, 126);
        }
        #BUTTON469 > .ladi-button,
        #BUTTON471 > .ladi-button,
        #BUTTON472 > .ladi-button,
        #BUTTON473 > .ladi-button {
          border-width: 1px;
          border-radius: 5px;
          border-style: solid;
          border-color: rgb(19, 9, 126);
        }
        #BUTTON_TEXT469,
        #BUTTON_TEXT471,
        #BUTTON_TEXT472,
        #BUTTON_TEXT473 {
          width: 110px;
        }
        #BUTTON_TEXT469 > .ladi-headline,
        #BUTTON_TEXT471 > .ladi-headline,
        #BUTTON_TEXT472 > .ladi-headline,
        #BUTTON_TEXT473 > .ladi-headline {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(255, 255, 255);
          text-align: center;
        }
        #HEADLINE834 > .ladi-headline,
        #HEADLINE840 > .ladi-headline,
        #HEADLINE844 > .ladi-headline,
        #HEADLINE848 > .ladi-headline {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.6;
          color: rgb(236, 28, 36);
          text-align: center;
        }
        #HEADLINE835 > .ladi-headline {
          line-height: 1.6;
          color: rgb(0, 0, 0);
          text-align: left;
        }
        #SHAPE668 svg:last-child,
        #SHAPE670 svg:last-child,
        #SHAPE671 svg:last-child,
        #SHAPE678 svg:last-child,
        #SHAPE679 svg:last-child,
        #SHAPE680 svg:last-child {
          fill: rgb(0, 0, 0);
        }
        #BOX522 {
          height: 287px;
          top: 30px;
          left: 0px;
        }
        #BUTTON471,
        #BUTTON472,
        #BUTTON473 {
          height: 60px;
        }
        #BUTTON_TEXT471 {
          top: 9px;
          left: 0px;
        }
        #GROUP546 {
          height: 317px;
        }
        #HEADLINE841 > .ladi-headline,
        #HEADLINE846 > .ladi-headline,
        #HEADLINE847 > .ladi-headline,
        #HEADLINE849 > .ladi-headline {
          font-size: 16px;
          line-height: 1.6;
          color: rgb(0, 0, 0);
          text-align: left;
        }
        #SHAPE678,
        #SHAPE679,
        #SHAPE680 {
          height: 10px;
        }
        #SHAPE678 {
          top: 34px;
        }
        #SHAPE679 {
          top: 58px;
        }
        #SHAPE680 {
          top: 8px;
        }
        #GROUP547 {
          top: 60.5px;
        }
        #HEADLINE842 > .ladi-headline,
        #HEADLINE843 > .ladi-headline {
          font-weight: bold;
          line-height: 1.6;
          color: rgb(0, 0, 0);
          text-align: left;
        }
        #HEADLINE843 {
          top: 75px;
          left: 0px;
        }
        #GROUP549 {
          height: 126px;
          top: 93.03px;
        }
        #BOX523,
        #BOX524 {
          height: 239.921px;
          top: 28.0789px;
          left: 0px;
        }
        #BUTTON_TEXT472,
        #BUTTON_TEXT473 {
          top: 7.52365px;
          left: 0px;
        }
        #GROUP553,
        #GROUP552,
        #GROUP551,
        #GROUP559,
        #GROUP558,
        #GROUP557 {
          height: 268px;
        }
        #HEADLINE847 {
          top: 61px;
          left: 0px;
        }
        #GROUP556 {
          height: 112px;
          top: 112.03px;
        }
        #HEADLINE848 {
          top: 61.9353px;
        }
        #HEADLINE849 {
          top: 110.03px;
        }
        @media (min-width: 768px) {
          #Header {
            height: 637.893px;
          }
          #IMAGE519,
          #IMAGE519 > .ladi-image > .ladi-image-background {
            width: 2159.5px;
            height: 635.893px;
          }
          #IMAGE519 {
            top: 0px;
            left: -471px;
          }
          #IMAGE519 > .ladi-image > .ladi-image-background {
            background-image: url("https://w.ladicdn.com/s2500x950/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
          }
          #HEADLINE20 {
            width: 713px;
            top: 251.447px;
            left: -164.05px;
          }
          #HEADLINE20 > .ladi-headline {
            font-size: 60px;
            text-align: left;
          }
          #IMAGE724,
          #IMAGE724 > .ladi-image > .ladi-image-background {
            width: 941.6px;
            height: 571.359px;
          }
          #IMAGE724 {
            top: 64.534px;
            left: 528.984px;
          }
          #IMAGE724 > .ladi-image > .ladi-image-background {
            background-image: url("https://w.ladicdn.com/s1250x900/5d3c13acdc09063fd1918045/kinh-doanh-hacom-1-20230803045940-hafm6.png");
          }
          #Cacbuocbaohanh {
            height: 466.077px;
          }
          #HEADLINE822 {
            width: 787px;
            top: 29.554px;
            left: 206.5px;
          }
          #HEADLINE822 > .ladi-headline {
            font-size: 32px;
            text-align: center;
          }
          #HEADLINE823 {
            width: 774px;
            top: 105.107px;
            left: 213px;
          }
          #HEADLINE823 > .ladi-headline {
            font-size: 16px;
            text-align: center;
          }
          #BOX518,
          #GROUP536 {
            width: 592px;
            height: 246px;
          }
          #HEADLINE824 {
            width: 403px;
          }
          #HEADLINE824,
          #GROUP546 {
            left: 0px;
          }
          #HEADLINE824 > .ladi-headline {
            font-size: 32px;
          }
          #GROUP529 {
            top: 91.5px;
          }
          #GROUP530 {
            top: 128.5px;
          }
          #GROUP528 {
            top: 51px;
            left: 4px;
          }
          #GROUP531 {
            width: 419.75px;
            height: 157.5px;
            top: 44.25px;
            left: 86.125px;
          }
          #GROUP536 {
            top: 186.607px;
            left: 304px;
          }
          #SECTION406,
          #SECTION408 {
            height: 654.077px;
          }
          #BOX520 {
            width: 580px;
            height: 287px;
            top: 30px;
          }
          #BUTTON469 {
            width: 154px;
            height: 60px;
          }
          #BUTTON469,
          #BUTTON471,
          #BUTTON472,
          #BUTTON473 {
            left: 32px;
          }
          #BUTTON_TEXT469 {
            top: 9px;
          }
          #GROUP537,
          #GROUP539,
          #GROUP545,
          #GROUP550 {
            width: 580px;
            height: 317px;
          }
          #HEADLINE834 {
            width: 256px;
          }
          #HEADLINE834,
          #HEADLINE840 {
            left: 118px;
          }
          #HEADLINE835 {
            width: 492px;
            top: 51.5px;
          }
          #HEADLINE835 > .ladi-headline,
          #HEADLINE842 > .ladi-headline,
          #HEADLINE843 > .ladi-headline {
            font-size: 16px;
          }
          #SHAPE668,
          #SHAPE670,
          #SHAPE671 {
            width: 10px;
            height: 10px;
          }
          #SHAPE668 {
            top: 111.5px;
            left: 5px;
          }
          #SHAPE670 {
            top: 135.5px;
            left: 5px;
          }
          #SHAPE671 {
            top: 85.5px;
            left: 5px;
          }
          #GROUP538 {
            width: 492px;
            height: 153.5px;
            top: 68.5px;
            left: 44px;
          }
          #BOX522,
          #GROUP546,
          #BOX523,
          #GROUP553,
          #GROUP552,
          #GROUP551,
          #BOX524,
          #GROUP559,
          #GROUP558,
          #GROUP557 {
            width: 580px;
          }
          #BUTTON471,
          #BUTTON472,
          #BUTTON473 {
            width: 154px;
          }
          #HEADLINE840 {
            width: 267px;
          }
          #HEADLINE841 {
            width: 513px;
          }
          #SHAPE678,
          #SHAPE679,
          #SHAPE680 {
            width: 10.4268px;
            left: 5.17641px;
          }
          #GROUP548 {
            width: 513px;
            height: 77px;
            top: 161.5px;
          }
          #GROUP547 {
            width: 513px;
            height: 238.5px;
            left: 36.037px;
          }
          #HEADLINE842,
          #HEADLINE843,
          #GROUP549 {
            width: 509px;
          }
          #GROUP549 {
            left: 35.5px;
          }
          #GROUP550 {
            top: 0px;
            left: 620px;
          }
          #HEADLINE844,
          #HEADLINE848 {
            width: 374px;
          }
          #HEADLINE844 {
            top: 62.9353px;
            left: 104.537px;
          }
          #HEADLINE846,
          #HEADLINE847,
          #GROUP556,
          #HEADLINE849 {
            width: 532px;
          }
          #GROUP556 {
            left: 24px;
          }
          #GROUP551 {
            top: 344px;
            left: 0.5px;
          }
          #HEADLINE848 {
            left: 104.537px;
          }
          #HEADLINE849 {
            left: 24.5px;
          }
          #GROUP557 {
            top: 343px;
            left: 628px;
          }
        }
        @media (max-width: 767px) {
          #Header {
            height: 325.266px;
          }
          #IMAGE519 {
            width: 1127.63px;
            height: 326.674px;
            top: -1.408px;
            left: -391px;
          }
          #IMAGE519 > .ladi-image > .ladi-image-background {
            width: 1127.63px;
            height: 334.728px;
            background-image: url("https://w.ladicdn.com/s1450x650/5d3c13acdc09063fd1918045/header-20230612020515-7xbpv.png");
          }
          #HEADLINE20 {
            width: 236px;
            top: 13.592px;
            left: 92px;
          }
          #HEADLINE20 > .ladi-headline {
            font-size: 15px;
            text-align: center;
          }
          #IMAGE724,
          #IMAGE724 > .ladi-image > .ladi-image-background {
            width: 419.424px;
            height: 254.505px;
          }
          #IMAGE724 {
            top: 70.592px;
            left: 0.288px;
          }
          #IMAGE724 > .ladi-image > .ladi-image-background {
            background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/kinh-doanh-hacom-1-20230803045940-hafm6.png");
          }
          #Cacbuocbaohanh {
            height: 362.221px;
          }
          #HEADLINE822 {
            width: 332px;
            top: 5px;
            left: 49px;
          }
          #HEADLINE822 > .ladi-headline {
            font-size: 15px;
            text-align: left;
          }
          #HEADLINE823 {
            width: 354px;
            top: 34px;
            left: 34px;
          }
          #HEADLINE823 > .ladi-headline {
            font-size: 14px;
            text-align: left;
          }
          #BOX518,
          #GROUP536 {
            width: 420px;
            height: 200px;
          }
          #HEADLINE824 {
            width: 340px;
            left: 37.875px;
          }
          #HEADLINE824 > .ladi-headline {
            font-size: 18px;
          }
          #GROUP529 {
            top: 78.5px;
          }
          #GROUP530 {
            top: 115.5px;
          }
          #GROUP528 {
            top: 38px;
            left: 0px;
          }
          #GROUP531 {
            width: 415.75px;
            height: 144.5px;
            top: 13px;
            left: 0px;
          }
          #GROUP536 {
            top: 135px;
            left: -1px;
          }
          #SECTION406 {
            height: 1250px;
          }
          #BOX520 {
            width: 420px;
            height: 291.527px;
            top: 30.4732px;
          }
          #BUTTON469 {
            width: 111.517px;
            height: 60.9464px;
          }
          #BUTTON469,
          #BUTTON471,
          #BUTTON472,
          #BUTTON473 {
            left: 23.1724px;
          }
          #BUTTON_TEXT469 {
            top: 9.14196px;
          }
          #GROUP537,
          #GROUP539 {
            width: 420px;
            height: 322px;
          }
          #HEADLINE834 {
            width: 260px;
            left: 119.861px;
          }
          #HEADLINE835 {
            width: 416px;
            top: 52.3123px;
          }
          #HEADLINE835 > .ladi-headline,
          #HEADLINE842 > .ladi-headline,
          #HEADLINE843 > .ladi-headline {
            font-size: 14px;
          }
          #SHAPE668,
          #SHAPE670,
          #SHAPE671 {
            width: 10.1577px;
            height: 10.1577px;
          }
          #SHAPE668 {
            top: 125.259px;
            left: 5.07886px;
          }
          #SHAPE670 {
            top: 149.637px;
            left: 5.07886px;
          }
          #SHAPE671 {
            top: 98.849px;
            left: 5.07886px;
          }
          #GROUP538 {
            width: 416px;
            height: 164.312px;
            top: 61.5804px;
            left: 3.694px;
          }
          #BOX522,
          #GROUP546,
          #HEADLINE842,
          #HEADLINE843,
          #GROUP549,
          #BOX523,
          #GROUP553,
          #GROUP552,
          #GROUP551,
          #BOX524,
          #GROUP559,
          #GROUP558,
          #GROUP557 {
            width: 420px;
          }
          #BUTTON471,
          #BUTTON472,
          #BUTTON473 {
            width: 111.517px;
          }
          #GROUP546,
          #GROUP549 {
            left: 9px;
          }
          #HEADLINE840 {
            width: 259px;
            left: 81.5441px;
          }
          #HEADLINE841 {
            width: 504px;
          }
          #SHAPE678,
          #SHAPE679,
          #SHAPE680 {
            width: 10.247px;
            left: 5.08717px;
          }
          #GROUP548 {
            width: 503.5px;
            height: 128px;
            top: 156.5px;
          }
          #GROUP547 {
            width: 503.5px;
            height: 284.5px;
            left: 0px;
          }
          #GROUP545,
          #GROUP550 {
            width: 503.5px;
            height: 345px;
          }
          #GROUP550 {
            top: 349px;
            left: -9px;
          }
          #HEADLINE844 {
            width: 375px;
            top: 65.9353px;
            left: 21.8496px;
          }
          #HEADLINE846,
          #HEADLINE847,
          #HEADLINE849 {
            width: 385px;
          }
          #GROUP556 {
            width: 385.241px;
            left: 17.3793px;
          }
          #GROUP551 {
            top: 687px;
            left: 0px;
          }
          #HEADLINE848 {
            width: 271px;
            left: 75.6992px;
          }
          #HEADLINE849 {
            left: 17.7414px;
          }
          #GROUP557 {
            top: 982px;
            left: 0px;
          }
          #SECTION408 {
            height: 170.127px;
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
        <symbol id="shape_ThlkAPdrpK" viewBox="0 0 24 24">
          <path
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
          ></path>
        </symbol>
      </svg>
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
              <h3 class="ladi-headline ladi-transition">GIẢI QUYẾT KHIẾU NẠI</h3>
            </div>
            <div id="IMAGE724" class="ladi-element">
              <div class="ladi-image">
                <div class="ladi-image-background"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="Cacbuocbaohanh" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="HEADLINE822" class="ladi-element">
              <h3 class="ladi-headline ladi-transition">
                QUY TRÌNH 4 BƯỚC GIẢI QUYẾT KHIẾU NẠI
              </h3>
            </div>
            <div id="HEADLINE823" class="ladi-element">
              <h3 class="ladi-headline">
                Nếu bạn hài lòng hãy nói với mọi người. Nếu không hài lòng hãy nói
                với chúng tôi. <br />Mỗi ý kiến của bạn sẽ là cơ hội để chúng tôi
                phục vụ ngày một tốt hơn.<br />
              </h3>
            </div>
            <div id="GROUP536" class="ladi-element">
              <div class="ladi-group">
                <div id="BOX518" class="ladi-element">
                  <div class="ladi-box ladi-transition"></div>
                </div>
                <div id="GROUP531" class="ladi-element">
                  <div class="ladi-group">
                    <div id="HEADLINE824" class="ladi-element">
                      <h3 class="ladi-headline">CHĂM SÓC KHÁCH HÀNG<br /></h3>
                    </div>
                    <div id="GROUP529" class="ladi-element">
                      <div class="ladi-group">
                        <div id="HEADLINE826" class="ladi-element">
                          <h3 class="ladi-headline">
                            &nbsp;dichvukhachhang@hacom.vn<br />
                          </h3>
                        </div>
                        <div id="SHAPE659" class="ladi-element">
                          <div class="ladi-shape">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="100%"
                              viewBox="0 -960 960 960"
                              width="100%"
                              preserveAspectRatio="none"
                              class=""
                              fill="#FFFFFF"
                            >
                              <path
                                d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302 340-223v-55L480-522 140-740v55l340 223Z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="GROUP530" class="ladi-element">
                      <div class="ladi-group">
                        <div id="HEADLINE827" class="ladi-element">
                          <h3 class="ladi-headline">1900 1903<br /></h3>
                        </div>
                        <div id="SHAPE660" class="ladi-element">
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
                    <div id="GROUP528" class="ladi-element">
                      <div class="ladi-group">
                        <div id="HEADLINE825" class="ladi-element">
                          <h3 class="ladi-headline">
                            Số 121 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội<br />
                          </h3>
                        </div>
                        <div id="SHAPE661" class="ladi-element">
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
                              <path
                                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
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
          </div>
        </div>
        <div id="SECTION406" class="ladi-section">
          <div class="ladi-section-background"></div>
          <div class="ladi-container">
            <div id="GROUP539" class="ladi-element">
              <div class="ladi-group">
                <div id="GROUP537" class="ladi-element">
                  <div class="ladi-group">
                    <div id="BOX520" class="ladi-element">
                      <div class="ladi-box ladi-transition"></div>
                    </div>
                    <div id="BUTTON469" class="ladi-element">
                      <div class="ladi-button">
                        <div class="ladi-button-background"></div>
                        <div
                          id="BUTTON_TEXT469"
                          class="ladi-element ladi-button-headline"
                        >
                          <p class="ladi-headline">BƯỚC 1<br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="GROUP538" class="ladi-element">
                  <div class="ladi-group">
                    <div id="HEADLINE834" class="ladi-element">
                      <h3 class="ladi-headline">TIẾP NHẬN YÊU CẦU<br /></h3>
                    </div>
                    <div id="HEADLINE835" class="ladi-element">
                      <h3 class="ladi-headline">
                        Quý khách hàng gửi yêu cầu Góp ý - Khiếu nại theo các cách
                        sau: <br />&nbsp; &nbsp; &nbsp;Cách 1: Gọi điện thoại đến
                        hotline: <span style="font-weight: bold">1900 1903 </span
                        ><br />&nbsp; &nbsp; &nbsp;Cách 2: Gửi Email về địa chỉ:
                        <span style="font-weight: bold"
                          >dichvukhachhang@hacom.vn </span
                        ><br />&nbsp; &nbsp; &nbsp;Cách 3: Gửi tin nhắn tới
                        Facebook hoặc Website:
                        <span style="font-weight: bold">hacom.vn</span><br />
                      </h3>
                    </div>
                    <div id="SHAPE668" class="ladi-element">
                      <div class="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                          class=""
                          fill="#000"
                        >
                          <use xlink:href="#shape_ThlkAPdrpK"></use>
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
                          viewBox="0 0 24 24"
                          class=""
                          fill="#000"
                        >
                          <use xlink:href="#shape_ThlkAPdrpK"></use>
                        </svg>
                      </div>
                    </div>
                    <div id="SHAPE671" class="ladi-element">
                      <div class="ladi-shape">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          preserveAspectRatio="none"
                          viewBox="0 0 24 24"
                          class=""
                          fill="#000"
                        >
                          <use xlink:href="#shape_ThlkAPdrpK"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP550" class="ladi-element">
              <div class="ladi-group">
                <div id="GROUP545" class="ladi-element">
                  <div class="ladi-group">
                    <div id="GROUP546" class="ladi-element">
                      <div class="ladi-group">
                        <div id="BOX522" class="ladi-element">
                          <div class="ladi-box ladi-transition"></div>
                        </div>
                        <div id="BUTTON471" class="ladi-element">
                          <div class="ladi-button">
                            <div class="ladi-button-background"></div>
                            <div
                              id="BUTTON_TEXT471"
                              class="ladi-element ladi-button-headline"
                            >
                              <p class="ladi-headline">BƯỚC 2<br /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="GROUP547" class="ladi-element">
                      <div class="ladi-group">
                        <div id="HEADLINE840" class="ladi-element">
                          <h3 class="ladi-headline">PHÂN TÍCH YÊU CẦU<br /></h3>
                        </div>
                        <div id="GROUP548" class="ladi-element">
                          <div class="ladi-group">
                            <div id="HEADLINE841" class="ladi-element">
                              <h3 class="ladi-headline">
                                &nbsp; &nbsp; &nbsp;Hẹn khách hàng thời gian thông
                                báo lại thông tin (tối đa 3 ngày).<br />&nbsp;
                                &nbsp; &nbsp;Liên hệ tới các bộ phận liên quan để
                                làm rõ khiếu nại.<br />&nbsp; &nbsp; &nbsp;Đề xuất
                                các phương án giải quyết khiếu nại.<br />
                              </h3>
                            </div>
                            <div id="SHAPE678" class="ladi-element">
                              <div class="ladi-shape">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                  class=""
                                  fill="#000"
                                >
                                  <use xlink:href="#shape_ThlkAPdrpK"></use>
                                </svg>
                              </div>
                            </div>
                            <div id="SHAPE679" class="ladi-element">
                              <div class="ladi-shape">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                  class=""
                                  fill="#000"
                                >
                                  <use xlink:href="#shape_ThlkAPdrpK"></use>
                                </svg>
                              </div>
                            </div>
                            <div id="SHAPE680" class="ladi-element">
                              <div class="ladi-shape">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="100%"
                                  height="100%"
                                  preserveAspectRatio="none"
                                  viewBox="0 0 24 24"
                                  class=""
                                  fill="#000"
                                >
                                  <use xlink:href="#shape_ThlkAPdrpK"></use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="GROUP549" class="ladi-element">
                  <div class="ladi-group">
                    <div id="HEADLINE842" class="ladi-element">
                      <h3 class="ladi-headline">
                        1. Đối với các khiếu nại trực tiếp hoặc qua điện thoại mà
                        có đủ&nbsp; &nbsp; thông tin, có thể giải quyết được ngay:
                        trả lời khiếu nại khách hàng ngay.<br />
                      </h3>
                    </div>
                    <div id="HEADLINE843" class="ladi-element">
                      <h3 class="ladi-headline">
                        2. Đối với khiếu nại chưa đủ thông tin hoặc không thể giải
                        quyết được ngay thì thực hiện:<br />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP551" class="ladi-element">
              <div class="ladi-group">
                <div id="GROUP552" class="ladi-element">
                  <div class="ladi-group">
                    <div id="GROUP553" class="ladi-element">
                      <div class="ladi-group">
                        <div id="BOX523" class="ladi-element">
                          <div class="ladi-box ladi-transition"></div>
                        </div>
                        <div id="BUTTON472" class="ladi-element">
                          <div class="ladi-button">
                            <div class="ladi-button-background"></div>
                            <div
                              id="BUTTON_TEXT472"
                              class="ladi-element ladi-button-headline"
                            >
                              <p class="ladi-headline">BƯỚC 3<br /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="HEADLINE844" class="ladi-element">
                      <h3 class="ladi-headline">
                        TRẢ LỜI, GIẢI QUYẾT YÊU CẦU<br />
                      </h3>
                    </div>
                  </div>
                </div>
                <div id="GROUP556" class="ladi-element">
                  <div class="ladi-group">
                    <div id="HEADLINE846" class="ladi-element">
                      <h3 class="ladi-headline">
                        1. Liên hệ lại với khách hàng để trả lời khiếu nại và đề
                        xuất các phương án giải quyết.<br />
                      </h3>
                    </div>
                    <div id="HEADLINE847" class="ladi-element">
                      <h3 class="ladi-headline">
                        2. Giải quyết khiếu nại theo hướng đề xuất đã được khách
                        hàng yêu cầu.<br />
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="GROUP557" class="ladi-element">
              <div class="ladi-group">
                <div id="GROUP558" class="ladi-element">
                  <div class="ladi-group">
                    <div id="GROUP559" class="ladi-element">
                      <div class="ladi-group">
                        <div id="BOX524" class="ladi-element">
                          <div class="ladi-box ladi-transition"></div>
                        </div>
                        <div id="BUTTON473" class="ladi-element">
                          <div class="ladi-button">
                            <div class="ladi-button-background"></div>
                            <div
                              id="BUTTON_TEXT473"
                              class="ladi-element ladi-button-headline"
                            >
                              <p class="ladi-headline">BƯỚC 4<br /></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="HEADLINE848" class="ladi-element">
                      <h3 class="ladi-headline">KẾT THÚC YÊU CẦU<br /></h3>
                    </div>
                  </div>
                </div>
                <div id="HEADLINE849" class="ladi-element">
                  <h3 class="ladi-headline">
                    Lưu lại thông tin khiếu nại để tổng hợp và rút kinh nghiệm.<br />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <!--Begin:Form-->
      <div style="text-align:center;margin-bottom: 20px">
        <div style="font-size: 32px;text-transform: uppercase;font-weight:700;color:#EC1C24;margin-bottom: 20px;line-height:1.5;">THẮC MẮC, GÓP Ý VỚI HACOM</div>
        <p style="font-size: 16px;margin-bottom: 10px;">Mọi thắc mắc hoặc góp ý, quý khách vui lòng liên hệ trực tiếp với bộ phận chăm sóc khách hàng của chúng tôi bằng cách điền đầy đủ thông tin vào form bên dưới. </p>
        <p style="font-weight: 700;font-size: 16px;">Ý kiến đánh giá của Quý khách hàng RẤT QUAN TRỌNG với HACOM.</p>
      </div>
      
     
      </div>
      <!--End:Form-->
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
        ]><script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1690882153727"></script>
        <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1690882153727"></script><!
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
      </style>
      <script
        src="https://w.ladicdn.com/v2/source/ladipagev3.min.js?v=1690882153727"
        type="text/javascript"
      ></script>
      <script id="script_event_data" type="application/json">
        {
          "HEADLINE20": { "a": "headline", "F": "bounceInLeft", "C": "0s" },
          "HEADLINE822": { "a": "headline", "F": "bounceInLeft", "C": "0s" }
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
              "64cb3292cd2bf400124fb6dd";
            window.LadiPageScript.runtime.publish_platform = "LADIPAGE";
            window.LadiPageScript.runtime.version = "1690882153727";
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
            window.LadiPageScript.runtime.desktop_width = 1200;
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
  <!--Publish time: Thu, 03 Aug 2023 07:34:29 GMT--><!--LadiPage build time: Tue, 01 Aug 2023 09:29:13 GMT-->
  `;

  useEffect(() => {
    // Kiểm tra nếu giá trị success thay đổi và không rỗng
    if (success !== "" && success !== null) {
      // Thiết lập timeout để sau 2 giây đặt lại giá trị success thành rỗng
      const timer = setTimeout(() => {
        setSuccess("");
      }, 2000);

      // Trả về một hàm mô phỏng làm sạch khi component unmount hoặc success thay đổi
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <main className={roboto.className}>
      <div
        className="text-container"
        dangerouslySetInnerHTML={{ __html: aaa }}
      />
      <div className={style.formBox}>
        <form
          className={style.form}
          onSubmit={form.onSubmit((values) => onsubmit(values))}
        >
          <TextInput
            withAsterisk
            placeholder="Họ và tên (bắt buộc)"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            placeholder="Email (bắt buộc)"
            {...form.getInputProps("email")}
          />
          <TextInput
            placeholder="Số điện thoại"
            {...form.getInputProps("phone")}
          />
          <Textarea
            withAsterisk
            placeholder="Nội dung thắc mắc, góp ý của quý khách"
            {...form.getInputProps("content")}
          />

          <Group mt="md">
            <Button className={style.button} type="submit">
              Gửi
            </Button>
          </Group>
          {success !== "" && <p className={style.success}>{success}</p>}
        </form>
      </div>
    </main>
  );
}
