import React from "react";

const page = () => {
  const aaa = `<!DOCTYPE html>
  <html>
      <head>
        <style>
          .links-group-container p {
          line-height: 2;
      }
          .footer-newsletter-title {
          line-height: 4;
          }
          .sep-item, .header-seo-links a, .khaipv-buildpc{
          color: white !important;
          }
          .showroom-container p{
          line-height:2;
          }
          .header-2019 .taikhoan-text a{
          line-height:1.5;
          }
          .header-hotline b{
          font-weight: 700;
          line-height:1.5;
          }
        </style>
          <meta charset="UTF-8" />
          <title>showroom Hải Phòng</title>
          <meta http-equiv="Cache-Control" content="no-cache" />
          <meta http-equiv="Expires" content="-1" />
          <meta name="keywords" content="" />
          <meta name="description" content="showroom Hải Phòng" />
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
          <link rel="canonical" href="http://preview.pagedemo.me/5fcafaaaf711010011f02e5d" />
          <meta property="og:url" content="http://preview.pagedemo.me/5fcafaaaf711010011f02e5d" />
          <meta property="og:title" content="showroom Hải Phòng" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="showroom Hải Phòng" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="dns-prefetch" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://api.form.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://a.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://api.ladisales.com/" crossorigin />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" as="style" onload="this.onload = null;this.rel = 'stylesheet';" />
          <link rel="preload" href="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1607136849102" as="script" />
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
                  transition: transform 350ms ease-in-out;
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
              .ladi-form .ladi-element[id^="BUTTON_TEXT"] {
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
                      height: 1885.3px;
                  }
                  #SECTION1 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s1440x1885/5d3c13acdc09063fd1918045/1-20201118073419.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(75%) blur(12px);
                  }
                  #HEADLINE3 {
                      width: 1100px;
                      top: 120.5px;
                      left: 32px;
                  }
                  #HEADLINE3 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 38px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1.6;
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
                      height: 7876.3px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #SECTION44 {
                      height: 328px;
                  }
                  #SECTION44 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: fixed;
                      background-image: url("https://w.ladicdn.com/s1440x328/5d3c13acdc09063fd1918045/background-20200722081309.png");
                      background-position: center top;
                      background-repeat: repeat;
                  }
                  #HEADLINE45 {
                      width: 678px;
                      top: 44px;
                      left: 359.5px;
                  }
                  #HEADLINE45 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 36px;
                      font-weight: bold;
                      line-height: 1.6;
                      text-shadow: rgb(0, 0, 0) 1px 2px 3px;
                  }
                  #PARAGRAPH46 {
                      width: 156px;
                      top: 104px;
                      left: 359.5px;
                  }
                  #PARAGRAPH46 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH47 {
                      width: 142px;
                      top: 104px;
                      left: 507.5px;
                  }
                  #PARAGRAPH47 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH48 {
                      width: 186px;
                      top: 104px;
                      left: 862px;
                  }
                  #PARAGRAPH48 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH49 {
                      width: 186px;
                      top: 104px;
                      left: 677px;
                  }
                  #PARAGRAPH49 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH50 {
                      width: 148px;
                      top: 163.5px;
                      left: 359.5px;
                  }
                  #PARAGRAPH50 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH51 {
                      width: 186px;
                      top: 163.5px;
                      left: 507.5px;
                  }
                  #PARAGRAPH51 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH52 {
                      width: 186px;
                      top: 163.5px;
                      left: 677px;
                  }
                  #PARAGRAPH52 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #IMAGE53 {
                      width: 200px;
                      height: 109.589px;
                      top: 85px;
                      left: 140px;
                  }
                  #IMAGE53 > .ladi-image > .ladi-image-background {
                      width: 200px;
                      height: 109.589px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/footer_06-20200722095736.png");
                  }
                  #PARAGRAPH54 {
                      width: 186px;
                      top: 163.5px;
                      left: 862px;
                  }
                  #PARAGRAPH54 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      font-weight: bold;
                      line-height: 1.6;
                  }
                  #SECTION58 {
                      height: 1420.9px;
                  }
                  #SECTION58 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s1440x1420/5d3c13acdc09063fd1918045/51-20201118095542.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(71%) blur(15px);
                  }
                  #IMAGE76 {
                      width: 1156.5px;
                      height: 771px;
                      top: 104.833px;
                      left: 21.75px;
                  }
                  #IMAGE76 > .ladi-image > .ladi-image-background {
                      width: 1156.5px;
                      height: 771px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/2-20201118095600.jpg");
                  }
                  #IMAGE77 {
                      width: 1156.5px;
                      height: 771px;
                      top: 899.83px;
                      left: 21.75px;
                  }
                  #IMAGE77 > .ladi-image > .ladi-image-background {
                      width: 1156.5px;
                      height: 771px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/1-20201118095559.jpg");
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
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/3-20201118095601.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/7-20201118095604.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/8-20201118095605.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/9-20201118095606.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/10-20201118095607.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/11-20201118095626.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/12-20201118095627.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/13-20201118095628.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/14-20201118095629.jpg");
                  }
                  #IMAGE100 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                  }
                  #IMAGE100 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/15-20201118095630.jpg");
                  }
                  #IMAGE101 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 592.958px;
                  }
                  #IMAGE101 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/16-20201118095631.jpg");
                  }
                  #GROUP108 {
                      width: 1168.44px;
                      height: 383.654px;
                      top: 2542.21px;
                      left: 19px;
                  }
                  #IMAGE110 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                  }
                  #IMAGE110 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/17-20201118095632.jpg");
                  }
                  #IMAGE111 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 592.958px;
                  }
                  #IMAGE111 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/18-20201118095633.jpg");
                  }
                  #IMAGE117 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 406.16px;
                      left: 0px;
                  }
                  #IMAGE117 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/19-20201118095634.jpg");
                  }
                  #IMAGE118 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 406.16px;
                      left: 592.958px;
                  }
                  #IMAGE118 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/20-20201118095635.jpg");
                  }
                  #GROUP119 {
                      width: 1168.44px;
                      height: 789.814px;
                      top: 3003.21px;
                      left: 15.78px;
                  }
                  #IMAGE121 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4231.95px;
                      left: 15.78px;
                  }
                  #IMAGE121 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/24-20201118095704.jpg");
                  }
                  #IMAGE122 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4231.95px;
                      left: 608.738px;
                  }
                  #IMAGE122 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/25-20201118095704.jpg");
                  }
                  #IMAGE123 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3825.79px;
                      left: 15.78px;
                  }
                  #IMAGE123 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/21-20201118095659.jpg");
                  }
                  #IMAGE124 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 3825.79px;
                      left: 608.738px;
                  }
                  #IMAGE124 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/23-20201118095701.jpg");
                  }
                  #IMAGE126 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4637.54px;
                      left: 15.78px;
                  }
                  #IMAGE126 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/27-20201118095705.jpg");
                  }
                  #IMAGE129 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4637.54px;
                      left: 608.738px;
                  }
                  #IMAGE129 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/28-20201118095706.jpg");
                  }
                  #IMAGE162 {
                      width: 1168.44px;
                      height: 875.859px;
                      top: 487.6px;
                      left: 15.78px;
                  }
                  #IMAGE162 > .ladi-image > .ladi-image-background {
                      width: 1168.44px;
                      height: 875.859px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1200/5d3c13acdc09063fd1918045/4-20201118095602.jpg");
                  }
                  #IMAGE164 {
                      width: 574.71px;
                      height: 430.801px;
                      top: 36.165px;
                      left: 609.51px;
                  }
                  #IMAGE164 > .ladi-image > .ladi-image-background {
                      width: 574.71px;
                      height: 430.801px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x750/5d3c13acdc09063fd1918045/5-20201118095602.jpg");
                  }
                  #IMAGE165 {
                      width: 574.71px;
                      height: 430.801px;
                      top: 36.165px;
                      left: 15.78px;
                  }
                  #IMAGE165 > .ladi-image > .ladi-image-background {
                      width: 574.71px;
                      height: 430.801px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x750/5d3c13acdc09063fd1918045/6-20201118095603.jpg");
                  }
                  #IMAGE167 {
                      width: 181px;
                      height: 71px;
                      top: 32.5px;
                      left: 491.5px;
                  }
                  #IMAGE167 > .ladi-image > .ladi-image-background {
                      width: 181px;
                      height: 71px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-trang-hnc-20200707091243.png");
                  }
                  #IMAGE168 {
                      width: 575.482px;
                      height: 383.655px;
                      top: 5041.02px;
                      left: 608.738px;
                  }
                  #IMAGE168 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.655px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/31-20201118095709.jpg");
                  }
                  #IMAGE169 {
                      width: 580.956px;
                      height: 387.304px;
                      top: 5039.2px;
                      left: 10.306px;
                  }
                  #IMAGE169 > .ladi-image > .ladi-image-background {
                      width: 580.956px;
                      height: 387.304px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/32-20201118095709.jpg");
                  }
                  #IMAGE170 {
                      width: 575.482px;
                      height: 383.655px;
                      top: 5442.53px;
                      left: 608.738px;
                  }
                  #IMAGE170 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.655px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/33-20201118095710.jpg");
                  }
                  #IMAGE171 {
                      width: 575.483px;
                      height: 383.655px;
                      top: 5442.53px;
                      left: 10.306px;
                  }
                  #IMAGE171 > .ladi-image > .ladi-image-background {
                      width: 575.483px;
                      height: 383.655px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/34-20201118095731.jpg");
                  }
                  #IMAGE172 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5843.53px;
                      left: 10.306px;
                  }
                  #IMAGE172 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/36-20201118095733.jpg");
                  }
                  #IMAGE173 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5843.53px;
                      left: 608.738px;
                  }
                  #IMAGE173 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/35-20201118095732.jpg");
                  }
                  #IMAGE175 {
                      width: 575.482px;
                      height: 383.655px;
                      top: 6251.53px;
                      left: 608.738px;
                  }
                  #IMAGE175 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.655px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/38-20201118095736.jpg");
                  }
                  #IMAGE176 {
                      width: 570.008px;
                      height: 380.005px;
                      top: 6251.53px;
                      left: 15.78px;
                  }
                  #IMAGE176 > .ladi-image > .ladi-image-background {
                      width: 570.008px;
                      height: 380.005px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/40-20201118095738.jpg");
                  }
                  #IMAGE177 {
                      width: 575.482px;
                      height: 383.655px;
                      top: 6656.53px;
                      left: 608.738px;
                  }
                  #IMAGE177 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.655px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/42-20201118095740.jpg");
                  }
                  #IMAGE178 {
                      width: 570.008px;
                      height: 380.005px;
                      top: 6656.53px;
                      left: 15.78px;
                  }
                  #IMAGE178 > .ladi-image > .ladi-image-background {
                      width: 570.008px;
                      height: 380.005px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/41-20201118095739.jpg");
                  }
                  #IMAGE179 {
                      width: 577.273px;
                      height: 384.848px;
                      top: 7050.53px;
                      left: 15.78px;
                  }
                  #IMAGE179 > .ladi-image > .ladi-image-background {
                      width: 577.273px;
                      height: 384.848px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/43-20201118095741.jpg");
                  }
                  #IMAGE180 {
                      width: 577.272px;
                      height: 384.848px;
                      top: 7050.53px;
                      left: 608.738px;
                  }
                  #IMAGE180 > .ladi-image > .ladi-image-background {
                      width: 577.272px;
                      height: 384.848px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/47-20201118095801.jpg");
                  }
                  #IMAGE181 {
                      width: 574.71px;
                      height: 383.14px;
                      top: 7451.53px;
                      left: 15.78px;
                  }
                  #IMAGE181 > .ladi-image > .ladi-image-background {
                      width: 574.71px;
                      height: 383.14px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/49-20201118095803.jpg");
                  }
                  #IMAGE182 {
                      width: 578.772px;
                      height: 385.848px;
                      top: 7451.53px;
                      left: 608.738px;
                  }
                  #IMAGE182 > .ladi-image > .ladi-image-background {
                      width: 578.772px;
                      height: 385.848px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/48-20201118095802.jpg");
                  }
              }
              @media (max-width: 767px) {
                  #SECTION_POPUP {
                      height: 0px;
                  }
                  #SECTION1 {
                      height: 1022.33px;
                  }
                  #SECTION1 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s768x1022/5d3c13acdc09063fd1918045/1-20201118073419.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(75%) blur(12px);
                  }
                  #HEADLINE3 {
                      width: 400px;
                      top: 172px;
                      left: 0px;
                  }
                  #HEADLINE3 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 25px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1.6;
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
                      height: 8580.8px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #SECTION44 {
                      height: 647.589px;
                  }
                  #SECTION44 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: fixed;
                      background-image: url("https://w.ladicdn.com/s768x647/5d3c13acdc09063fd1918045/background-20200722081309.png");
                      background-position: center top;
                      background-repeat: repeat;
                  }
                  #HEADLINE45 {
                      width: 400px;
                      top: 48px;
                      left: 10px;
                  }
                  #HEADLINE45 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 18px;
                      font-weight: bold;
                      text-align: center;
                      line-height: 1.6;
                      text-shadow: rgb(0, 0, 0) 1px 2px 3px;
                  }
                  #PARAGRAPH46 {
                      width: 156px;
                      top: 200px;
                      left: 21.808px;
                  }
                  #PARAGRAPH46 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH47 {
                      width: 142px;
                      top: 195.589px;
                      left: 214.308px;
                  }
                  #PARAGRAPH47 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH48 {
                      width: 186px;
                      top: 272.589px;
                      left: 218.49px;
                  }
                  #PARAGRAPH48 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH49 {
                      width: 186px;
                      top: 272.589px;
                      left: 21.808px;
                  }
                  #PARAGRAPH49 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH50 {
                      width: 148px;
                      top: 344.589px;
                      left: 21.808px;
                  }
                  #PARAGRAPH50 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH51 {
                      width: 186px;
                      top: 344.589px;
                      left: 210.308px;
                  }
                  #PARAGRAPH51 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH52 {
                      width: 186px;
                      top: 428.589px;
                      left: 21.808px;
                  }
                  #PARAGRAPH52 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #IMAGE53 {
                      width: 200px;
                      height: 109.589px;
                      top: 80px;
                      left: 110px;
                  }
                  #IMAGE53 > .ladi-image > .ladi-image-background {
                      width: 200px;
                      height: 109.589px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/footer_06-20200722095736.png");
                  }
                  #PARAGRAPH54 {
                      width: 186px;
                      top: 428.589px;
                      left: 206.808px;
                  }
                  #PARAGRAPH54 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      font-weight: bold;
                      line-height: 1.6;
                  }
                  #SECTION58 {
                      height: 958.089px;
                  }
                  #SECTION58 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s768x958/5d3c13acdc09063fd1918045/51-20201118095542.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(71%) blur(15px);
                  }
                  #IMAGE76 {
                      width: 400px;
                      height: 266.667px;
                      top: 467px;
                      left: 10px;
                  }
                  #IMAGE76 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/2-20201118095600.jpg");
                  }
                  #IMAGE77 {
                      width: 400px;
                      height: 266.667px;
                      top: 743.667px;
                      left: 10px;
                  }
                  #IMAGE77 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/1-20201118095559.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/3-20201118095601.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/7-20201118095604.jpg");
                  }
                  #IMAGE85 {
                      width: 400px;
                      height: 266.666px;
                      top: 8294.13px;
                      left: 10px;
                  }
                  #IMAGE85 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/8-20201118095605.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/9-20201118095606.jpg");
                  }
                  #IMAGE92 {
                      width: 400px;
                      height: 266.666px;
                      top: 8017.47px;
                      left: 10px;
                  }
                  #IMAGE92 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/10-20201118095607.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/11-20201118095626.jpg");
                  }
                  #IMAGE95 {
                      width: 400px;
                      height: 266.666px;
                      top: 7740.8px;
                      left: 10px;
                  }
                  #IMAGE95 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/12-20201118095627.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/13-20201118095628.jpg");
                  }
                  #IMAGE98 {
                      width: 400px;
                      height: 266.666px;
                      top: 7464.13px;
                      left: 10px;
                  }
                  #IMAGE98 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/14-20201118095629.jpg");
                  }
                  #IMAGE100 {
                      width: 200.572px;
                      height: 133.714px;
                      top: 0px;
                      left: 0px;
                  }
                  #IMAGE100 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.714px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/15-20201118095630.jpg");
                  }
                  #IMAGE101 {
                      width: 200.572px;
                      height: 133.714px;
                      top: 0px;
                      left: 206.662px;
                  }
                  #IMAGE101 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.714px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/16-20201118095631.jpg");
                  }
                  #GROUP108 {
                      width: 407.234px;
                      height: 133.714px;
                      top: 1490.33px;
                      left: 6px;
                  }
                  #IMAGE110 {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 0px;
                  }
                  #IMAGE110 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/17-20201118095632.jpg");
                  }
                  #IMAGE111 {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 206.662px;
                  }
                  #IMAGE111 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/18-20201118095633.jpg");
                  }
                  #IMAGE117 {
                      width: 200.572px;
                      height: 133.715px;
                      top: 141.558px;
                      left: 0px;
                  }
                  #IMAGE117 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/19-20201118095634.jpg");
                  }
                  #IMAGE118 {
                      width: 200.572px;
                      height: 133.715px;
                      top: 141.558px;
                      left: 206.662px;
                  }
                  #IMAGE118 > .ladi-image > .ladi-image-background {
                      width: 200.572px;
                      height: 133.715px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s550x450/5d3c13acdc09063fd1918045/20-20201118095635.jpg");
                  }
                  #GROUP119 {
                      width: 407.234px;
                      height: 275.273px;
                      top: 1627.53px;
                      left: 6px;
                  }
                  #IMAGE121 {
                      width: 400px;
                      height: 266.666px;
                      top: 2207.47px;
                      left: 10px;
                  }
                  #IMAGE121 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/24-20201118095704.jpg");
                  }
                  #IMAGE122 {
                      width: 400px;
                      height: 266.666px;
                      top: 6910.8px;
                      left: 10px;
                  }
                  #IMAGE122 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/25-20201118095704.jpg");
                  }
                  #IMAGE123 {
                      width: 400px;
                      height: 266.666px;
                      top: 1930.8px;
                      left: 10px;
                  }
                  #IMAGE123 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/21-20201118095659.jpg");
                  }
                  #IMAGE124 {
                      width: 400px;
                      height: 266.666px;
                      top: 7187.47px;
                      left: 10px;
                  }
                  #IMAGE124 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/23-20201118095701.jpg");
                  }
                  #IMAGE126 {
                      width: 400px;
                      height: 266.666px;
                      top: 2484.13px;
                      left: 10px;
                  }
                  #IMAGE126 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/27-20201118095705.jpg");
                  }
                  #IMAGE129 {
                      width: 400px;
                      height: 266.666px;
                      top: 6634.13px;
                      left: 10px;
                  }
                  #IMAGE129 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/28-20201118095706.jpg");
                  }
                  #IMAGE162 {
                      width: 400px;
                      height: 299.839px;
                      top: 641.356px;
                      left: 20px;
                  }
                  #IMAGE162 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 299.839px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/4-20201118095602.jpg");
                  }
                  #IMAGE164 {
                      width: 400px;
                      height: 299.839px;
                      top: 21.678px;
                      left: 20px;
                  }
                  #IMAGE164 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 299.839px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/5-20201118095602.jpg");
                  }
                  #IMAGE165 {
                      width: 400px;
                      height: 299.839px;
                      top: 331.517px;
                      left: 10px;
                  }
                  #IMAGE165 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 299.839px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/6-20201118095603.jpg");
                  }
                  #IMAGE167 {
                      width: 181px;
                      height: 71px;
                      top: 10px;
                      left: 119.5px;
                  }
                  #IMAGE167 > .ladi-image > .ladi-image-background {
                      width: 181px;
                      height: 71px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/logo-trang-hnc-20200707091243.png");
                  }
                  #IMAGE168 {
                      width: 400px;
                      height: 266.667px;
                      top: 3037.46px;
                      left: 10px;
                  }
                  #IMAGE168 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/31-20201118095709.jpg");
                  }
                  #IMAGE169 {
                      width: 400px;
                      height: 266.667px;
                      top: 2760.8px;
                      left: 10px;
                  }
                  #IMAGE169 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/32-20201118095709.jpg");
                  }
                  #IMAGE170 {
                      width: 400px;
                      height: 266.667px;
                      top: 3314.13px;
                      left: 10px;
                  }
                  #IMAGE170 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/33-20201118095710.jpg");
                  }
                  #IMAGE171 {
                      width: 400px;
                      height: 266.666px;
                      top: 6357.46px;
                      left: 10px;
                  }
                  #IMAGE171 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/34-20201118095731.jpg");
                  }
                  #IMAGE172 {
                      width: 400px;
                      height: 266.666px;
                      top: 3590.8px;
                      left: 10px;
                  }
                  #IMAGE172 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/36-20201118095733.jpg");
                  }
                  #IMAGE173 {
                      width: 400px;
                      height: 266.666px;
                      top: 6080.8px;
                      left: 10px;
                  }
                  #IMAGE173 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/35-20201118095732.jpg");
                  }
                  #IMAGE175 {
                      width: 400px;
                      height: 266.667px;
                      top: 3867.46px;
                      left: 10px;
                  }
                  #IMAGE175 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/38-20201118095736.jpg");
                  }
                  #IMAGE176 {
                      width: 400px;
                      height: 266.666px;
                      top: 4144.13px;
                      left: 10px;
                  }
                  #IMAGE176 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/40-20201118095738.jpg");
                  }
                  #IMAGE177 {
                      width: 400px;
                      height: 266.667px;
                      top: 4420.8px;
                      left: 10px;
                  }
                  #IMAGE177 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/42-20201118095740.jpg");
                  }
                  #IMAGE178 {
                      width: 400px;
                      height: 266.666px;
                      top: 4697.46px;
                      left: 10px;
                  }
                  #IMAGE178 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/41-20201118095739.jpg");
                  }
                  #IMAGE179 {
                      width: 400px;
                      height: 266.666px;
                      top: 4974.13px;
                      left: 10px;
                  }
                  #IMAGE179 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/43-20201118095741.jpg");
                  }
                  #IMAGE180 {
                      width: 400px;
                      height: 266.667px;
                      top: 5804.13px;
                      left: 10px;
                  }
                  #IMAGE180 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/47-20201118095801.jpg");
                  }
                  #IMAGE181 {
                      width: 400px;
                      height: 266.667px;
                      top: 5250.8px;
                      left: 10px;
                  }
                  #IMAGE181 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/49-20201118095803.jpg");
                  }
                  #IMAGE182 {
                      width: 400px;
                      height: 266.667px;
                      top: 5527.46px;
                      left: 10px;
                  }
                  #IMAGE182 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.667px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/48-20201118095802.jpg");
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
              
              <div id="SECTION38" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container">
                      <div id="HEADLINE39" class="ladi-element">
                          <h3 class="ladi-headline">Hình Ảnh Của Showroom HACOM Hải Phòng<br /></h3>
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
                      <div id="GROUP108" class="ladi-element">
                          <div class="ladi-group">
                              <div id="IMAGE100" class="ladi-element">
                                  <div class="ladi-image"><div class="ladi-image-background"></div></div>
                              </div>
                              <div id="IMAGE101" class="ladi-element">
                                  <div class="ladi-image"><div class="ladi-image-background"></div></div>
                              </div>
                          </div>
                      </div>
                      <div id="GROUP119" class="ladi-element">
                          <div class="ladi-group">
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
                          </div>
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
                      <div id="IMAGE126" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE129" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE168" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE169" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE170" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE171" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE172" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE173" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE175" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE176" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE177" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE178" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE179" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE180" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE181" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE182" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                  </div>
              </div>
              <div id="SECTION58" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container">
                      <div id="IMAGE164" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE162" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE165" class="ladi-element">
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
              <script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1607136849102"></script>
              <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1607136849102"></script>
          <![endif]-->
          <link href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://w.ladicdn.com/v2/source/ladipage.min.css?v=1607136849102" rel="stylesheet" type="text/css" />
          <script src="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1607136849102" type="text/javascript"></script>
          <script id="script_event_data" type="text/javascript">
              (function () {
                  var run = function () {
                      if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
                          setTimeout(run, 100);
                          return;
                      }
                      window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
                      window.LadiPageScript.runtime.ladipage_id = "5fcafaaaf711010011f02e5d";
                      window.LadiPageScript.runtime.publish_platform = "LADIPAGE";
                      window.LadiPageScript.runtime.isMobileOnly = false;
                      window.LadiPageScript.runtime.DOMAIN_FREE = [];
                      window.LadiPageScript.runtime.bodyFontSize = 12;
                      window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045";
                      window.LadiPageScript.runtime.time_zone = 7;
                      window.LadiPageScript.runtime.currency = "VND";
                      window.LadiPageScript.runtime.eventData =
                          "%7B%22SECTION_POPUP%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22SECTION1%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION38%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22gradient%22%2C%22mobile.option.background-style%22%3A%22gradient%22%7D%2C%22SECTION44%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22SECTION58%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22IMAGE167%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22link%22%2C%22action%22%3A%22https%3A%2F%2Fwww.hanoicomputer.vn%2F%22%2C%22target%22%3A%22_blank%22%7D%7D%7D";
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
