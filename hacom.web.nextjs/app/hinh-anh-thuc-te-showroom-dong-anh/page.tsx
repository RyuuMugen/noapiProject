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
          <title>showroom Đông Anh</title>
          <meta http-equiv="Cache-Control" content="no-cache" />
          <meta http-equiv="Expires" content="-1" />
          <meta name="keywords" content="" />
          <meta name="description" content="showroom Đông Anh" />
          <script type="text/javascript">
              window.ladi_viewport = function () {
                  var screen_width = window.ladi_screen_width || window.screen.width;
                  var width = window.outerWidth > 0 ? window.outerWidth : screen_width;
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
                  if (!is_desktop && widthDevice != screen_width && screen_width > 0) {
                      scale = screen_width / widthDevice;
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
              window.ladi_fbq_data = [];
              window.ladi_fbq = function (track_name, conversion_name, data, event_data) {
                  window.ladi_fbq_data.push([track_name, conversion_name, data, event_data]);
              };
          </script>
          <meta property="og:title" content="showroom Đông Anh" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="showroom Đông Anh" />
          <meta name="format-detection" content="telephone=no" />
          <link rel="dns-prefetch" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
          <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin />
          <link rel="preconnect" href="https://api.form.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://a.ladipage.com/" crossorigin />
          <link rel="preconnect" href="https://api.ladisales.com/" crossorigin />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" as="style" onload="this.onload = null; this.rel = 'stylesheet';" />
          <link rel="preload" href="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1645155547610" as="script" />
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
              .ladi-html strong {
                  font-weight: 700;
              }
              .ladi-html em {
                  font-style: italic;
              }
              .ladi-html a {
                  text-decoration: underline;
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
              .height-0 {
                  height: 0 !important;
              }
              .transition-readmore {
                  transition: height 350ms linear 0s;
              }
              .transition-collapse {
                  transition: height 150ms linear 0s;
              }
              .transition-parent-collapse-height {
                  transition: height 150ms linear 0s;
              }
              .transition-parent-collapse-top {
                  transition: top 150ms linear 0s;
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
              .ladi-wraper {
                  width: 100%;
                  height: 100%;
                  min-height: 100vh;
                  overflow: hidden;
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
              .ladi-section .ladi-section-arrow-down {
                  position: absolute;
                  bottom: 0;
                  right: 0;
                  left: 0;
                  margin: auto;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-section .ladi-section-close {
                  position: absolute;
                  top: 0;
                  right: 0;
                  cursor: pointer;
                  z-index: 90000040;
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
              .ladi-survey {
                  width: 100%;
                  display: inline-block;
              }
              .ladi-survey .ladi-survey-option {
                  cursor: pointer;
                  position: relative;
                  display: inline-block;
                  text-decoration-line: inherit;
                  -webkit-text-decoration-line: inherit;
                  transition: inherit;
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-survey .ladi-survey-option-background {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  pointer-events: none;
                  transition: inherit;
              }
              .ladi-survey .ladi-survey-option-label {
                  display: block;
                  text-decoration-line: inherit;
                  -webkit-text-decoration-line: inherit;
                  position: relative;
              }
              .ladi-survey .ladi-survey-option-image {
                  background-size: cover;
                  background-position: center center;
                  pointer-events: none;
                  vertical-align: middle;
                  border-radius: inherit;
                  position: relative;
              }
              .ladi-survey .ladi-survey-button-next {
                  display: block;
              }
              .ladi-survey .ladi-survey-button-next.empty {
                  display: none;
              }
              .ladi-survey .ladi-survey-button-next.no-select {
                  display: none;
              }
              .ladi-survey .ladi-survey-button-next button {
                  background-color: #fff;
                  border: 1px solid #eee;
                  padding: 5px 10px;
                  cursor: pointer;
                  border-radius: 2px;
              }
              .ladi-survey .ladi-survey-button-next button:active {
                  transform: translateY(2px);
                  transition: transform 0.2s linear;
              }
              .ladi-carousel {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  overflow: hidden;
                  touch-action: pan-y;
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
                  top: calc(50% - (33px) / 2);
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-carousel .ladi-carousel-arrow-left {
                  left: 5px;
                  transform: rotate(180deg);
                  -webkit-transform: rotate(180deg);
              }
              .ladi-carousel .ladi-carousel-arrow-right {
                  right: 5px;
              }
              .ladi-gallery {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-gallery .ladi-gallery-view {
                  position: absolute;
                  overflow: hidden;
                  touch-action: pan-y;
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
                  touch-action: pan-y;
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
                  top: calc(50% - (33px) / 2);
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-left {
                  left: 5px;
                  transform: rotate(180deg);
                  -webkit-transform: rotate(180deg);
              }
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-right {
                  right: 5px;
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {
                  position: absolute;
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow,
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow {
                  top: calc(50% - (33px) / 2);
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  left: 0;
                  transform: rotate(180deg) scale(0.6);
                  -webkit-transform: rotate(180deg) scale(0.6);
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  right: 0;
                  transform: scale(0.6);
                  -webkit-transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  left: 0;
                  transform: rotate(180deg) scale(0.6);
                  -webkit-transform: rotate(180deg) scale(0.6);
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  right: 0;
                  transform: scale(0.6);
                  -webkit-transform: scale(0.6);
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow,
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow {
                  left: calc(50% - (33px) / 2);
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  top: 0;
                  transform: scale(0.6) rotate(270deg);
                  -webkit-transform: scale(0.6) rotate(270deg);
              }
              .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  bottom: 0;
                  transform: scale(0.6) rotate(90deg);
                  -webkit-transform: scale(0.6) rotate(90deg);
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-left {
                  top: 0;
                  transform: scale(0.6) rotate(270deg);
                  -webkit-transform: scale(0.6) rotate(270deg);
              }
              .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-right {
                  bottom: 0;
                  transform: scale(0.6) rotate(90deg);
                  -webkit-transform: scale(0.6) rotate(90deg);
              }
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box {
                  position: relative;
              }
              .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-box {
                  display: -webkit-inline-flex;
                  display: inline-flex;
                  left: 0;
                  transition: left 150ms ease-in-out;
              }
              .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-box {
                  display: -webkit-inline-flex;
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
              .ladi-tabs {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-tabs .ladi-tabs-background {
                  height: 100%;
                  width: 100%;
                  pointer-events: none;
              }
              .ladi-tabs > .ladi-element[data-index] {
                  display: none;
              }
              .ladi-tabs > .ladi-element.selected[data-index] {
                  display: block;
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
                  transition: inherit;
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
              #SECTION_POPUP .ladi-container > .ladi-element[data-fixed-close="true"] {
                  position: relative !important;
              }
              #SECTION_POPUP .ladi-container > .ladi-element.hide-visibility {
                  display: block !important;
                  visibility: hidden !important;
              }
              #SECTION_POPUP .popup-close {
                  position: absolute;
                  right: 0;
                  top: 0;
                  z-index: 9000000080;
                  cursor: pointer;
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
                  transition: inherit;
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
              }
              .ladi-collection .ladi-collection-content .ladi-collection-page {
                  float: left;
              }
              .ladi-collection .ladi-collection-arrow {
                  position: absolute;
                  top: calc(50% - (33px) / 2);
                  cursor: pointer;
                  z-index: 90000040;
              }
              .ladi-collection .ladi-collection-arrow-left {
                  left: 5px;
                  transform: rotate(180deg);
                  -webkit-transform: rotate(180deg);
              }
              .ladi-collection .ladi-collection-arrow-right {
                  right: 5px;
              }
              .ladi-collection .ladi-collection-button-next {
                  position: absolute;
                  bottom: -40px;
                  right: 0;
                  left: 0;
                  margin: auto;
                  cursor: pointer;
                  z-index: 90000040;
                  transform: rotate(90deg);
                  -webkit-transform: rotate(90deg);
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
              .ladi-form > [data-quantity="true"] .ladi-form-item-container {
                  overflow: hidden;
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
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-2 {
                  width: calc(100% / 2 - 5px);
                  max-width: calc(100% / 2 - 5px);
                  min-width: calc(100% / 2 - 5px);
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-2:nth-child(3) {
                  margin-left: 7.5px;
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
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select {
                  text-transform: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select:not([data-selected=""]) {
                  text-decoration: inherit;
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
              .ladi-form .ladi-form-item-title-value {
                  font-weight: 700;
                  word-break: break-word;
              }
              .ladi-form .ladi-form-label-container {
                  position: relative;
                  width: 100%;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item {
                  display: inline-block;
                  cursor: pointer;
                  position: relative;
                  border-radius: 0 !important;
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.image {
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.no-value {
                  display: none !important;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.text.disabled {
                  opacity: 0.35;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.image.disabled {
                  opacity: 0.2;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.color.disabled {
                  opacity: 0.15;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.selected:before {
                  content: "";
                  width: 0;
                  height: 0;
                  bottom: -1px;
                  right: -1px;
                  position: absolute;
                  border-width: 0 0 15px 15px;
                  border-color: transparent;
                  border-style: solid;
              }
              .ladi-form .ladi-form-label-container .ladi-form-label-item.selected:after {
                  content: "";
                  background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 12 12' viewBox='0 0 12 12' x='0' fill='%23fff' y='0'%3E%3Cg%3E%3Cpath d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
                  background-repeat: no-repeat;
                  background-position: bottom right;
                  width: 7px;
                  height: 7px;
                  bottom: 0;
                  right: 0;
                  position: absolute;
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
              .ladi-combobox {
                  position: absolute;
                  width: 100%;
                  height: 100%;
              }
              .ladi-combobox .ladi-combobox-item-container {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item-background {
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  pointer-events: none;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
              }
              .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item {
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  text-transform: inherit;
                  text-decoration: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
              }
              .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control option {
                  color: initial;
              }
              .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control {
                  background-color: transparent;
                  min-width: 100%;
                  min-height: 100%;
                  max-width: 100%;
                  max-height: 100%;
                  width: 100%;
                  height: 100%;
                  padding: 0 5px;
                  font-size: inherit;
                  border: none;
                  text-transform: inherit;
                  text-align: inherit;
                  letter-spacing: inherit;
                  color: inherit;
                  background-size: inherit;
                  background-attachment: inherit;
                  background-origin: inherit;
                  -webkit-appearance: none;
                  -moz-appearance: none;
                  appearance: none;
                  background-size: 9px 6px !important;
                  background-position: right 0.5rem center;
                  background-repeat: no-repeat;
              }
              .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control:not([data-selected=""]) {
                  text-decoration: inherit;
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
                  word-break: break-word;
              }
              .ladi-cart .ladi-cart-title .ladi-cart-title-variant {
                  font-weight: 700;
                  display: block;
                  word-break: break-word;
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
                  display: -webkit-inline-flex;
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
                  padding: 0 10px 0 5px;
              }
              .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-price span {
                  text-decoration: line-through;
                  display: block;
                  margin-bottom: 3px;
              }
              .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-price span.price-compare {
                  text-decoration: none;
                  color: #e85d04;
                  font-weight: 700;
                  margin-bottom: 0;
              }
              .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-title span.promotion-name {
                  margin-top: 5px;
                  display: block;
                  word-break: break-word;
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
              .ladi-button-group > .ladi-element {
                  transition: inherit;
              }
              .ladi-button-group > .ladi-element > .ladi-button {
                  transition: inherit;
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
              .button-unmute {
                  cursor: pointer;
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
              }
              .button-unmute div {
                  background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2036%2036%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22m%2021.48%2C17.98%20c%200%2C-1.77%20-1.02%2C-3.29%20-2.5%2C-4.03%20v%202.21%20l%202.45%2C2.45%20c%20.03%2C-0.2%20.05%2C-0.41%20.05%2C-0.63%20z%20m%202.5%2C0%20c%200%2C.94%20-0.2%2C1.82%20-0.54%2C2.64%20l%201.51%2C1.51%20c%20.66%2C-1.24%201.03%2C-2.65%201.03%2C-4.15%200%2C-4.28%20-2.99%2C-7.86%20-7%2C-8.76%20v%202.05%20c%202.89%2C.86%205%2C3.54%205%2C6.71%20z%20M%209.25%2C8.98%20l%20-1.27%2C1.26%204.72%2C4.73%20H%207.98%20v%206%20H%2011.98%20l%205%2C5%20v%20-6.73%20l%204.25%2C4.25%20c%20-0.67%2C.52%20-1.42%2C.93%20-2.25%2C1.18%20v%202.06%20c%201.38%2C-0.31%202.63%2C-0.95%203.69%2C-1.81%20l%202.04%2C2.05%201.27%2C-1.27%20-9%2C-9%20-7.72%2C-7.72%20z%20m%207.72%2C.99%20-2.09%2C2.08%202.09%2C2.09%20V%209.98%20z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  width: 60px;
                  height: 60px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  bottom: 0;
                  right: 0;
                  margin: auto;
                  background-color: rgba(0, 0, 0, 0.5);
                  border-radius: 100%;
                  background-size: 90%;
                  background-repeat: no-repeat;
                  background-position: center center;
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
                  position: absolute;
                  z-index: 9000000090;
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
              .ladi-cart-number {
                  position: absolute;
                  top: -2px;
                  right: -7px;
                  background: #f36e36;
                  text-align: center;
                  width: 18px;
                  height: 18px;
                  line-height: 18px;
                  font-size: 11px;
                  font-weight: 700;
                  color: #fff;
                  border-radius: 100%;
              }
              .ladi-form-quantity {
                  display: -webkit-inline-flex;
                  display: inline-flex;
                  border-color: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity .ladi-form-control {
                  text-align: center;
                  pointer-events: none;
                  -moz-appearance: textfield;
                  width: calc(100% - 45px);
                  padding: 0;
                  min-width: 24px;
                  border-top: 1px hidden;
                  border-bottom: 1px hidden;
                  border-color: inherit;
              }
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity input::-webkit-inner-spin-button,
              .ladi-form > .ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity input::-webkit-outer-spin-button {
                  -webkit-appearance: none;
                  margin: 0;
              }
              .ladi-form-quantity button {
                  border: 1px hidden;
                  border-color: inherit;
                  cursor: pointer;
                  text-align: center;
                  width: 30px;
                  height: 100%;
                  position: relative;
                  user-select: none;
                  -webkit-user-select: none;
                  -moz-user-select: none;
                  -ms-user-select: none;
              }
              .ladi-form-quantity button span {
                  font-size: 18px;
                  position: relative;
                  left: 0.5px;
              }
              .ladi-form-quantity button:first-child span {
                  top: -1.2px;
              }
              .ladi-form [data-variant="true"] select option[disabled] {
                  background: #fff;
                  color: #b8b8b8 !important;
              }
              .ladi-story-page-progress-bar {
                  width: 100%;
                  height: 25px;
                  position: fixed;
                  top: 0;
                  left: 0;
              }
              .ladi-story-page-progress-bar-item {
                  height: 100%;
                  width: 100%;
                  display: block;
                  float: left;
                  margin: 0 5px;
                  position: relative;
                  cursor: pointer;
              }
              .ladi-story-page-progress-bar-item:before {
                  content: "";
                  position: absolute;
                  background: rgba(255, 255, 255, 0.4);
                  border-radius: 10px;
                  width: 100%;
                  height: 4px;
                  margin: auto;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
              }
              .ladi-story-page-progress-bar-item.active:before {
                  background: #fff;
              }
              .ladi-story-page-progress-bar-item span {
                  background: #fff;
                  border-radius: 10px;
                  height: 4px;
                  display: block;
                  margin: auto 0;
                  top: 0;
                  bottom: 0;
                  position: absolute;
                  transition: width 0.3s linear;
                  width: 0%;
              }
              .ladi-carousel .ladi-carousel-arrow,
              .ladi-collection .ladi-collection-arrow,
              .ladi-collection .ladi-collection-button-next,
              .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow,
              .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow,
              .ladi-section .ladi-section-arrow-down {
                  width: 33px;
                  height: 33px;
                  background-repeat: no-repeat;
                  background-position: center center;
                  background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
              }
              #SECTION_POPUP .popup-close,
              .ladi-section .ladi-section-close,
              .lightbox-screen .lightbox-close {
                  width: 18px;
                  height: 18px;
                  margin: 6px;
                  background-repeat: no-repeat;
                  background-position: center center;
                  background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20148.1%20148.1%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M83.4%2C74l54.1-54.1c2.6-2.6%2C2.6-6.8%2C0-9.3c-2.6-2.6-6.8-2.6-9.3%2C0L74%2C64.7L20%2C10.5c-2.6-2.6-6.8-2.6-9.3%2C0c-2.6%2C2.6-2.6%2C6.8%2C0%2C9.3l54%2C54.1l-54.1%2C54.1c-2.6%2C2.6-2.6%2C6.8%2C0%2C9.3c2.6%2C2.6%2C6.8%2C2.6%2C9.3%2C0l54.1-54l54.1%2C54.1c1.3%2C1.3%2C3%2C1.9%2C4.7%2C1.9s3.4-0.6%2C4.7-1.9c1.3-1.3%2C2-3.1%2C2-4.9c0-1.7-0.8-3.4-2-4.6L83.4%2C74z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
              }
              #BODY_BACKGROUND {
                  position: fixed;
                  pointer-events: none;
                  top: 0;
                  left: 0;
                  right: 0;
                  margin: 0 auto;
                  height: 100vh !important;
              }
              #POPUP_BLOG .ladi-headline img,
              #POPUP_BLOG .ladi-paragraph img {
                  max-width: 100%;
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
                  #POPUP_BLOG .ladi-headline img,
                  #POPUP_BLOG .ladi-paragraph img {
                      height: auto !important;
                  }
              }
              .ladi-notify-transition {
                  transition: top 0.5s ease-in-out, bottom 0.5s ease-in-out, opacity 0.5s ease-in-out;
              }
              .ladi-notify {
                  padding: 5px;
                  box-shadow: 0 0 1px rgba(64, 64, 64, 0.3), 0 8px 50px rgba(64, 64, 64, 0.05);
                  border-radius: 40px;
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
                  -webkit-text-decoration-line: inherit;
                  text-transform: inherit;
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
                  -webkit-text-decoration-line: inherit;
                  text-transform: inherit;
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
                  #SECTION_POPUP .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #SECTION1 {
                      height: 855.5px;
                  }
                  #SECTION1 > .ladi-section-background {
                      background-size: cover;
                      background-attachment: scroll;
                      background-origin: content-box;
                      background-image: url("https://w.ladicdn.com/s1440x855/5d3c13acdc09063fd1918045/1-20201118073419.jpg");
                      background-position: center top;
                      background-repeat: repeat;
                      filter: brightness(75%) blur(12px);
                  }
                  #SECTION1 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
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
                      height: 8384.5px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #SECTION38 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #IMAGE76 {
                      width: 1156.5px;
                      height: 771px;
                      top: 26.833px;
                      left: 21.75px;
                  }
                  #IMAGE76 > .ladi-image > .ladi-image-background {
                      width: 1156.5px;
                      height: 771px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/273030109_120095053901418_6850204940509875955_n-20220222061756.jpg");
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
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/273706895_120094903901433_6877663174115746898_n-20220222061833.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273024777_120095000568090_4152966004690273190_n-20220222061744.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273876200_120094933901430_4531815404309634059_n-20220222061850.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273841916_120095273901396_609795937307257811_n-20220222061849.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273829636_120095650568025_3351064394578735810_n-20220222061848.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273977403_120095177234739_6624771176345891942_n-20220222061852.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273937820_120095377234719_5477079328530283587_n-20220222061851.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273763412_120094967234760_4077729840929435321_n-20220222061846.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273745184_120095477234709_4703090771114701956_n-20220222061844.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273696176_120096013901322_4521099332119161924_n-20220222061832.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273682211_120095830568007_6018582356584325534_n-20220222061831.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273681836_120095700568020_4830307919726504624_n-20220222061830.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273665689_120095893901334_6805332090891258509_n-20220222061829.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273662690_120095117234745_5696382186035965448_n-20220222061828.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273640773_120096120567978_5706486887216298405_n-20220222061827.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273608479_120095203901403_930693539766490636_n-20220222061817.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273580579_120095163901407_8513754135092850704_n-20220222061816.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273623584_120095640568026_6537013204245060429_n-20220222061819.jpg");
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
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273612823_120095807234676_4110630967043249948_n-20220222061818.jpg");
                  }
                  #IMAGE126 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4629.54px;
                      left: 19px;
                  }
                  #IMAGE126 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273579834_120095503901373_9214921498240497001_n-20220222061815.jpg");
                  }
                  #IMAGE129 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 4629.54px;
                      left: 611.958px;
                  }
                  #IMAGE129 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273570522_120096043901319_6880393134733481607_n-20220222061814.jpg");
                  }
                  #SECTION130 {
                      height: 3024.5px;
                  }
                  #SECTION130 > .ladi-section-background {
                      background: rgba(26, 1, 253, 1);
                      background: -webkit-linear-gradient(180deg, rgba(26, 1, 253, 1), rgba(255, 1, 1, 1));
                      background: linear-gradient(180deg, rgba(26, 1, 253, 1), rgba(255, 1, 1, 1));
                  }
                  #SECTION130 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #IMAGE136 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 31.293px;
                      left: 627.239px;
                  }
                  #IMAGE136 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273700988_120095323901391_5262546323416559541_n-20220222061833.jpg");
                  }
                  #IMAGE134 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 31.293px;
                      left: 9.78px;
                  }
                  #IMAGE134 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273723514_120095390568051_8705580480298685853_n-20220222061834.jpg");
                  }
                  #IMAGE134 > .ladi-image {
                      border-color: rgb(238, 203, 20);
                      border-width: 16px;
                  }
                  #IMAGE175 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5481.87px;
                      left: 19px;
                  }
                  #IMAGE175 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273484776_120095297234727_4303099613662805002_n-20220222061802.jpg");
                  }
                  #IMAGE176 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5481.87px;
                      left: 611.958px;
                  }
                  #IMAGE176 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273476562_120095450568045_4718260912639504287_n-20220222061801.jpg");
                  }
                  #IMAGE177 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5075.71px;
                      left: 19px;
                  }
                  #IMAGE177 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273567776_120095960567994_2696468239381536953_n-20220222061813.jpg");
                  }
                  #IMAGE178 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5075.71px;
                      left: 611.958px;
                  }
                  #IMAGE178 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273393374_120094943901429_8547789465857114724_n-20220222061800.jpg");
                  }
                  #IMAGE179 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 6304.45px;
                      left: 19px;
                  }
                  #IMAGE179 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272994609_120095853901338_5147762939406685307_n-20220222061743.jpg");
                  }
                  #IMAGE180 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 6304.45px;
                      left: 611.958px;
                  }
                  #IMAGE180 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272976403_120095877234669_3482920175675942120_n-20220222061742.jpg");
                  }
                  #IMAGE181 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5898.29px;
                      left: 19px;
                  }
                  #IMAGE181 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/273033818_120096093901314_3428574848953053785_n-20220222061757.jpg");
                  }
                  #IMAGE182 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 5898.29px;
                      left: 611.958px;
                  }
                  #IMAGE182 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272996580_120094973901426_1791604337691735399_n-20220222061744.jpg");
                  }
                  #IMAGE183 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 6710.04px;
                      left: 19px;
                  }
                  #IMAGE183 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272968802_120095630568027_8075110572776554842_n-20220222061741.jpg");
                  }
                  #IMAGE184 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 6710.04px;
                      left: 611.958px;
                  }
                  #IMAGE184 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272966917_120095233901400_7751980861152620389_n-20220222061740.jpg");
                  }
                  #IMAGE187 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 7143.71px;
                      left: 611.958px;
                  }
                  #IMAGE187 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272858990_120095983901325_6240995587066790342_n-20220222061738.jpg");
                  }
                  #IMAGE189 {
                      width: 575.482px;
                      height: 383.654px;
                      top: 7143.71px;
                      left: 19px;
                  }
                  #IMAGE189 > .ladi-image > .ladi-image-background {
                      width: 575.482px;
                      height: 383.654px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x700/5d3c13acdc09063fd1918045/272897269_120095257234731_1565754953978175651_n-20220222061739.jpg");
                  }
                  #IMAGE190 {
                      width: 1168.44px;
                      height: 778.959px;
                      top: 7544.71px;
                      left: 19px;
                  }
                  #IMAGE190 > .ladi-image > .ladi-image-background {
                      width: 1168.44px;
                      height: 778.959px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s1500x1100/5d3c13acdc09063fd1918045/272921450_120095937234663_7012944139551138546_n-20220222061739.jpg");
                  }
                  #SECTION210 {
                      height: 332.55px;
                  }
                  #SECTION210 > .ladi-section-background {
                      background-color: rgb(21, 21, 21);
                  }
                  #SECTION210 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #HEADLINE211 {
                      width: 866px;
                      top: 28.7945px;
                      left: 282.627px;
                  }
                  #HEADLINE211 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 36px;
                      font-weight: bold;
                      text-transform: uppercase;
                      line-height: 1.6;
                      text-shadow: rgb(0, 0, 0) 1px 2px 3px;
                  }
                  #PARAGRAPH212 {
                      width: 204px;
                      top: 131.089px;
                      left: 66.501px;
                  }
                  #PARAGRAPH212 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH213 {
                      width: 174px;
                      top: 130.089px;
                      left: 281.627px;
                  }
                  #PARAGRAPH213 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH214 {
                      width: 186px;
                      top: 131.089px;
                      left: 680.127px;
                  }
                  #PARAGRAPH214 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH215 {
                      width: 186px;
                      top: 227.516px;
                      left: 68.501px;
                  }
                  #PARAGRAPH215 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH216 {
                      width: 170px;
                      top: 109.589px;
                      left: 478.127px;
                  }
                  #PARAGRAPH216 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH217 {
                      width: 178px;
                      top: 205.589px;
                      left: 282.627px;
                  }
                  #PARAGRAPH217 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH218 {
                      width: 186px;
                      top: 110.089px;
                      left: 882.13px;
                  }
                  #PARAGRAPH218 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #IMAGE219 {
                      width: 176.627px;
                      height: 71.5709px;
                      top: 28.7945px;
                      left: 66.501px;
                  }
                  #IMAGE219 > .ladi-image > .ladi-image-background {
                      width: 176.627px;
                      height: 71.5709px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s500x400/5d3c13acdc09063fd1918045/hnc-20210918081320.png");
                  }
                  #PARAGRAPH220 {
                      width: 186px;
                      top: 205.589px;
                      left: 478.127px;
                  }
                  #PARAGRAPH220 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH221 {
                      width: 186px;
                      top: 205.589px;
                      left: 680.127px;
                  }
                  #PARAGRAPH221 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH222 {
                      width: 204px;
                      top: 110.089px;
                      left: 66.501px;
                  }
                  #PARAGRAPH222 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH223 {
                      width: 174px;
                      top: 110.089px;
                      left: 281.627px;
                  }
                  #PARAGRAPH223 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH224 {
                      width: 186px;
                      top: 207.516px;
                      left: 68.501px;
                  }
                  #PARAGRAPH224 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH225 {
                      width: 186px;
                      top: 111.089px;
                      left: 680.127px;
                  }
                  #PARAGRAPH225 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH226 {
                      width: 170px;
                      top: 131.598px;
                      left: 478.127px;
                  }
                  #PARAGRAPH226 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH227 {
                      width: 178px;
                      top: 227px;
                      left: 282.627px;
                  }
                  #PARAGRAPH227 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH228 {
                      width: 186px;
                      top: 131.598px;
                      left: 882.13px;
                  }
                  #PARAGRAPH228 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH229 {
                      width: 186px;
                      top: 227px;
                      left: 478.127px;
                  }
                  #PARAGRAPH229 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH230 {
                      width: 186px;
                      top: 227px;
                      left: 680.127px;
                  }
                  #PARAGRAPH230 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH231 {
                      width: 186px;
                      top: 205.589px;
                      left: 882.13px;
                  }
                  #PARAGRAPH231 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH232 {
                      width: 186px;
                      top: 226.589px;
                      left: 882.13px;
                  }
                  #PARAGRAPH232 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 13px;
                      line-height: 1.6;
                  }
                  #IMAGE241 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 1023.29px;
                      left: 9.78px;
                  }
                  #IMAGE241 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273682156_120095593901364_5189588421190990512_n-20220222061831.jpg");
                  }
                  #IMAGE242 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 1023.29px;
                      left: 627.239px;
                  }
                  #IMAGE242 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273602724_120095727234684_1177468305523383843_n-20220222061817.jpg");
                  }
                  #IMAGE243 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 2014.29px;
                      left: 9.78px;
                  }
                  #IMAGE243 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273506384_120095427234714_6733439160971311254_n-20220222061803.jpg");
                  }
                  #IMAGE244 {
                      width: 556.981px;
                      height: 977.65px;
                      top: 2014.29px;
                      left: 627.239px;
                  }
                  #IMAGE244 > .ladi-image > .ladi-image-background {
                      width: 556.981px;
                      height: 977.65px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s900x1300/5d3c13acdc09063fd1918045/273021063_120096070567983_7166640394068449217_n-20220222061744.jpg");
                  }
              }
              @media (max-width: 767px) {
                  #SECTION_POPUP {
                      height: 0px;
                  }
                  #SECTION_POPUP .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
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
                  #SECTION1 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
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
                      height: 9646.77px;
                  }
                  #SECTION38 > .ladi-section-background {
                      background: rgba(255, 1, 1, 1);
                      background: -webkit-linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      background: linear-gradient(180deg, rgba(255, 1, 1, 1), rgba(26, 1, 253, 1));
                      filter: brightness(70%) blur(10px);
                  }
                  #SECTION38 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273030109_120095053901418_6850204940509875955_n-20220222061756.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273706895_120094903901433_6877663174115746898_n-20220222061833.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273024777_120095000568090_4152966004690273190_n-20220222061744.jpg");
                  }
                  #IMAGE85 {
                      width: 400px;
                      height: 266.666px;
                      top: 7940.17px;
                      left: 10px;
                  }
                  #IMAGE85 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273876200_120094933901430_4531815404309634059_n-20220222061850.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273841916_120095273901396_609795937307257811_n-20220222061849.jpg");
                  }
                  #IMAGE92 {
                      width: 400px;
                      height: 266.666px;
                      top: 7663.47px;
                      left: 10px;
                  }
                  #IMAGE92 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273829636_120095650568025_3351064394578735810_n-20220222061848.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273977403_120095177234739_6624771176345891942_n-20220222061852.jpg");
                  }
                  #IMAGE95 {
                      width: 400px;
                      height: 266.666px;
                      top: 7386.77px;
                      left: 10px;
                  }
                  #IMAGE95 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273937820_120095377234719_5477079328530283587_n-20220222061851.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273763412_120094967234760_4077729840929435321_n-20220222061846.jpg");
                  }
                  #IMAGE98 {
                      width: 400px;
                      height: 266.666px;
                      top: 7110.17px;
                      left: 10px;
                  }
                  #IMAGE98 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273745184_120095477234709_4703090771114701956_n-20220222061844.jpg");
                  }
                  #IMAGE100 {
                      width: 402.207px;
                      height: 300.221px;
                      top: 2907.33px;
                      left: 8px;
                  }
                  #IMAGE100 > .ladi-image > .ladi-image-background {
                      width: 402.207px;
                      height: 300.221px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/273696176_120096013901322_4521099332119161924_n-20220222061832.jpg");
                  }
                  #IMAGE101 {
                      width: 406.572px;
                      height: 303.479px;
                      top: 3214.33px;
                      left: 3.635px;
                  }
                  #IMAGE101 > .ladi-image > .ladi-image-background {
                      width: 406.572px;
                      height: 303.479px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x650/5d3c13acdc09063fd1918045/273682211_120095830568007_6018582356584325534_n-20220222061831.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273681836_120095700568020_4830307919726504624_n-20220222061830.jpg");
                  }
                  #IMAGE111 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 8218.97px;
                      left: 9.998px;
                  }
                  #IMAGE111 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273665689_120095893901334_6805332090891258509_n-20220222061829.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273662690_120095117234745_5696382186035965448_n-20220222061828.jpg");
                  }
                  #IMAGE118 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 8501.97px;
                      left: 9.998px;
                  }
                  #IMAGE118 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273640773_120096120567978_5706486887216298405_n-20220222061827.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273608479_120095203901403_930693539766490636_n-20220222061817.jpg");
                  }
                  #IMAGE122 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 9075.17px;
                      left: 9.998px;
                  }
                  #IMAGE122 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273580579_120095163901407_8513754135092850704_n-20220222061816.jpg");
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
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273623584_120095640568026_6537013204245060429_n-20220222061819.jpg");
                  }
                  #IMAGE124 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 8792.07px;
                      left: 9.998px;
                  }
                  #IMAGE124 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273612823_120095807234676_4110630967043249948_n-20220222061818.jpg");
                  }
                  #IMAGE126 {
                      width: 405.117px;
                      height: 270.077px;
                      top: 2631.37px;
                      left: 6px;
                  }
                  #IMAGE126 > .ladi-image > .ladi-image-background {
                      width: 405.117px;
                      height: 270.077px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273579834_120095503901373_9214921498240497001_n-20220222061815.jpg");
                  }
                  #IMAGE129 {
                      width: 400.96px;
                      height: 267.306px;
                      top: 9357.67px;
                      left: 9.99939px;
                  }
                  #IMAGE129 > .ladi-image > .ladi-image-background {
                      width: 400.96px;
                      height: 267.306px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273570522_120096043901319_6880393134733481607_n-20220222061814.jpg");
                  }
                  #SECTION130 {
                      height: 4280.76px;
                  }
                  #SECTION130 > .ladi-section-background {
                      background: rgba(26, 1, 253, 1);
                      background: -webkit-linear-gradient(180deg, rgba(26, 1, 253, 1), rgba(255, 1, 1, 1));
                      background: linear-gradient(180deg, rgba(26, 1, 253, 1), rgba(255, 1, 1, 1));
                  }
                  #SECTION130 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #IMAGE136 {
                      width: 400px;
                      height: 702.107px;
                      top: -1.89346px;
                      left: 10px;
                  }
                  #IMAGE136 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273700988_120095323901391_5262546323416559541_n-20220222061833.jpg");
                  }
                  #IMAGE134 {
                      width: 400px;
                      height: 702.107px;
                      top: 3568.65px;
                      left: 10px;
                  }
                  #IMAGE134 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273723514_120095390568051_8705580480298685853_n-20220222061834.jpg");
                  }
                  #IMAGE134 > .ladi-image {
                      border-color: rgb(238, 203, 20);
                      border-width: 16px;
                  }
                  #IMAGE175 {
                      width: 400px;
                      height: 266.666px;
                      top: 3798.69px;
                      left: 10px;
                  }
                  #IMAGE175 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273484776_120095297234727_4303099613662805002_n-20220222061802.jpg");
                  }
                  #IMAGE176 {
                      width: 400px;
                      height: 266.666px;
                      top: 6565.35px;
                      left: 10px;
                  }
                  #IMAGE176 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273476562_120095450568045_4718260912639504287_n-20220222061801.jpg");
                  }
                  #IMAGE177 {
                      width: 400px;
                      height: 266.666px;
                      top: 3522.03px;
                      left: 10px;
                  }
                  #IMAGE177 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273567776_120095960567994_2696468239381536953_n-20220222061813.jpg");
                  }
                  #IMAGE178 {
                      width: 400px;
                      height: 266.666px;
                      top: 6840.07px;
                      left: 10px;
                  }
                  #IMAGE178 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273393374_120094943901429_8547789465857114724_n-20220222061800.jpg");
                  }
                  #IMAGE179 {
                      width: 400px;
                      height: 266.666px;
                      top: 4352.03px;
                      left: 10px;
                  }
                  #IMAGE179 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272994609_120095853901338_5147762939406685307_n-20220222061743.jpg");
                  }
                  #IMAGE180 {
                      width: 400px;
                      height: 266.666px;
                      top: 6012.02px;
                      left: 10px;
                  }
                  #IMAGE180 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272976403_120095877234669_3482920175675942120_n-20220222061742.jpg");
                  }
                  #IMAGE181 {
                      width: 400px;
                      height: 266.666px;
                      top: 4075.36px;
                      left: 10px;
                  }
                  #IMAGE181 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/273033818_120096093901314_3428574848953053785_n-20220222061757.jpg");
                  }
                  #IMAGE182 {
                      width: 400px;
                      height: 266.666px;
                      top: 6288.69px;
                      left: 10px;
                  }
                  #IMAGE182 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272996580_120094973901426_1791604337691735399_n-20220222061744.jpg");
                  }
                  #IMAGE183 {
                      width: 400px;
                      height: 266.666px;
                      top: 4628.69px;
                      left: 10px;
                  }
                  #IMAGE183 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272968802_120095630568027_8075110572776554842_n-20220222061741.jpg");
                  }
                  #IMAGE184 {
                      width: 400px;
                      height: 266.666px;
                      top: 5735.36px;
                      left: 10px;
                  }
                  #IMAGE184 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272966917_120095233901400_7751980861152620389_n-20220222061740.jpg");
                  }
                  #IMAGE187 {
                      width: 400px;
                      height: 266.666px;
                      top: 5182.03px;
                      left: 10px;
                  }
                  #IMAGE187 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272858990_120095983901325_6240995587066790342_n-20220222061738.jpg");
                  }
                  #IMAGE189 {
                      width: 400px;
                      height: 266.666px;
                      top: 4905.36px;
                      left: 10px;
                  }
                  #IMAGE189 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272897269_120095257234731_1565754953978175651_n-20220222061739.jpg");
                  }
                  #IMAGE190 {
                      width: 400px;
                      height: 266.666px;
                      top: 5458.69px;
                      left: 10px;
                  }
                  #IMAGE190 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 266.666px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x600/5d3c13acdc09063fd1918045/272921450_120095937234663_7012944139551138546_n-20220222061739.jpg");
                  }
                  #SECTION210 {
                      height: 595.149px;
                  }
                  #SECTION210 > .ladi-section-background {
                      background-color: rgb(21, 21, 21);
                  }
                  #SECTION210 .ladi-section-arrow-down {
                      background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2023%2039%22%20style%3D%22filter%3A%20drop-shadow(0%201px%20.15px%20%23B2B2B2)%3B%20transform%3A%20rotate(90deg)%3B%20-webkit-transform%3A%20rotate(90deg)%3B%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22M2%2C3l1.5-1.5l18.1%2C18l-18.1%2C18L2%2C36l16.6-16.5L2%2C3z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
                  }
                  #HEADLINE211 {
                      width: 400px;
                      top: 22px;
                      left: 10.4635px;
                  }
                  #HEADLINE211 > .ladi-headline {
                      color: rgb(255, 255, 255);
                      font-size: 18px;
                      font-weight: bold;
                      text-transform: uppercase;
                      text-align: center;
                      line-height: 1.6;
                      text-shadow: rgb(0, 0, 0) 1px 2px 3px;
                  }
                  #PARAGRAPH212 {
                      width: 172px;
                      top: 175px;
                      left: 17.308px;
                  }
                  #PARAGRAPH212 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH213 {
                      width: 142px;
                      top: 173.437px;
                      left: 222.126px;
                  }
                  #PARAGRAPH213 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH214 {
                      width: 186px;
                      top: 243.574px;
                      left: 222.126px;
                  }
                  #PARAGRAPH214 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH215 {
                      width: 186px;
                      top: 243.589px;
                      left: 17.308px;
                  }
                  #PARAGRAPH215 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH216 {
                      width: 148px;
                      top: 287.435px;
                      left: 17.308px;
                  }
                  #PARAGRAPH216 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH217 {
                      width: 186px;
                      top: 287.435px;
                      left: 222.126px;
                  }
                  #PARAGRAPH217 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH218 {
                      width: 186px;
                      top: 352.49px;
                      left: 17.308px;
                  }
                  #PARAGRAPH218 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #IMAGE219 {
                      width: 143.728px;
                      height: 59.437px;
                      top: 82px;
                      left: 19.808px;
                  }
                  #IMAGE219 > .ladi-image > .ladi-image-background {
                      width: 143.728px;
                      height: 59.437px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s450x400/5d3c13acdc09063fd1918045/hnc-20210918081320.png");
                  }
                  #PARAGRAPH220 {
                      width: 186px;
                      top: 352.497px;
                      left: 223.308px;
                  }
                  #PARAGRAPH220 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH221 {
                      width: 186px;
                      top: 421.397px;
                      left: 17.308px;
                  }
                  #PARAGRAPH221 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH222 {
                      width: 172px;
                      top: 156.437px;
                      left: 17.308px;
                  }
                  #PARAGRAPH222 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH223 {
                      width: 142px;
                      top: 156.437px;
                      left: 222.126px;
                  }
                  #PARAGRAPH223 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH224 {
                      width: 186px;
                      top: 226.589px;
                      left: 17.308px;
                  }
                  #PARAGRAPH224 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH225 {
                      width: 186px;
                      top: 226.574px;
                      left: 222.126px;
                  }
                  #PARAGRAPH225 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH226 {
                      width: 148px;
                      top: 304.435px;
                      left: 17.308px;
                  }
                  #PARAGRAPH226 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH227 {
                      width: 186px;
                      top: 309.437px;
                      left: 223.308px;
                  }
                  #PARAGRAPH227 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH228 {
                      width: 186px;
                      top: 369.49px;
                      left: 17.308px;
                  }
                  #PARAGRAPH228 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH229 {
                      width: 186px;
                      top: 369.497px;
                      left: 222.126px;
                  }
                  #PARAGRAPH229 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH230 {
                      width: 186px;
                      top: 438.397px;
                      left: 17.308px;
                  }
                  #PARAGRAPH230 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH231 {
                      width: 186px;
                      top: 421.466px;
                      left: 223.308px;
                  }
                  #PARAGRAPH231 > .ladi-paragraph {
                      color: rgb(255, 14, 1);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #PARAGRAPH232 {
                      width: 186px;
                      top: 438.466px;
                      left: 222.126px;
                  }
                  #PARAGRAPH232 > .ladi-paragraph {
                      color: rgb(255, 255, 255);
                      font-size: 11px;
                      line-height: 1.6;
                  }
                  #IMAGE241 {
                      width: 400px;
                      height: 702.107px;
                      top: 710.213px;
                      left: 10px;
                  }
                  #IMAGE241 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273682156_120095593901364_5189588421190990512_n-20220222061831.jpg");
                  }
                  #IMAGE242 {
                      width: 400px;
                      height: 702.107px;
                      top: 2846.53px;
                      left: 10px;
                  }
                  #IMAGE242 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273602724_120095727234684_1177468305523383843_n-20220222061817.jpg");
                  }
                  #IMAGE243 {
                      width: 400px;
                      height: 702.107px;
                      top: 1422.32px;
                      left: 10px;
                  }
                  #IMAGE243 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273506384_120095427234714_6733439160971311254_n-20220222061803.jpg");
                  }
                  #IMAGE244 {
                      width: 400px;
                      height: 702.107px;
                      top: 2134.43px;
                      left: 10px;
                  }
                  #IMAGE244 > .ladi-image > .ladi-image-background {
                      width: 400px;
                      height: 702.107px;
                      top: 0px;
                      left: 0px;
                      background-image: url("https://w.ladicdn.com/s750x1050/5d3c13acdc09063fd1918045/273021063_120096070567983_7166640394068449217_n-20220222061744.jpg");
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
              .ladi-tabs-background,
              .ladi-survey-option-background,
              .ladi-survey-option-image,
              .ladi-banner,
              .ladi-form-item-background,
              .ladi-gallery-view-item,
              .ladi-gallery-control-item,
              .ladi-spin-lucky-screen,
              .ladi-spin-lucky-start,
              .ladi-form-label-container .ladi-form-label-item.image,
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
                          <h3 class="ladi-headline">Hình Ảnh Của Showroom HACOM Đông Anh<br /></h3>
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
                      <div id="IMAGE183" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE184" class="ladi-element">
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
                      <div id="IMAGE187" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE189" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE190" class="ladi-element">
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
                      <div id="IMAGE126" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE129" class="ladi-element">
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
              <div id="SECTION130" class="ladi-section">
                  <div class="ladi-section-background"></div>
                  <div class="ladi-container">
                      <div id="IMAGE136" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE134" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE241" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE242" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE243" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                      <div id="IMAGE244" class="ladi-element">
                          <div class="ladi-image"><div class="ladi-image-background"></div></div>
                      </div>
                  </div>
              </div>
              
          </div>
          <div id="backdrop-popup" class="backdrop-popup"></div>
          <div id="lightbox-screen" class="lightbox-screen"></div>
          <script id="script_lazyload" type="text/javascript">
              (function () {
                  var style_lazyload = document.getElementById("style_lazyload");
                  var docEventScroll = window;
                  var list_element_lazyload = document.querySelectorAll(
                      ".ladi-section-background, .ladi-image-background, .ladi-button-background, .ladi-headline, .ladi-video-background, .ladi-countdown-background, .ladi-box, .ladi-frame-background, .ladi-tabs-background, .ladi-survey-option-background, .ladi-survey-option-image, .ladi-banner, .ladi-form-item-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-spin-lucky-screen, .ladi-spin-lucky-start, .ladi-form-label-container .ladi-form-label-item.image, .ladi-list-paragraph ul li"
                  );
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
                  if (typeof style_lazyload != "undefined" && style_lazyload != undefined) {
                      style_lazyload.parentElement.removeChild(style_lazyload);
                  }
                  var currentScrollY = window.scrollY;
                  var stopLazyload = function (event) {
                      if (event.type == "scroll" && window.scrollY == currentScrollY) {
                          currentScrollY = -1;
                          return;
                      }
                      docEventScroll.removeEventListener("scroll", stopLazyload);
                      list_element_lazyload = document.getElementsByClassName("ladi-lazyload");
                      while (list_element_lazyload.length > 0) {
                          list_element_lazyload[0].classList.remove("ladi-lazyload");
                      }
                  };
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
                  docEventScroll.addEventListener("scroll", stopLazyload, scrollEventPassive);
              })();
          </script>
          <!--[if lt IE 9]>
              <script src="https://w.ladicdn.com/v2/source/html5shiv.min.js?v=1645155547610"></script>
              <script src="https://w.ladicdn.com/v2/source/respond.min.js?v=1645155547610"></script>
          <![endif]-->
          <link href="https://fonts.googleapis.com/css?family=Open Sans:bold,regular|Quicksand:bold,regular&display=swap" rel="stylesheet" type="text/css" />
          <link href="https://w.ladicdn.com/v2/source/ladipage.min.css?v=1645155547610" rel="stylesheet" type="text/css" />
          <script src="https://w.ladicdn.com/v2/source/ladipage.vi.min.js?v=1645155547610" type="text/javascript"></script>
          <script id="script_event_data" type="text/javascript">
              (function () {
                  var run = function () {
                      if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
                          setTimeout(run, 100);
                          return;
                      }
                      window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
                      window.LadiPageScript.runtime.ladipage_id = "62147fddeef4dc0020f78aaa";
                      window.LadiPageScript.runtime.publish_platform = "LADIPAGE";
                      window.LadiPageScript.runtime.is_mobile_only = false;
                      window.LadiPageScript.runtime.DOMAIN_FREE = [];
                      window.LadiPageScript.runtime.bodyFontSize = 12;
                      window.LadiPageScript.runtime.store_id = "5d3c13acdc09063fd1918045";
                      window.LadiPageScript.runtime.time_zone = 7;
                      window.LadiPageScript.runtime.currency = "VND";
                      window.LadiPageScript.runtime.convert_replace_str = true;
                      window.LadiPageScript.runtime.desktop_width = 1200;
                      window.LadiPageScript.runtime.mobile_width = 420;
                      window.LadiPageScript.runtime.eventData =
                          "%7B%22SECTION_POPUP%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22SECTION1%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22image%22%2C%22mobile.option.background-style%22%3A%22image%22%7D%2C%22HEADLINE39%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION38%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22gradient%22%2C%22mobile.option.background-style%22%3A%22gradient%22%7D%2C%22IMAGE76%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE78%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE84%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE85%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE91%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE92%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE94%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE95%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE97%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE98%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE100%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE101%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE110%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE111%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE117%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE118%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE121%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE122%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE123%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE124%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE126%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE129%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION130%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22gradient%22%2C%22mobile.option.background-style%22%3A%22gradient%22%7D%2C%22IMAGE136%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE134%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE175%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE176%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE177%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE178%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE179%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE180%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE181%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE182%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE183%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE184%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE187%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE189%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE190%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22SECTION210%22%3A%7B%22type%22%3A%22section%22%2C%22desktop.option.background-style%22%3A%22solid%22%2C%22mobile.option.background-style%22%3A%22solid%22%7D%2C%22HEADLINE211%22%3A%7B%22type%22%3A%22headline%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH212%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH213%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH214%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH215%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH216%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH217%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH218%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE219%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH220%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH221%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH222%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH223%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH224%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH225%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH226%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH227%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH228%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH229%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH230%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH231%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22PARAGRAPH232%22%3A%7B%22type%22%3A%22paragraph%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE241%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE242%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE243%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%2C%22IMAGE244%22%3A%7B%22type%22%3A%22image%22%2C%22option.data_setting.sort_name%22%3A%22updated_at%22%2C%22option.data_setting.sort_by%22%3A%22desc%22%7D%7D";
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
