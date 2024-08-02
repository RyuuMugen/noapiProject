import React from "react";

const page = () => {
  const aaa = `<!DOCTYPE html>
  <html>
      <head>
        <style>
         .header-2019 .header-top .header-top-item .top-header-span{
          font-size: 10px;
          }
          .links-group-container p {
           line-height: 2;
        }
          .footer-newsletter-title {
          line-height: 4;
          }
          .sep-item, .header-seo-links a {
          color: white !important;
          }
          .showroom-container p{
          line-height:2;
          }
          .header-2019 .taikhoan-text a{
          line-height:1.5;
          }
          .khaipv-copyright p{
            line-height: 2;
          }
          .header-hotline b{
          font-weight: 700;
          line-height:1.5;
          }
        </style>
          <meta charset="UTF-8" />
          <title>showroom Bắc Ninh</title>
          <meta http-equiv="Cache-Control" content="no-cache" />
          <meta http-equiv="Expires" content="-1" />
          <meta name="keywords" content="" />
          <meta name="description" content="showroom Bắc Ninh" />
          <script id="script_viewport" type="text/javascript">
              window.ladi_viewport = function () {
                  var width = window.outerWidth > 0 ? window.outerWidth : window.screen.width;
                  var widthDevice = width;
                  var is_desktop = width >= 768;
                  var content = "";
                  if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
                      window.ladi_is_desktop = is_desktop;
                  }
                  if (!is_desktop) {
                      widthDevice = 420;
                  } else {
                      widthDevice = 1200;
                  }
                  content = "width=" + widthDevice + ", user-scalable=no";
                  var scale = 1;
                  if (!is_desktop && widthDevice != window.screen.width && window.screen.width > 0) {
                      scale = window.screen.width / widthDevice;
                  }
                  if (scale != 1) {
                      content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;
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
          </script>
          <meta property="og:title" content="showroom Bắc Ninh" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="showroom Bắc Ninh" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="dns-prefetch" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://api.form.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://a.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://api.ladisales.com/" crossorigin />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" as="style" onload="this.onload = null;this.rel = 'stylesheet';" />
          <link rel="preload" href="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1615869260956" as="script" />
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
              body {
                  font-size: 12px;
                  -ms-text-size-adjust: none;
                  -moz-text-size-adjust: none;
                  -o-text-size-adjust: none;
                  -webkit-text-size-adjust: none;
                  background: #fff;
              }
              .ladi-loading {
                  width: 80px;
                  height: 80px;
                  z-index: 900000000000;
                  position: fixed;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  margin: auto;
                  overflow: hidden;
              }
              .ladi-loading div {
                  position: absolute;
                  width: 6px;
                  height: 6px;
                  background: #fff;
                  border-radius: 50%;
                  animation: ladi-loading 1.2s linear infinite;
              }
              .ladi-loading div:nth-child(1) {
                  animation-delay: 0s;
                  top: 37px;
                  left: 66px;
              }
              .ladi-loading div:nth-child(2) {
                  animation-delay: -0.1s;
                  top: 22px;
                  left: 62px;
              }
              .ladi-loading div:nth-child(3) {
                  animation-delay: -0.2s;
                  top: 11px;
                  left: 52px;
              }
              .ladi-loading div:nth-child(4) {
                  animation-delay: -0.3s;
                  top: 7px;
                  left: 37px;
              }
              .ladi-loading div:nth-child(5) {
                  animation-delay: -0.4s;
                  top: 11px;
                  left: 22px;
              }
              .ladi-loading div:nth-child(6) {
                  animation-delay: -0.5s;
                  top: 22px;
                  left: 11px;
              }
              .ladi-loading div:nth-child(7) {
                  animation-delay: -0.6s;
                  top: 37px;
                  left: 7px;
              }
              .ladi-loading div:nth-child(8) {
                  animation-delay: -0.7s;
                  top: 52px;
                  left: 11px;
              }
              .ladi-loading div:nth-child(9) {
                  animation-delay: -0.8s;
                  top: 62px;
                  left: 22px;
              }
              .ladi-loading div:nth-child(10) {
                  animation-delay: -0.9s;
                  top: 66px;
                  left: 37px;
              }
              .ladi-loading div:nth-child(11) {
                  animation-delay: -1s;
                  top: 62px;
                  left: 52px;
              }
              .ladi-loading div:nth-child(12) {
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
              .overflow-hidden {
                  overflow: hidden;
              }
              .ladi-transition {
                  transition: all 150ms linear 0s;
              }
              .opacity-0 {
                  opacity: 0;
              }
              .pointer-events-none {
                  pointer-events: none;
              }
              .ladipage-message {
                  position: fixed;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  z-index: 1000000000;
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
              .ladipage-message .ladipage-message-box h1 {
                  background-color: rgba(6, 21, 40, 0.05);
                  color: #000;
                  padding: 12px 15px;
                  font-weight: 600;
                  font-size: 16px;
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
              }
              .ladipage-message .ladipage-message-box .ladipage-message-text {
                  font-size: 14px;
                  padding: 0 20px;
                  margin-top: 10px;
                  line-height: 18px;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
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
                  font-weight: 600;
                  cursor: pointer;
              }
              .ladi-wraper {
                  width: 100%;
                  height: 100%;
                  min-height: 100vh;
                  overflow: hidden;
                  background: #fff;
              }
              .ladi-section {
                  margin: 0 auto;
                  position: relative;
              }
              .ladi-section .ladi-section-arrow-down {
                  position: absolute;
                  width: 36px;
                  height: 30px;
                  bottom: 0;
                  right: 0;
                  left: 0;
                  margin: auto;
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  background-position: 4px;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-section.ladi-section-readmore {
                  transition: height 350ms linear 0s;
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
                  transition: left 350ms ease-in-out;
              }
              .ladi-carousel .ladi-carousel-arrow {
                  position: absolute;
                  width: 30px;
                  height: 36px;
                  top: calc(50% - 18px);
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-carousel .ladi-carousel-arrow-left {
                  left: 5px;
                  background-position: -28px;
              }
              .ladi-carousel .ladi-carousel-arrow-right {
                  right: 5px;
                  background-position: -52px;
              }
              .ladi-gallery {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-gallery .ladi-gallery-view {
                  position: absolute;
                  overflow: hidden;
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item {
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center center;
                  width: 100%;
                  height: 100%;
                  position: relative;
                  display: none;
                  transition: transform 0.5s ease-in-out;
                  -webkit-backface-visibility: hidden;
                  backface-visibility: hidden;
                  -webkit-perspective: 1000px;
                  perspective: 1000px;
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.play-video {
                  cursor: pointer;
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.play-video:after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  width: 60px;
                  height: 60px;
                  background: url(https://w.ladicdn.com/source/ladipage-play.svg) no-repeat center center;
                  background-size: contain;
                  pointer-events: none;
                  cursor: pointer;
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.next,
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.selected.right {
                  left: 0;
                  transform: translate3d(100%, 0, 0);
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.prev,
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.selected.left {
                  left: 0;
                  transform: translate3d(-100%, 0, 0);
              }
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.next.left,
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.prev.right,
              .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item.selected {
                  left: 0;
                  transform: translate3d(0, 0, 0);
              }
              .ladi-gallery .ladi-gallery-view > .next,
              .ladi-gallery .ladi-gallery-view > .prev,
              .ladi-gallery .ladi-gallery-view > .selected {
                  display: block;
              }
              .ladi-gallery .ladi-gallery-view > .selected {
                  left: 0;
              }
              .ladi-gallery .ladi-gallery-view > .next,
              .ladi-gallery .ladi-gallery-view > .prev {
                  position: absolute;
                  top: 0;
                  width: 100%;
              }
              .ladi-gallery .ladi-gallery-view > .next {
                  left: 100%;
              }
              .ladi-gallery .ladi-gallery-view > .prev {
                  left: -100%;
              }
              .ladi-gallery .ladi-gallery-view > .next.left,
              .ladi-gallery .ladi-gallery-view > .prev.right {
                  left: 0;
              }
              .ladi-gallery .ladi-gallery-view > .selected.left {
                  left: -100%;
              }
              .ladi-gallery .ladi-gallery-view > .selected.right {
                  left: 100%;
              }
              .ladi-gallery .ladi-gallery-control {
                  position: absolute;
                  overflow: hidden;
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-view {
                  width: 100%;
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control {
                  top: 0;
                  width: 100%;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-view {
                  top: 0;
                  width: 100%;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control {
                  width: 100%;
                  bottom: 0;
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-view {
                  height: 100%;
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control {
                  height: 100%;
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-view {
                  height: 100%;
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control {
                  height: 100%;
                  right: 0;
              }
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {
                  position: absolute;
                  width: 30px;
                  height: 36px;
                  top: calc(50% - 18px);
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-left {
                  left: 5px;
                  background-position: -28px;
              }
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-right {
                  right: 5px;
                  background-position: -52px;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {
                  position: absolute;
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow,
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow {
                  top: calc(50% - 18px);
                  width: 30px;
                  height: 36px;
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  left: 0;
                  background-position: -28px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  right: 0;
                  background-position: -52px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  left: 0;
                  background-position: -28px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  right: 0;
                  background-position: -52px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow,
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow {
                  left: calc(50% - 18px);
                  width: 36px;
                  height: 30px;
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  top: 0;
                  background-position: -77px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  bottom: 0;
                  background-position: 3px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  top: 0;
                  background-position: -77px;
                  transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  bottom: 0;
                  background-position: 3px;
                  transform: scale(0.6);
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box {
                  position: relative;
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-box {
                  display: inline-flex;
                  left: 0;
                  transition: left 150ms ease-in-out;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-box {
                  display: inline-flex;
                  left: 0;
                  transition: left 150ms ease-in-out;
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-box {
                  display: inline-grid;
                  top: 0;
                  transition: top 150ms ease-in-out;
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-box {
                  display: inline-grid;
                  top: 0;
                  transition: top 150ms ease-in-out;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item {
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center center;
                  float: left;
                  position: relative;
                  cursor: pointer;
                  filter: invert(15%);
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item.play-video:after {
                  content: "";
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  width: 30px;
                  height: 30px;
                  background: url(https://w.ladicdn.com/source/ladipage-play.svg) no-repeat center center;
                  background-size: contain;
                  pointer-events: none;
                  cursor: pointer;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item:hover {
                  filter: none;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item.selected {
                  filter: none;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item:last-child {
                  margin-right: 0 !important;
                  margin-bottom: 0 !important;
              }
              .ladi-table {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  overflow: auto;
              }
              .ladi-table table {
                  width: 100%;
              }
              .ladi-table table td {
                  vertical-align: middle;
              }
              .ladi-table tbody td {
                  word-break: break-word;
              }
              .ladi-table table td img {
                  cursor: pointer;
                  width: 100%;
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
              .ladi-frame .ladi-frame-background {
                  height: 100%;
                  width: 100%;
                  pointer-events: none;
              }
              .ladi-banner {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
              }
              .ladi-banner .ladi-banner-background {
                  height: 100%;
                  width: 100%;
                  pointer-events: none;
              }
              #SECTION_POPUP .ladi-container {
                  z-index: 90000070;
              }
              #SECTION_POPUP .ladi-container > .ladi-element {
                  z-index: 90000070;
                  position: fixed;
                  display: none;
              }
              #SECTION_POPUP .ladi-container > .ladi-element.hide-visibility {
                  display: block !important;
                  visibility: hidden !important;
              }
              #SECTION_POPUP .popup-close {
                  width: 30px;
                  height: 30px;
                  position: absolute;
                  right: 0;
                  top: 0;
                  transform: scale(0.8);
                  -webkit-transform: scale(0.8);
                  z-index: 9000000080;
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  background-position: -108px;
                  cursor: pointer;
                  display: none;
              }
              .ladi-popup {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-popup .ladi-popup-background {
                  height: 100%;
                  width: 100%;
                  pointer-events: none;
              }
              .ladi-countdown {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-countdown .ladi-countdown-background {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
                  display: table;
                  pointer-events: none;
              }
              .ladi-countdown .ladi-countdown-text {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  text-decoration: inherit;
                  display: table;
                  pointer-events: none;
              }
              .ladi-countdown .ladi-countdown-text span {
                  display: table-cell;
                  vertical-align: middle;
              }
              .ladi-countdown > .ladi-element {
                  text-decoration: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
                  position: relative;
                  display: inline-block;
              }
              .ladi-countdown > .ladi-element:last-child {
                  margin-right: 0 !important;
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
              }
              .ladi-button > .ladi-element {
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
              .ladi-button > .ladi-element .ladi-headline {
                  display: table-cell;
                  vertical-align: middle;
              }
              .ladi-collection {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-collection.carousel {
                  overflow: hidden;
              }
              .ladi-collection .ladi-collection-content {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  left: 0;
                  transition: left 350ms ease-in-out;
              }
              .ladi-collection .ladi-collection-content .ladi-collection-item {
                  display: block;
                  position: relative;
                  float: left;
                  box-shadow: 0 0 0 1px #fff;
              }
              .ladi-collection .ladi-collection-content .ladi-collection-page {
                  float: left;
              }
              .ladi-collection .ladi-collection-arrow {
                  position: absolute;
                  width: 30px;
                  height: 36px;
                  top: calc(50% - 18px);
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-collection .ladi-collection-arrow-left {
                  left: 5px;
                  background-position: -28px;
              }
              .ladi-collection .ladi-collection-arrow-right {
                  right: 5px;
                  background-position: -52px;
              }
              .ladi-collection .ladi-collection-button-next {
                  position: absolute;
                  width: 36px;
                  height: 30px;
                  bottom: -40px;
                  right: 0;
                  left: 0;
                  margin: auto;
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  background-position: 4px;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-form {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-form > .ladi-element {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form .ladi-button > .ladi-element {
                  color: initial;
                  font-size: initial;
                  font-weight: initial;
                  text-transform: initial;
                  text-decoration: initial;
                  font-style: initial;
                  text-align: initial;
                  letter-spacing: initial;
                  line-height: initial;
              }
              .ladi-form > .ladi-element .ladi-form-item-container {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item-background {
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select {
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  background-size: 9px 6px !important;
                  background-position: right 0.5rem center;
                  background-repeat: no-repeat;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3 {
                  width: calc(100% / 3 - 5px);
                  max-width: calc(100% / 3 - 5px);
                  min-width: calc(100% / 3 - 5px);
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3:nth-child(3) {
                  margin-left: 7.5px;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3:nth-child(4) {
                  margin-left: 7.5px;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select option {
                  color: initial;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control:not(.ladi-form-control-select) {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select:not([data-selected=""]) {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select[data-selected=""] {
                  text-transform: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
                  vertical-align: middle;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span {
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span[data-checked="true"] {
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span[data-checked="false"] {
                  text-transform: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form .ladi-form-item-container {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-form .ladi-form-item {
                  width: 100%;
                  height: 100%;
                  position: absolute;
              }
              .ladi-form .ladi-form-item-background {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  pointer-events: none;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox {
                  height: auto;
              }
              .ladi-form .ladi-form-item .ladi-form-control {
                  background-color: transparent;
                  min-width: 100%;
                  min-height: 100%;
                  max-width: 100%;
                  max-height: 100%;
                  width: 100%;
                  height: 100%;
                  padding: 0 5px;
                  color: inherit;
                  font-size: inherit;
                  border: none;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox {
                  padding: 10px 5px;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-vertical .ladi-form-checkbox-item {
                  margin-top: 0 !important;
                  margin-left: 0 !important;
                  margin-right: 0 !important;
                  display: table;
                  border: none;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-horizontal .ladi-form-checkbox-item {
                  margin-top: 0 !important;
                  margin-left: 0 !important;
                  margin-right: 10px !important;
                  display: inline-block;
                  border: none;
                  position: relative;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item input {
                  vertical-align: middle;
                  width: 13px;
                  height: 13px;
                  display: table-cell;
                  margin-right: 5px;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item span {
                  display: table-cell;
                  cursor: default;
                  vertical-align: middle;
                  word-break: break-word;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-horizontal .ladi-form-checkbox-item input {
                  position: absolute;
                  top: 4px;
              }
              .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-horizontal .ladi-form-checkbox-item span {
                  padding-left: 18px;
              }
              .ladi-form .ladi-form-item textarea.ladi-form-control {
                  resize: none;
                  padding: 5px;
              }
              .ladi-form .ladi-button {
                  cursor: pointer;
              }
              .ladi-form .ladi-button .ladi-headline {
                  cursor: pointer;
                  user-select: none;
              }
              .ladi-cart {
                  position: absolute;
                  width: 100%;
                  font-size: 12px;
              }
              .ladi-cart .ladi-cart-row {
                  position: relative;
                  display: inline-table;
                  width: 100%;
              }
              .ladi-cart .ladi-cart-row:after {
                  content: "";
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  height: 1px;
                  width: 100%;
                  background: #dcdcdc;
              }
              .ladi-cart .ladi-cart-no-product {
                  text-align: center;
                  font-size: 16px;
                  vertical-align: middle;
              }
              .ladi-cart .ladi-cart-image {
                  width: 16%;
                  vertical-align: middle;
                  position: relative;
                  text-align: center;
              }
              .ladi-cart .ladi-cart-image img {
                  max-width: 100%;
              }
              .ladi-cart .ladi-cart-title {
                  vertical-align: middle;
                  padding: 0 5px;
                  word-break: break-all;
              }
              .ladi-cart .ladi-cart-title .ladi-cart-title-name {
                  display: block;
                  margin-bottom: 5px;
              }
              .ladi-cart .ladi-cart-title .ladi-cart-title-variant {
                  font-weight: 700;
                  display: block;
              }
              .ladi-cart .ladi-cart-image .ladi-cart-image-quantity {
                  position: absolute;
                  top: -3px;
                  right: -5px;
                  background: rgba(150, 149, 149, 0.9);
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  text-align: center;
                  color: #fff;
                  line-height: 20px;
              }
              .ladi-cart .ladi-cart-quantity {
                  width: 70px;
                  vertical-align: middle;
                  text-align: center;
              }
              .ladi-cart .ladi-cart-quantity-content {
                  display: inline-flex;
              }
              .ladi-cart .ladi-cart-quantity input {
                  width: 24px;
                  text-align: center;
                  height: 22px;
                  -moz-appearance: textfield;
                  border-top: 1px solid #dcdcdc;
                  border-bottom: 1px solid #dcdcdc;
              }
              .ladi-cart .ladi-cart-quantity input::-webkit-inner-spin-button,
              .ladi-cart .ladi-cart-quantity input::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
              }
              .ladi-cart .ladi-cart-quantity button {
                  border: 1px solid #dcdcdc;
                  cursor: pointer;
                  text-align: center;
                  width: 21px;
                  height: 22px;
                  position: relative;
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-cart .ladi-cart-quantity button:active {
                  transform: translateY(2px);
                  transition: transform 0.2s linear;
              }
              .ladi-cart .ladi-cart-quantity button span {
                  font-size: 18px;
                  position: relative;
                  left: 0.5px;
              }
              .ladi-cart .ladi-cart-quantity button:first-child span {
                  top: -1.2px;
              }
              .ladi-cart .ladi-cart-price {
                  width: 100px;
                  vertical-align: middle;
                  text-align: right;
                  padding: 0 5px;
              }
              .ladi-cart .ladi-cart-action {
                  width: 28px;
                  vertical-align: middle;
                  text-align: center;
              }
              .ladi-cart .ladi-cart-action button {
                  border: 1px solid #dcdcdc;
                  cursor: pointer;
                  text-align: center;
                  width: 25px;
                  height: 22px;
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-cart .ladi-cart-action button:active {
                  transform: translateY(2px);
                  transition: transform 0.2s linear;
              }
              .ladi-cart .ladi-cart-action button span {
                  font-size: 13px;
                  position: relative;
                  top: 0.5px;
              }
              .ladi-video {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  overflow: hidden;
              }
              .ladi-video .ladi-video-background {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  pointer-events: none;
              }
              .ladi-group {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-button-group {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-checkout {
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
              .ladi-html-code {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-image {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                  pointer-events: none;
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
                  background-size: cover;
                  background-position: center center;
              }
              .ladi-headline a {
                  text-decoration: underline;
              }
              .ladi-paragraph {
                  width: 100%;
                  display: inline-block;
              }
              .ladi-paragraph a {
                  text-decoration: underline;
              }
              .ladi-list-paragraph {
                  width: 100%;
                  display: inline-block;
              }
              .ladi-list-paragraph a {
                  text-decoration: underline;
              }
              .ladi-list-paragraph ul li {
                  position: relative;
                  counter-increment: linum;
              }
              .ladi-list-paragraph ul li:before {
                  position: absolute;
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  left: 0;
              }
              .ladi-list-paragraph ul li:last-child {
                  padding-bottom: 0 !important;
              }
              .ladi-line {
                  position: relative;
              }
              .ladi-line .ladi-line-container {
                  border-bottom: 0 !important;
                  border-right: 0 !important;
                  width: 100%;
                  height: 100%;
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
              .backdrop-popup {
                  display: none;
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  z-index: 90000060;
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
                  width: 30px;
                  height: 30px;
                  position: absolute;
                  z-index: 9000000090;
                  background: url(https://w.ladicdn.com/v2/source/ladi-icons.svg) rgba(255, 255, 255, 0.2) no-repeat;
                  background-position: -108px;
                  transform: scale(0.7);
                  -webkit-transform: scale(0.7);
                  cursor: pointer;
              }
              .lightbox-screen .lightbox-hidden {
                  display: none;
              }
              .ladi-animation-hidden {
                  visibility: hidden !important;
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
                  .ladi-fullwidth .ladi-gallery-view-item {
                      transition-duration: 1.5s;
                  }
              }
              @media (max-width: 767px) {
                  .ladi-element.ladi-auto-scroll {
                      overflow-x: scroll;
                      overflow-y: hidden;
                      width: 100% !important;
                      left: 0 !important;
                      -webkit-overflow-scrolling: touch;
                  }
                  .ladi-section.ladi-auto-scroll {
                      overflow-x: scroll;
                      overflow-y: hidden;
                      -webkit-overflow-scrolling: touch;
                  }
                  .ladi-carousel .ladi-carousel-content {
                      transition: left 0.3s ease-in-out;
                  }
                  .ladi-gallery .ladi-gallery-view > .ladi-gallery-view-item {
                      transition: transform 0.3s ease-in-out;
                  }
              }
              .ladi-notify-transition {
                  transition: top 0.5s ease-in-out, bottom 0.5s ease-in-out, opacity 0.5s ease-in-out;
              }
              .ladi-notify {
                  padding: 5px;
                  box-shadow: 0 0 1px rgba(64, 64, 64, 0.3), 0 8px 50px rgba(64, 64, 64, 0.05);
                  border-radius: 40px;
                  color: rgba(64, 64, 64, 1);
                  background: rgba(250, 250, 250, 0.9);
                  line-height: 1.6;
                  width: 100%;
                  height: 100%;
                  font-size: 13px;
              }
              .ladi-notify .ladi-notify-image img {
                  float: left;
                  margin-right: 13px;
                  border-radius: 50%;
                  width: 53px;
                  height: 53px;
                  pointer-events: none;
              }
              .ladi-notify .ladi-notify-title {
                  font-size: 100%;
                  height: 17px;
                  overflow: hidden;
                  font-weight: 700;
                  overflow-wrap: break-word;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  line-height: 1;
              }
              .ladi-notify .ladi-notify-content {
                  font-size: 92.308%;
                  height: 17px;
                  overflow: hidden;
                  overflow-wrap: break-word;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  line-height: 1;
                  padding-top: 2px;
              }
              .ladi-notify .ladi-notify-time {
                  line-height: 1.6;
                  font-size: 84.615%;
                  display: inline-block;
                  overflow-wrap: break-word;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  max-width: calc(100% - 155px);
                  overflow: hidden;
              }
              .ladi-notify .ladi-notify-copyright {
                  font-size: 76.9231%;
                  margin-left: 2px;
                  position: relative;
                  padding: 0 5px;
                  cursor: pointer;
                  opacity: 0.6;
                  display: inline-block;
                  top: -4px;
              }
              .ladi-notify .ladi-notify-copyright svg {
                  vertical-align: middle;
              }
              .ladi-notify .ladi-notify-copyright svg:not(:root) {
                  overflow: hidden;
              }
              .ladi-notify .ladi-notify-copyright div {
                  text-decoration: none;
                  color: rgba(64, 64, 64, 1);
                  display: inline;
              }
              .ladi-notify .ladi-notify-copyright strong {
                  font-weight: 700;
              }
              .builder-container .ladi-notify {
                  transition: unset;
              }
              .ladi-spin-lucky {
                  width: 100%;
                  height: 100%;
                  border-radius: 100%;
                  box-shadow: 0 0 7px 0 rgba(64, 64, 64, 0.6), 0 8px 50px rgba(64, 64, 64, 0.3);
                  background-repeat: no-repeat;
                  background-size: cover;
              }
              .ladi-spin-lucky .ladi-spin-lucky-start {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  width: 20%;
                  height: 20%;
                  cursor: pointer;
                  background-size: contain;
                  background-position: center center;
                  background-repeat: no-repeat;
                  transition: transform 0.3s ease-in-out;
                  -webkit-transition: transform 0.3s ease-in-out;
              }
              .ladi-spin-lucky .ladi-spin-lucky-start:hover {
                  transform: scale(1.1);
              }
              .ladi-spin-lucky .ladi-spin-lucky-screen {
                  width: 100%;
                  height: 100%;
                  border-radius: 100%;
                  transition: transform 7s cubic-bezier(0.25, 0.1, 0, 1);
                  -webkit-transition: transform 7s cubic-bezier(0.25, 0.1, 0, 1);
                  text-decoration-line: inherit;
                  text-transform: inherit;
                  -webkit-text-decoration-line: inherit;
              }
              .ladi-spin-lucky .ladi-spin-lucky-screen:before {
                  background-size: cover;
                  background-position: center center;
                  background-repeat: no-repeat;
                  content: "";
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  pointer-events: none;
              }
              .ladi-spin-lucky .ladi-spin-lucky-label {
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  overflow: hidden;
                  width: 42%;
                  padding-left: 12%;
                  transform-origin: 0 0;
                  -webkit-transform-origin: 0 0;
                  text-decoration-line: inherit;
                  text-transform: inherit;
                  -webkit-text-decoration-line: inherit;
                  line-height: 1.6;
                  text-shadow: rgba(0, 0, 0, 0.5) 1px 0 2px;
              }
          </style>
          <style id="style_page" type="text/css">
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
              body {
                  font-family: "Open Sans", sans-serif;
              }
          </style>
          <style id="style_element" type="text/css">
              @media (min-width: 768px) {
                  #SECTION_POPUP {
                      height: 0px;
                  }
                  #SECTION1 {
                      height: 924.5px;
                  }
                  #SECTION1 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s1440x924/5d3c13acdc09063fd1918045/1-20201118073419.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(75%) blur(12px);
                  }
                  #HEADLINE39 {
                      width: 1286px;
                      top: 64.2px;
                      left: -39.5px;
                  }
                  #HEADLINE39 > .ladi-headline {
                      font-family: "Quicksand", sans-serif;
                      color: rgb(255, 255, 255);
                      font-size: 36px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1.6;
                  }
                  #SECTION38 {
                      height: 4734.5px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #IMAGE76 {
                      width: 1156.5px;
                      height: 771px;
                      top: 71.833px;
                      left: 21.75px;
                  }
                  #IMAGE76 > .ladi-image > .ladi-image-background {
                      width: 1156.5px;
                      height: 771px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/dscf7949-20210316062349.jpg");
                  }
                  #IMAGE78 {
                      width: 1163px;
                      height: 775.333px;
                      top: 132.2px;
                      left: 19px;
                  }
                  #IMAGE78 > .ladi-image > .ladi-image-background {
                      width: 1163px;
                      height: 775.333px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/dscf7896-20210316062334.jpg");
                  }
                  #IMAGE84 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 930.2px;
                      left: 19px;
                  }
                  #IMAGE84 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7942-20210316062349.jpg");
                  }
                  #IMAGE85 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 930.2px;
                      left: 611.958px;
                  }
                  #IMAGE85 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7941-20210316062349.jpg");
                  }
                  #IMAGE91 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 1337.16px;
                      left: 19px;
                  }
                  #IMAGE91 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7939-20210316062349.jpg");
                  }
                  #IMAGE92 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 1337.16px;
                      left: 611.958px;
                  }
                  #IMAGE92 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7932-20210316062348.jpg");
                  }
                  #IMAGE94 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 1740.78px;
                      left: 19px;
                  }
                  #IMAGE94 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7931-20210316062348.jpg");
                  }
                  #IMAGE95 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 1740.78px;
                      left: 611.958px;
                  }
                  #IMAGE95 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7930-20210316062348.jpg");
                  }
                  #IMAGE97 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2142.74px;
                      left: 19px;
                  }
                  #IMAGE97 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7897-20210316062334.jpg");
                  }
                  #IMAGE98 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2142.74px;
                      left: 611.958px;
                  }
                  #IMAGE98 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7895-20210316062334.jpg");
                  }
                  #IMAGE100 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2542.21px;
                      left: 19px;
                  }
                  #IMAGE100 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7894-20210316062334.jpg");
                  }
                  #IMAGE101 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2542.21px;
                      left: 611.958px;
                  }
                  #IMAGE101 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7893-20210316062334.jpg");
                  }
                  #IMAGE110 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2995.21px;
                      left: 19px;
                  }
                  #IMAGE110 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7887-20210316062334.jpg");
                  }
                  #IMAGE111 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 2995.21px;
                      left: 611.958px;
                  }
                  #IMAGE111 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7884-20210316062334.jpg");
                  }
                  #IMAGE117 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3401.37px;
                      left: 19px;
                  }
                  #IMAGE117 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7882-20210316062334.jpg");
                  }
                  #IMAGE118 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3401.37px;
                      left: 611.958px;
                  }
                  #IMAGE118 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7881-20210316062333.jpg");
                  }
                  #IMAGE121 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4223.95px;
                      left: 19px;
                  }
                  #IMAGE121 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7869-20210316062324.jpg");
                  }
                  #IMAGE122 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4223.95px;
                      left: 611.958px;
                  }
                  #IMAGE122 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7852-20210316062323.jpg");
                  }
                  #IMAGE123 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3817.79px;
                      left: 19px;
                  }
                  #IMAGE123 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7880-20210316062333.jpg");
                  }
                  #IMAGE124 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3817.79px;
                      left: 611.958px;
                  }
                  #IMAGE124 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/dscf7871-20210316062324.jpg");
                  }
              }
              @media (max-width: 767px) {
                  #SECTION_POPUP {
                      height: 0px;
                  }
                  #SECTION1 {
                      height: 286.667px;
                  }
                  #SECTION1 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s768x286/5d3c13acdc09063fd1918045/1-20201118073419.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(75%) blur(12px);
                  }
                  #HEADLINE39 {
                      width: 392px;
                      top: 12px;
                      left: 10px;
                  }
                  #HEADLINE39 > .ladi-headline {
                      font-family: "Quicksand", sans-serif;
                      color: rgb(255, 255, 255);
                      font-size: 16px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1.6;
                  }
                  #SECTION38 {
                      height: 5493.57px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #IMAGE76 {
                      width: 400px;
                      height: 266.667px;
                      top: 10px;
                      left: 10px;
                  }
                  #IMAGE76 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7949-20210316062349.jpg");
                  }
                  #IMAGE78 {
                      width: 400px;
                      height: 266.667px;
                      top: 75px;
                      left: 6px;
                  }
                  #IMAGE78 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7896-20210316062334.jpg");
                  }
                  #IMAGE84 {
                      width: 400px;
                      height: 266.666px;
                      top: 351.667px;
                      left: 6px;
                  }
                  #IMAGE84 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7942-20210316062349.jpg");
                  }
                  #IMAGE85 {
                      width: 400px;
                      height: 266.666px;
                      top: 4076.07px;
                      left: 10px;
                  }
                  #IMAGE85 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7941-20210316062349.jpg");
                  }
                  #IMAGE91 {
                      width: 400px;
                      height: 266.666px;
                      top: 628.333px;
                      left: 6px;
                  }
                  #IMAGE91 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7939-20210316062349.jpg");
                  }
                  #IMAGE92 {
                      width: 400px;
                      height: 266.666px;
                      top: 3799.37px;
                      left: 10px;
                  }
                  #IMAGE92 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7932-20210316062348.jpg");
                  }
                  #IMAGE94 {
                      width: 400px;
                      height: 266.666px;
                      top: 904.999px;
                      left: 6px;
                  }
                  #IMAGE94 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7931-20210316062348.jpg");
                  }
                  #IMAGE95 {
                      width: 400px;
                      height: 266.666px;
                      top: 3522.67px;
                      left: 10px;
                  }
                  #IMAGE95 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7930-20210316062348.jpg");
                  }
                  #IMAGE97 {
                      width: 400px;
                      height: 266.666px;
                      top: 1181.67px;
                      left: 6px;
                  }
                  #IMAGE97 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7897-20210316062334.jpg");
                  }
                  #IMAGE98 {
                      width: 400px;
                      height: 266.666px;
                      top: 3246.07px;
                      left: 10px;
                  }
                  #IMAGE98 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7895-20210316062334.jpg");
                  }
                  #IMAGE100 {
                      width: 402.207px;
                      height: 300.221px;
                      top: 2631.37px;
                      left: 8px;
                  }
                  #IMAGE100 > .ladi-image > .ladi-image-background {
                      width: 402.207px;
                      height: 300.221px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/dscf7894-20210316062334.jpg");
                  }
                  #IMAGE101 {
                      width: 406.572px;
                      height: 303.479px;
                      top: 2938.37px;
                      left: 3.635px;
                  }
                  #IMAGE101 > .ladi-image > .ladi-image-background {
                      width: 406.572px;
                      height: 303.479px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/dscf7893-20210316062334.jpg");
                  }
                  #IMAGE110 {
                      width: 412.73px;
                      height: 275.153px;
                      top: 1461.04px;
                      left: -6.22px;
                  }
                  #IMAGE110 > .ladi-image > .ladi-image-background {
                      width: 412.73px;
                      height: 275.153px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7887-20210316062334.jpg");
                  }
                  #IMAGE111 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 4354.87px;
                      left: 9.998px;
                  }
                  #IMAGE111 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7884-20210316062334.jpg");
                  }
                  #IMAGE117 {
                      width: 412.73px;
                      height: 275.153px;
                      top: 1752.33px;
                      left: -6.22px;
                  }
                  #IMAGE117 > .ladi-image > .ladi-image-background {
                      width: 412.73px;
                      height: 275.153px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7882-20210316062334.jpg");
                  }
                  #IMAGE118 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 4637.87px;
                      left: 9.998px;
                  }
                  #IMAGE118 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7881-20210316062333.jpg");
                  }
                  #IMAGE121 {
                      width: 412.73px;
                      height: 275.153px;
                      top: 2342.28px;
                      left: 3.635px;
                  }
                  #IMAGE121 > .ladi-image > .ladi-image-background {
                      width: 412.73px;
                      height: 275.153px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7869-20210316062324.jpg");
                  }
                  #IMAGE122 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 5211.07px;
                      left: 9.998px;
                  }
                  #IMAGE122 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7852-20210316062323.jpg");
                  }
                  #IMAGE123 {
                      width: 412.73px;
                      height: 275.153px;
                      top: 2050.99px;
                      left: -6.22px;
                  }
                  #IMAGE123 > .ladi-image > .ladi-image-background {
                      width: 412.73px;
                      height: 275.153px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7880-20210316062333.jpg");
                  }
                  #IMAGE124 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 4927.97px;
                      left: 9.998px;
                  }
                  #IMAGE124 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/dscf7871-20210316062324.jpg");
                  }
              }
          </style>
          <style id="style_lazyload" type="text/css">
              .ladi-section-background,
              .ladi-image-background,
              .ladi-button-background,
              .ladi-headline,
              .ladi-video-background,
              .ladi-countdown-background,
              .ladi-box,
              .ladi-frame-background,
              .ladi-banner,
              .ladi-form-item-background,
              .ladi-gallery-view-item,
              .ladi-gallery-control-item,
              .ladi-spin-lucky-screen,
              .ladi-spin-lucky-start,
              .ladi-list-paragraph ul li:before {
                  background-image: none !important;
              }
          </style>
      </head>
      <body>
          <div class="ladi-wraper">
              <div id="SECTION1" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container">
                      <div id="IMAGE76" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                  </div>
              </div>
              <div id="SECTION38" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container">
                      <div id="HEADLINE39" class="ladi-element">
                          <h3 class="ladi-headline">Hình Ảnh Của Showroom HACOM Từ Sơn<br /></h3>
                      </div>
                      <div id="IMAGE78" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE91" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE92" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE84" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE85" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE94" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE95" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE97" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE98" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE121" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE122" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE123" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE124" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE117" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE118" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE110" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE111" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE100" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE101" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                  </div>
              </div>
              <div id="SECTION_POPUP" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container"></div>
              </div>
          </div>
          <div id="backdrop-popup" class="backdrop-popup"></div>
          <div id="lightbox-screen" class="lightbox-screen"></div>
          <script id="script_lazyload" type="text/javascript">
              (function () {
                  var list_element_lazyload = document.querySelectorAll(
                      ".ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-list-paragraph ul li"
                  );
                  var style_lazyload = document.getElementById("style_lazyload");
                  for (var i = 0; i < list_element_lazyload.length; i++) {
                      var rect = list_element_lazyload[i].getBoundingClientRect();
                      if (rect.x == "undefined" || rect.x == undefined || rect.y == "undefined" || rect.y == undefined) {
                          rect.x = rect.left;
                          rect.y = rect.top;
                      }
                      var offset_top = rect.y + window.scrollY;
                      if (offset_top >= window.scrollY + window.innerHeight || window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight) {
                          list_element_lazyload[i].classList.add("ladi-lazyload");
                      }
                  }
                  style_lazyload.parentElement.removeChild(style_lazyload);
                  var currentScrollY = window.scrollY;
                  var stopLazyload = function (event) {
                      if (event.type == "scroll" && window.scrollY == currentScrollY) {
                          currentScrollY = -1;
                          return;
                      }
                      window.removeEventListener("scroll", stopLazyload);
                      list_element_lazyload = document.getElementsByClassName("ladi-lazyload");
                      while (list_element_lazyload.length > 0) {
                          list_element_lazyload[0].classList.remove("ladi-lazyload");
                      }
                  };
                  window.addEventListener("scroll", stopLazyload);
              })();
          </script>
          <!--[if lt IE 9]>
              <script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1615869260956"></script>
              <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1615869260956"></script>
          <![endif]-->
          <link href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://w.ladicdn.com/v2/source/ladipage.min.css?v=1615869260956" rel="stylesheet" type="text/css" />
          <script src="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1615869260956" type="text/javascript"></script>
          <script id="script_event_data" type="text/javascript">
              (function () {
                  var run = function () {
                      if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
                          setTimeout(run, 100);
                          return;
                      }
                      window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
                      window.LadiPageScript.runtime.ladipage_id = "60504de8cc7c87002c32516a";
                      window.LadiPageScript.runtime.publish_platform = "LADIPAGE";
                      window.LadiPageScript.runtime.isMobileOnly = false;
                      window.LadiPageScript.runtime.DOMAIN_FREE = [];
                      window.LadiPageScript.runtime.bodyFontSize = 12;
                      window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045";
                      window.LadiPageScript.runtime.time_zone = 7;
                      window.LadiPageScript.runtime.currency = "VND";
                      window.LadiPageScript.runtime.eventData =
                          "%7B%22SECTION_POPUP%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22SECTION1%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22HEADLINE39%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION38%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22gradient%22%2C%22mobile.option.background-style%22%3A%22gradient%22%7D%2C%22IMAGE76%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE78%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE84%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE85%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE91%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE92%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE94%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE95%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE97%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE98%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE100%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE101%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE110%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE111%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE117%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE118%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE121%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE122%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE123%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE124%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%7D";
                      window.LadiPageScript.run(true);
                      window.LadiPageScript.runEventScroll();
                  };
                  run();
              })();
          </script>
      </body>
  </html>
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
