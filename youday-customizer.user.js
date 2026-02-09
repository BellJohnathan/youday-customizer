// ==UserScript==
// @name         Youday Interface Customizer
// @namespace    http://tampermonkey.net/
// @version      2.5.3
// @description  Modern interface customization for Youday CRM with Lucide icons, improved layouts, and enhanced UX
// @author       Johnathan Bell
// @match        https://youday.app/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youday.fr
// @grant        none
// @updateURL    https://github.com/BellJohnathan/youday-customizer/raw/refs/heads/main/youday-customizer.user.js
// @downloadURL  https://github.com/BellJohnathan/youday-customizer/raw/refs/heads/main/youday-customizer.user.js

// ==/UserScript==

(function() {
    'use strict';

    // Wait for page to load
    window.addEventListener('load', function() {
        injectStyles();
        initializeOrganismesEnhancements();
    });

    function injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* ================================================== */
            /* GLOBAL CUSTOMIZATIONS */
            /* ================================================== */

            /* Font Family Override */
            * {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
            }

            /* Preserve icon fonts */
            [class*="fa-"],
            [class^="fa "],
            .fa,
            [class*="icon-"],
            [class*="glyphicon"] {
                font-family: 'FontAwesome', 'Font Awesome 5 Free', 'Font Awesome 5 Pro' !important;
            }

            /* Page Background */
            .page-content {
                background-color: #fafafa;
            }

            /* Hide Footer */
            .page-footer {
                display: none !important;
            }

            /* ================================================== */
            /* LOGIN PAGE */
            /* ================================================== */

            /* Hide background image - user will add SVG gradient later */
            body.login .backstretch {
                display: none !important;
            }

            /* Temporary neutral background until SVG gradient is added */
            body.login {
                background: linear-gradient(90deg, #7b84ff 0.000%, #68a5ff 16.667%, #5fc6ff 33.333%, #63e5fc 50.000%, #73ffcd 66.667%, #8dff9d 83.333%, #aeff6f 100.000%);
                min-height: 100vh;
            }

            /* Hide copyright */
            body.login .copyright {
                display: none !important;
            }

            /* Replace logo with Technopole ATLAS - LOGIN PAGE */
            body.login .logo img {
                content: url('https://raw.githubusercontent.com/BellJohnathan/youday-customizer/refs/heads/main/logo_blanc_horizontal.svg') !important;
                max-height: 60px !important;
                width: auto !important;
            }

            /* Login card container */
            body.login .content {
                background: #ffffff !important;
                border-radius: 12px !important;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;
                padding: 40px !important;
                max-width: 420px !important;
                margin: 80px auto !important;
                border: 1px solid #e2e8f0 !important;
            }

            /* Form title */
            body.login .form-title {
                color: #0f172a !important;
                font-size: 20px !important;
                font-weight: 600 !important;
                margin-bottom: 24px !important;
                text-align: center !important;
            }

            /* Override form title text */
            body.login .form-title::before {
                content: 'Connexion' !important;
            }

            body.login .form-title {
                font-size: 0 !important;
            }

            body.login .form-title::before {
                font-size: 20px !important;
            }

            /* Form groups spacing */
            body.login .form-group {
                margin-bottom: 20px !important;
            }

            /* Input fields */
            body.login .form-control {
                border: 1px solid #e2e8f0 !important;
                border-radius: 8px !important;
                padding: 12px 12px 12px 44px !important;
                font-size: 14px !important;
                color: #0f172a !important;
                background: #ffffff !important;
                transition: all 0.2s ease !important;
                height: 48px !important;
            }

            body.login .form-control:focus {
                border-color: #3b82f6 !important;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
                outline: none !important;
            }

            .login .content .input-icon {
                border-left: 0 !important;
            }

            form.login-form > div:nth-child(2) > div > i, form.login-form > div:nth-child(3) > div > i {
                display: none;
            }

            body.login .form-control::placeholder {
                color: #94a3b8 !important;
            }

            /* Input icons */
            body.login .input-icon {
                position: relative !important;
            }

            body.login .input-icon > i {
                position: absolute !important;
                left: 14px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                color: #94a3b8 !important;
                font-size: 16px !important;
                z-index: 2 !important;
            }

            /* Primary button */
            body.login .btn.blue {
                background-color: #0f172a !important;
                border: 1px solid #0f172a !important;
                color: #ffffff !important;
                border-radius: 8px !important;
                padding: 12px 24px !important;
                font-weight: 600 !important;
                font-size: 14px !important;
                transition: all 0.2s ease !important;
                height: 48px !important;
            }

            body.login .btn.blue:hover {
                background-color: #1e293b !important;
                border-color: #1e293b !important;
                box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3) !important;
                transform: translateY(-1px) !important;
            }

            /* Back button (password reset form) */
            body.login #back-btn {
                background: #ffffff !important;
                border: 1px solid #e5e7eb !important;
                color: #1f2937 !important;
                border-radius: 8px !important;
                padding: 12px 24px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease !important;
                height: 48px !important;
            }

            body.login #back-btn:hover {
                background: #f9fafb !important;
                border-color: #d1d5db !important;
            }

            /* Checkbox styling */
            body.login .checkbox {
                color: #94a3b8 !important;
                font-size: 11px !important;
                margin: 8px 0 0 0 !important;
                text-align: left !important;
            }

            body.login .checkbox input[type="checkbox"] {
                accent-color: #0f172a !important;
                width: 14px !important;
                height: 14px !important;
                margin-right: 6px !important;
            }

            /* Form actions layout */
            body.login .form-actions {
                display: flex !important;
                flex-direction: column !important;
                align-items: stretch !important;
                margin-top: 24px !important;
            }

            /* Checkbox comes first, aligned left */
            body.login .form-actions .checkbox {
                order: 1 !important;
                margin-bottom: 16px !important;
            }

            /* Button comes second, takes full width */
            body.login .form-actions .btn.blue {
                order: 2 !important;
                width: 100% !important;
            }

            /* Links */
            body.login .forget-password a,
            body.login .create-account a {
                color: #3b82f6 !important;
                font-weight: 500 !important;
                text-decoration: none !important;
                transition: color 0.2s ease !important;
            }

            body.login .forget-password a:hover,
            body.login .create-account a:hover {
                color: #1d4ed8 !important;
                text-decoration: underline !important;
            }

            /* Forget password & create account sections */
            body.login .forget-password,
            body.login .create-account {
                text-align: center !important;
                margin-top: 20px !important;
                padding-top: 20px !important;
                border-top: 1px solid #f1f5f9 !important;
            }

            body.login .forget-password h4,
            body.login .create-account p {
                color: #64748b !important;
                font-size: 13px !important;
                margin: 0 !important;
            }

            /* Alert boxes */
            body.login .alert-danger {
                background-color: rgba(239, 68, 68, 0.1) !important;
                border: 1px solid rgba(239, 68, 68, 0.2) !important;
                color: #991b1b !important;
                border-radius: 8px !important;
                padding: 12px 16px !important;
                font-size: 13px !important;
            }

            body.login .alert-info {
                background-color: rgba(59, 130, 246, 0.1) !important;
                border: 1px solid rgba(59, 130, 246, 0.2) !important;
                color: #1d4ed8 !important;
                border-radius: 8px !important;
                padding: 12px 16px !important;
                font-size: 13px !important;
            }

            /* Modal styling (app selection) */
            body.login .modal-content {
                border-radius: 12px !important;
                border: none !important;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
            }

            body.login .modal-header {
                border-bottom: 1px solid #f1f5f9 !important;
                padding: 20px 24px !important;
            }

            body.login .modal-title {
                color: #0f172a !important;
                font-weight: 600 !important;
                font-size: 18px !important;
            }

            body.login .modal-body {
                padding: 24px !important;
            }

            body.login .modal-footer {
                border-top: 1px solid #f1f5f9 !important;
                padding: 16px 24px !important;
            }

            /* Select dropdown in modal */
            body.login .modal select.form-control {
                padding-left: 44px !important;
                cursor: pointer !important;
            }

            /* ================================================== */
            /* NAVBAR CUSTOMIZATIONS */
            /* ================================================== */

            /* Navbar Logo */
            #appLogo {
                content: url('https://raw.githubusercontent.com/BellJohnathan/youday-customizer/refs/heads/main/logo_transparent_horizontal.svg') !important;
                max-height: 40px;
                width: auto;
            }

            /* Navbar Background */
            .page-header.navbar,
            .page-header.navbar .page-logo,
            .page-tabbar-active .page-header-top,
            .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle {
                background: #0f172a;
            }

            /* Account Menu Customization */
            .page-header.navbar .top-menu .navbar-nav > li.dropdown-user .dropdown-toggle .username {
                font-weight: 500;
                font-size: 14px;
                color: #5b9bd1 !important;
            }

            /* Tab Styling */
            .page-header.navbar .hor-menu .navbar-nav > li > a {
                border-radius: 4px 4px 0 0;
            }

            /* Hover states for navbar menu items and top menu */
            .page-header.navbar .hor-menu .navbar-nav > li.open > a,
            .page-header.navbar .hor-menu .navbar-nav > li > a:hover {
                background-color: hsl(222deg 10% 36% / 40%) !important;
            }

            .page-header.navbar .top-menu .navbar-nav > li.dropdown .dropdown-toggle:hover {
                background-color: hsl(222deg 10% 36% / 40%) !important;
            }

            /* Selected Tab - Using attribute selector for dynamic IDs */
            .page-header.navbar .hor-menu .navbar-nav > li.current > a[id^="maintabbar-"] {
                background-color: #334155 !important;
                font-weight: 500;
            }

            /* ================================================== */
            /* SECTION-SPECIFIC STYLES */
            /* ================================================== */
            
            /* ============================================ */
            /* ORGANISMES SECTION */
            /* ============================================ */
            
            /* 1. PRIMARY ACTION "HERO" STYLING */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group .btn.green-meadow,
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn:has(i.fa-plus) {
                background-color: #0f172a !important;
                border-color: #0f172a !important;
                color: #ffffff !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group .btn.green-meadow:hover,
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn:has(i.fa-plus):hover {
                background-color: #1e293b !important;
                border-color: #1e293b !important;
                box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3) !important;
                transform: translateY(-1px);
            }

            /* 2. TABLE SCANNABILITY & "AIRY" ROWS */
            
            /* Table cell padding and borders */
            body:has(#maintabbar-ZZ8BB1DCF2) .table td,
            body:has(#maintabbar-ZZ8BB1DCF2) .table th {
                padding: 14px 12px !important;
                border-left: none !important;
                border-right: none !important;
                border-top: 1px solid #f1f5f9 !important;
                border-bottom: 1px solid #f1f5f9 !important;
            }
            
            /* Remove table outer borders */
            body:has(#maintabbar-ZZ8BB1DCF2) .table {
                border: none !important;
            }
            
            /* Row hover effect */
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr {
                transition: all 0.15s ease;
                border-left: 3px solid transparent;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr:hover {
                background-color: #f8fafc !important;
                border-left: 3px solid #3b82f6 !important;
            }

            /* 3. SEMANTIC "SOFT" BADGES */
            
            /* Green/Success badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-green,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-green-meadow {
                background-color: rgba(34, 197, 94, 0.1) !important;
                color: #15803d !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }
            
            /* Blue/Info badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-blue,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-blue-chambray,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-blue-steel {
                background-color: rgba(59, 130, 246, 0.1) !important;
                color: #1d4ed8 !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }
            
            /* Yellow badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-yellow,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-yellow-lemon,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-yellow-gold {
                background-color: rgba(234, 179, 8, 0.1) !important;
                color: #854d0e !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }
            
            /* Red badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-red,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-red-thunderbird {
                background-color: rgba(239, 68, 68, 0.1) !important;
                color: #991b1b !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }
            
            /* Purple badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-purple,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-purple-intense,
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-purple-seance {
                background-color: rgba(168, 85, 247, 0.1) !important;
                color: #6b21a8 !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }
            
            /* Grey badges */
            body:has(#maintabbar-ZZ8BB1DCF2) .label.bg-grey-mint {
                background-color: rgba(148, 163, 184, 0.1) !important;
                color: #475569 !important;
                border-radius: 9999px !important;
                font-weight: 600 !important;
                font-size: 10px !important;
                text-transform: uppercase !important;
                padding: 4px 12px !important;
                letter-spacing: 0.05em;
            }

            /* 4. TYPOGRAPHIC HIERARCHY (DATA WEIGHTING) */
            
            /* Table Headers */
            body:has(#maintabbar-ZZ8BB1DCF2) .table th {
                text-transform: uppercase !important;
                letter-spacing: 0.05em !important;
                color: #94a3b8 !important;
                font-weight: 600 !important;
                font-size: 11px !important;
            }
            
            /* Company Name (First column) */
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:first-child,
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:first-child a,
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:first-child .label {
                font-weight: 600 !important;
                color: #0f172a !important;
                font-size: 14px !important;
            }
            
            /* SIRET column (2nd column) */
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:nth-child(2),
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:nth-child(2) span {
                color: #64748b !important;
                font-size: 12px !important;
            }
            
            /* CP column (4th column) */
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:nth-child(4),
            body:has(#maintabbar-ZZ8BB1DCF2) .table tbody tr td:nth-child(4) span {
                color: #64748b !important;
                font-size: 12px !important;
            }

            /* 5. INTERFACE DE-CLUTTERING */
            
            /* Reduce navbar height */
            body:has(#maintabbar-ZZ8BB1DCF2) .page-header.navbar {
                min-height: 48px !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .page-header-top {
                height: 48px !important;
                min-height: 48px !important;
            }
            
            /* Reduce horizontal menu padding */
            body:has(#maintabbar-ZZ8BB1DCF2) .hor-menu {
                padding: 0 !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .hor-menu .navbar-nav > li > a {
                padding: 12px 16px !important;
                font-size: 13px !important;
            }
            
            /* Hide search tag breadcrumbs (will be handled by JavaScript) */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar-sm .btn-group .btn.grey {
                display: none;
            }

            /* ============================================ */
            /* LAYOUT REFACTORING - TOOLBAR MODERNIZATION */
            /* ============================================ */

            /* 1. SEGMENTED VIEW SWITCHER (List vs. Map) */
            
            /* Target List/Map group using :has() - the group that contains List/Map buttons */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="List"]) {
                background: transparent !important;
                border: none !important;
                padding: 0 !important;
                display: inline-flex !important;
                gap: 0 !important;
            }
            
            /* Style List/Map buttons with tab style (2px underline) */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="List"]) .btn {
                background: transparent !important;
                border: none !important;
                border-radius: 0 !important;
                color: #64748b !important;
                font-weight: 500 !important;
                padding: 8px 16px !important;
                margin: 0 !important;
                position: relative;
                transition: all 0.2s ease;
                border-bottom: 2px solid transparent !important;
            }
            
            /* Hover state for List/Map switcher */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="List"]) .btn:hover {
                color: #0f172a !important;
                background: rgba(0, 0, 0, 0.02) !important;
            }
            
            /* Active state for List/Map switcher - dark bottom border */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="List"]) .btn.active {
                color: #0f172a !important;
                background: transparent !important;
                border-bottom: 2px solid #0f172a !important;
                font-weight: 600 !important;
            }

            /* 2. PRIMARY ACTION & SEARCH ALIGNMENT - TWO COLUMN LAYOUT */
            
            /* Make toolbar a flexbox container with 2 columns */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar {
                display: flex !important;
                align-items: center !important;
                justify-content: flex-start !important;
                flex-wrap: nowrap !important;
                gap: 12px !important;
                padding: 16px 0 !important;
                width: 100% !important;
            }
            
            /* FORCE List/Map group to order 1 - target by button content */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="List"]),
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="Map"]) {
                order: 1 !important;
                flex-shrink: 0 !important;
                flex-grow: 0 !important;
                margin: 0 !important;
                display: inline-flex !important;
                gap: 0 !important;
                background: transparent !important;
                border: none !important;
                padding: 0 !important;
            }
            
            /* FORCE Émetteur facture to order 3 */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="Emetteur"]),
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:has(.btn[title*="facture"]) {
                order: 3 !important;
                display: inline-flex !important;
                gap: 8px !important;
                flex-shrink: 0 !important;
                margin: 0 !important;
            }
            
            /* FORCE first btn-group-devided (has New/Columns/Filter) to order 5 */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-devided:has(.btn.green-meadow) {
                order: 5 !important;
                display: inline-flex !important;
                gap: 12px !important;
                align-items: center !important;
                flex-shrink: 0 !important;
                margin: 0 !important;
            }
            
            /* FORCE second btn-group-devided (has Export/Search) to order 7 */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-devided:has(.btn-toolbar-search) {
                order: 7 !important;
                display: inline-flex !important;
                gap: 12px !important;
                align-items: center !important;
                flex-shrink: 0 !important;
                margin: 0 !important;
            }
            
            /* Add spacer to push column 2 to the right */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar::before {
                content: '' !important;
                order: 2 !important;
                flex-grow: 1 !important;
            }
            
            /* Order buttons within first btn-group-devided */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.purple-soft:has(i.fa-columns) {
                order: 1 !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.blue-sharp:has(i.fa-filter) {
                order: 2 !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.green-meadow {
                order: 3 !important;
            }
            
            /* Order elements within second btn-group-devided */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.yellow-casablanca:has(i.fa-cloud-download) {
                order: 1 !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn-toolbar-search {
                order: 2 !important;
            }
            
            /* Hide the Refresh button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn.grey-mint:has(i.fa-refresh) {
                display: none !important;
            }
            
            /* BUTTON STYLING - SECONDARY BUTTONS (Light grey stroke, white bg) */
            
            /* Columns button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.purple-soft:has(i.fa-columns) {
                background: #ffffff !important;
                border: 1px solid #e5e7eb !important;
                color: #1f2937 !important;
                border-radius: 4px !important;
                padding: 8px 16px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.purple-soft:has(i.fa-columns):hover {
                background: #f9fafb !important;
                border-color: #d1d5db !important;
            }
            
            /* Filter button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.blue-sharp:has(i.fa-filter) {
                background: #ffffff !important;
                border: 1px solid #e5e7eb !important;
                color: #1f2937 !important;
                border-radius: 4px !important;
                padding: 8px 16px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.blue-sharp:has(i.fa-filter):hover {
                background: #f9fafb !important;
                border-color: #d1d5db !important;
            }
            
            /* Export button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.yellow-casablanca:has(i.fa-cloud-download) {
                background: #ffffff !important;
                border: 1px solid #e5e7eb !important;
                color: #1f2937 !important;
                border-radius: 4px !important;
                padding: 8px 16px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.yellow-casablanca:has(i.fa-cloud-download):hover {
                background: #f9fafb !important;
                border-color: #d1d5db !important;
            }
            
            /* BUTTON STYLING - PRIMARY BUTTON (New button - dark solid) */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.green-meadow,
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn:has(i.fa-plus) {
                background-color: #0f172a !important;
                border: 1px solid #0f172a !important;
                color: #ffffff !important;
                border-radius: 4px !important;
                padding: 8px 16px !important;
                font-weight: 600 !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.green-meadow:hover,
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn:has(i.fa-plus):hover {
                background-color: #1e293b !important;
                border-color: #1e293b !important;
                box-shadow: 0 4px 12px rgba(15, 23, 42, 0.3) !important;
                transform: translateY(-1px);
            }
            
            /* Style the Search bar container */
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search {
                order: 1 !important;
                position: relative !important;
                margin: 0 !important;
            }
            
            /* Modernize search input */
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search input.form-control {
                border: 1px solid #e2e8f0 !important;
                border-radius: 6px !important;
                padding: 8px 36px 8px 36px !important;
                font-size: 14px !important;
                color: #0f172a !important;
                background: #ffffff !important;
                transition: all 0.2s ease;
                width: 280px !important;
                height: 38px !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search input.form-control:focus {
                border-color: #3b82f6 !important;
                box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1) !important;
                outline: none !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search input.form-control::placeholder {
                color: #94a3b8 !important;
            }
            
            /* Position search icon */
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search .search-icon {
                position: absolute !important;
                left: 12px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                color: #94a3b8 !important;
                pointer-events: none !important;
            }
            
            /* Position cancel icon */
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search .cancel-search-icon {
                position: absolute !important;
                right: 12px !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                color: #94a3b8 !important;
                cursor: pointer !important;
            }
            
            /* Hide the blue-sharp background on search wrapper */
            body:has(#maintabbar-ZZ8BB1DCF2) .btn-toolbar-search.blue-sharp {
                background: transparent !important;
                border: none !important;
            }

            
            /* Style émetteur facture buttons - SECONDARY STYLE */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:not(:first-of-type) {
                background: transparent !important;
                border: none !important;
                padding: 0 !important;
                display: inline-flex !important;
                gap: 8px !important;
                order: 3 !important;
                margin: 0 !important;
            }
            
            /* Individual émetteur facture buttons */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:not(:first-of-type) .btn {
                background: #ffffff !important;
                border: 1px solid #e5e7eb !important;
                color: #1f2937 !important;
                border-radius: 4px !important;
                padding: 8px 16px !important;
                font-weight: 500 !important;
                transition: all 0.2s ease;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:not(:first-of-type) .btn:hover {
                background: #f9fafb !important;
                border-color: #d1d5db !important;
            }
            
            /* Active state for émetteur facture buttons */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:not(:first-of-type) .btn.active,
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar > .btn-group-grouped:not(:first-of-type) .btn.blue-sharp.active {
                background: #0f172a !important;
                border-color: #0f172a !important;
                color: #ffffff !important;
            }

            /* 3. VERTICAL DIVIDERS */
            
            /* Divider 1: Between search bar and export button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn-toolbar-search::before {
                content: '' !important;
                display: inline-block !important;
                width: 1px !important;
                height: 24px !important;
                background-color: #e5e7eb !important;
                margin-right: 12px !important;
                vertical-align: middle;
            }
            
            /* Divider 2: Between columns button and émetteur facture buttons */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar#list-toolbar .btn.purple-soft:has(i.fa-columns)::before {
                content: '' !important;
                display: inline-block !important;
                width: 1px !important;
                height: 24px !important;
                background-color: #e5e7eb !important;
                margin-right: 12px !important;
                vertical-align: middle;
            }

            /* 4. ALIGNMENT CORRECTIONS */
            
            /* Ensure page title stays top-left */
            body:has(#maintabbar-ZZ8BB1DCF2) .page-title {
                margin-bottom: 16px !important;
            }
            
            /* Hide or relocate search tag breadcrumbs */
            body:has(#maintabbar-ZZ8BB1DCF2) #list-filterbar_wrapper {
                order: 4;
                width: 100%;
                margin-top: 8px !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) #list-filterbar {
                display: flex !important;
                justify-content: flex-end !important;
                padding: 0 !important;
                background: transparent !important;
                border: none !important;
            }
            
            /* Style filter tags to be more subtle */
            body:has(#maintabbar-ZZ8BB1DCF2) #list-filterbar .btn-group .btn {
                background: #f1f5f9 !important;
                border: 1px solid #e2e8f0 !important;
                border-radius: 6px !important;
                color: #64748b !important;
                font-size: 12px !important;
                padding: 4px 12px !important;
                margin: 0 4px !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) #list-filterbar .btn-group .btn:hover {
                background: #e2e8f0 !important;
                color: #0f172a !important;
            }
            
            /* Ensure proper spacing between toolbar rows */
            body:has(#maintabbar-ZZ8BB1DCF2) .clearfix {
                margin-bottom: 12px !important;
            }
            
            /* Remove excessive margins from button groups */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group {
                margin-bottom: 0 !important;
            }
            
            /* Fix any conflicts with the devided group styling */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group-devided .btn {
                margin-right: 0 !important;
            }
            
            /* Ensure Export/Columns buttons stay styled appropriately but don't override new button */
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group-devided:first-child .btn {
                background: #ffffff !important;
                border: 1px solid #e2e8f0 !important;
                color: #64748b !important;
            }
            
            body:has(#maintabbar-ZZ8BB1DCF2) .toolbar .btn-group-devided:first-child .btn:hover {
                background: #f8fafc !important;
                border-color: #cbd5e1 !important;
                color: #0f172a !important;
            }

            /* ============================================ */
            /* PLANNING SECTION */
            /* ============================================ */
            body:has(#maintabbar-ZZ80185C44) #list {
                /* Add Planning-specific styles here */
            }

            /* ============================================ */
            /* CONTACTS SECTION */
            /* ============================================ */
            body:has(#maintabbar-ZZC449D067) #list {
                /* Add Contacts-specific styles here */
            }

            /* ============================================ */
            /* Add more sections as needed... */
            /* ============================================ */
        `;

        document.head.appendChild(style);
    }

    function initializeOrganismesEnhancements() {
        // Check if we're on the Organismes section
        const checkSection = setInterval(() => {
            const organismesTab = document.querySelector('#maintabbar-ZZ8BB1DCF2');
            if (organismesTab && organismesTab.closest('li').classList.contains('current')) {
                reorganizeToolbar();
                hideRedundantSearchTags();
                
                // Set up mutation observer to handle dynamic content changes
                setupToolbarObserver();
                
                clearInterval(checkSection);
            }
        }, 500);
    }

    function setupToolbarObserver() {
        const toolbar = document.querySelector('.toolbar#list-toolbar');
        if (!toolbar) return;

        // Create a mutation observer to watch for toolbar changes
        const observer = new MutationObserver((mutations) => {
            // Debounce the reorganization
            clearTimeout(window.toolbarReorganizeTimeout);
            window.toolbarReorganizeTimeout = setTimeout(() => {
                reorganizeToolbar();
            }, 100);
        });

        // Observe the toolbar for child list changes
        observer.observe(toolbar, {
            childList: true,
            subtree: false
        });
    }

    function reorganizeToolbar() {
        const toolbar = document.querySelector('.toolbar#list-toolbar');
        if (!toolbar) return;

        // Get all button groups
        const allGroups = Array.from(toolbar.querySelectorAll('.btn-group-grouped, .btn-group-devided'));
        
        let listMapGroup = null;
        let emetteurGroup = null;
        let firstDevided = null;
        let secondDevided = null;
        
        // Identify each group by checking button text content
        allGroups.forEach(group => {
            const buttons = group.querySelectorAll('.btn, button');
            const buttonTexts = Array.from(buttons).map(btn => btn.textContent.trim().toLowerCase()).join(' ');
            
            if (buttonTexts.includes('list') && buttonTexts.includes('map')) {
                listMapGroup = group;
            } else if (buttonTexts.includes('emetteur') || buttonTexts.includes('émetteur')) {
                emetteurGroup = group;
            } else if (group.classList.contains('btn-group-devided')) {
                if (!firstDevided) {
                    firstDevided = group;
                } else {
                    secondDevided = group;
                }
            }
        });

        // Apply order 1 to List/Map group - COLUMN 1
        if (listMapGroup) {
            listMapGroup.style.order = '1';
            listMapGroup.style.flexGrow = '0';
            listMapGroup.style.flexShrink = '0';
            listMapGroup.style.margin = '0';
            listMapGroup.style.display = 'inline-flex';
            listMapGroup.style.gap = '0';
            listMapGroup.style.background = 'transparent';
            listMapGroup.style.border = 'none';
            listMapGroup.style.padding = '0';
        }

        // Apply order 3 to Émetteur facture - COLUMN 2 (leftmost)
        if (emetteurGroup) {
            emetteurGroup.style.order = '3';
            emetteurGroup.style.display = 'inline-flex';
            emetteurGroup.style.gap = '8px';
            emetteurGroup.style.flexShrink = '0';
            emetteurGroup.style.margin = '0';
        }

        // Apply order 5 to first btn-group-devided (New, Columns, Filter) - COLUMN 2
        if (firstDevided) {
            firstDevided.style.order = '5';
            firstDevided.style.display = 'inline-flex';
            firstDevided.style.gap = '12px';
            firstDevided.style.alignItems = 'center';
            firstDevided.style.flexShrink = '0';
            firstDevided.style.margin = '0';
            
            // Order buttons inside: Columns (1), Filter (2), New (3)
            const columnsBtn = firstDevided.querySelector('.btn:has(i.fa-columns)');
            const filterBtn = firstDevided.querySelector('.btn:has(i.fa-filter)');
            const newBtn = firstDevided.querySelector('.btn.green-meadow, .btn:has(i.fa-plus)');
            
            if (columnsBtn) columnsBtn.style.order = '1';
            if (filterBtn) filterBtn.style.order = '2';
            if (newBtn) newBtn.style.order = '3';
        }

        // Apply order 7 to second btn-group-devided (Export, Search) - COLUMN 2
        if (secondDevided) {
            secondDevided.style.order = '7';
            secondDevided.style.display = 'inline-flex';
            secondDevided.style.gap = '12px';
            secondDevided.style.alignItems = 'center';
            secondDevided.style.flexShrink = '0';
            secondDevided.style.margin = '0';
            
            // Order elements inside: Export (1), Search (2)
            const exportBtn = secondDevided.querySelector('.btn:has(i.fa-cloud-download)');
            const searchBar = secondDevided.querySelector('.btn-toolbar-search');
            
            if (exportBtn) exportBtn.style.order = '1';
            if (searchBar) searchBar.style.order = '2';
        }

        // Ensure toolbar has proper flex display
        toolbar.style.display = 'flex';
        toolbar.style.justifyContent = 'flex-start';
        toolbar.style.alignItems = 'center';
        toolbar.style.width = '100%';
        toolbar.style.flexWrap = 'nowrap';
        toolbar.style.gap = '12px';

        // Handle view switcher button clicks
        if (listMapGroup) {
            const buttons = listMapGroup.querySelectorAll('.btn');
            buttons.forEach(btn => {
                if (!btn.hasAttribute('data-listener-added')) {
                    btn.setAttribute('data-listener-added', 'true');
                    
                    btn.addEventListener('click', function(e) {
                        setTimeout(() => {
                            setTimeout(() => {
                                reorganizeToolbar();
                            }, 500);
                        }, 100);
                    });
                }
            });
        }
    }

    function hideRedundantSearchTags() {
        // Get the main search input value
        const searchInput = document.querySelector('#list-search');
        if (!searchInput) return;

        const searchValue = searchInput.value.toLowerCase().trim();
        
        // Find all filter bar buttons (search tags)
        const filterButtons = document.querySelectorAll('#list-filterbar .btn-group .btn.grey');
        
        filterButtons.forEach(button => {
            const buttonText = button.textContent.toLowerCase().trim();
            
            // Hide the button if its text contains the search input value
            if (searchValue && buttonText.includes(searchValue)) {
                button.style.display = 'none';
            } else if (buttonText.includes('search') && searchValue) {
                button.style.display = 'none';
            }
        });

        // Listen for changes to the search input
        searchInput.addEventListener('input', function() {
            const newValue = this.value.toLowerCase().trim();
            
            filterButtons.forEach(button => {
                const buttonText = button.textContent.toLowerCase().trim();
                
                if (newValue && buttonText.includes(newValue)) {
                    button.style.display = 'none';
                } else if (buttonText.includes('search') && newValue) {
                    button.style.display = 'none';
                } else if (!newValue) {
                    button.style.display = '';
                }
            });
        });

        // Also hide the entire filter bar if only redundant searches exist
        const filterBar = document.querySelector('#list-filterbar');
        if (filterBar) {
            const visibleButtons = Array.from(filterButtons).filter(btn => 
                btn.style.display !== 'none'
            );
            
            if (visibleButtons.length === 0 || (visibleButtons.length === 1 && visibleButtons[0].querySelector('i.fa-times'))) {
                filterBar.parentElement.style.display = 'none';
            }
        }
    }

    // Re-initialize when navigating between sections or switching views
    document.addEventListener('click', function(e) {
        const clickedElement = e.target.closest('.hor-menu .navbar-nav > li > a, .btn-group-grouped .btn');
        
        if (clickedElement) {
            setTimeout(() => {
                initializeOrganismesEnhancements();
            }, 1000);
            
            // Additional check after longer delay for slow-loading content
            setTimeout(() => {
                const organismesTab = document.querySelector('#maintabbar-ZZ8BB1DCF2');
                if (organismesTab && organismesTab.closest('li').classList.contains('current')) {
                    reorganizeToolbar();
                }
            }, 1500);
        }
    });

    // Also handle AJAX/dynamic content loading
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
        return originalFetch.apply(this, args).then(response => {
            // After fetch completes, check if we need to reorganize
            setTimeout(() => {
                const organismesTab = document.querySelector('#maintabbar-ZZ8BB1DCF2');
                if (organismesTab && organismesTab.closest('li').classList.contains('current')) {
                    reorganizeToolbar();
                }
            }, 500);
            return response;
        });
    };

    // ============================================
    // LUCIDE ICON REPLACEMENT (FIXED VERSION)
    // ============================================

    // Load Lucide icons library
    const lucideScript = document.createElement('script');
    lucideScript.src = 'https://unpkg.com/lucide@latest';
    document.head.appendChild(lucideScript);

    // Icon mapping configuration
    const iconMapping = {
        // Main navigation menu icons
        'Accueil': 'chart-column-big',
        'Planning': 'calendar',
        'Organismes': 'building',
        'Temps passé': 'clock',
        'Contacts': 'circle-user',
        'Cartes de visite': 'id-card',
        'Conventions': 'file-signature',
        'Aides financières': 'euro',
        'Instances et Jurys': 'graduation-cap',
        'Actions': 'list-todo',
        'Fiche de temps': 'file-clock'
    };

    // Top menu icon mapping
    const topIconMapping = {
        'icon-settings': 'settings',
        'icon-folder': 'layout-panel-left',
        'icon-power': 'log-out'
    };

    // ============================================
    // ACCOUNT MENU CUSTOMIZATION
    // ============================================
    
    function customizeAccountMenu() {
        // Find the account dropdown
        const accountLink = document.querySelector('#maintopbar-account');
        
        if (accountLink) {
            // Remove the gravatar image
            const gravatarImg = accountLink.querySelector('img.img-rounded');
            if (gravatarImg) {
                gravatarImg.remove();
            }
            
            // Change username text to "Mon compte"
            const usernameSpan = accountLink.querySelector('.username.username-hide-on-mobile');
            if (usernameSpan) {
                usernameSpan.textContent = 'Mon compte';
            }
        }
    }
    
    // Run account menu customization on page load
    customizeAccountMenu();
    
    // Also run after navigation
    setTimeout(customizeAccountMenu, 500);

    // Global state management
    let menuObserver = null;
    let isReplacingIcons = false;
    let lucideLoadRetries = 0;
    const MAX_RETRIES = 50; // 5 seconds max wait
    let hasAddedClickListener = false;

    // Debounce helper function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function replaceFontAwesomeWithLucide() {
        // Prevent concurrent executions
        if (isReplacingIcons) {
            return;
        }

        // Wait for Lucide to be loaded with retry limit
        if (typeof lucide === 'undefined') {
            lucideLoadRetries++;
            if (lucideLoadRetries < MAX_RETRIES) {
                setTimeout(replaceFontAwesomeWithLucide, 100);
            } else {
                console.warn('Lucide icons failed to load after 5 seconds');
            }
            return;
        }

        isReplacingIcons = true;

        // Disconnect observer before making changes
        if (menuObserver) {
            menuObserver.disconnect();
        }

        try {
            // Replace main navigation icons
            Object.keys(iconMapping).forEach(menuText => {
                const lucideIconName = iconMapping[menuText];

                // Find all menu items with this text (both tabbar and sidebar)
                const menuLinks = Array.from(document.querySelectorAll('.hor-menu .navbar-nav > li > a, .page-sidebar-menu > li > a'));

                menuLinks.forEach(link => {
                    const titleSpan = link.querySelector('.title');
                    if (titleSpan && titleSpan.textContent.trim() === menuText) {
                        // Find the Font Awesome icon
                        const faIcon = link.querySelector('.fa, .tab-icon');

                        if (faIcon && !faIcon.hasAttribute('data-lucide-replaced')) {
                            // Create Lucide icon element
                            const lucideIcon = document.createElement('i');
                            lucideIcon.setAttribute('data-lucide', lucideIconName);
                            lucideIcon.setAttribute('data-lucide-replaced', 'true');
                            lucideIcon.className = 'tab-icon';
                            lucideIcon.style.marginRight = '8px';
                            lucideIcon.style.width = '16px';
                            lucideIcon.style.height = '16px';
                            lucideIcon.style.display = 'inline-block';
                            lucideIcon.style.verticalAlign = 'middle';

                            // Replace the Font Awesome icon
                            faIcon.parentNode.replaceChild(lucideIcon, faIcon);
                        }
                    }
                });
            });

            // Replace top menu icons (settings, folder)
            Object.keys(topIconMapping).forEach(faClass => {
                const lucideIconName = topIconMapping[faClass];

                // Find the icon elements
                const icons = document.querySelectorAll(`.${faClass}:not([data-lucide-replaced])`);

                icons.forEach(faIcon => {
                    // Create Lucide icon element
                    const lucideIcon = document.createElement('i');
                    lucideIcon.setAttribute('data-lucide', lucideIconName);
                    lucideIcon.setAttribute('data-lucide-replaced', 'true');
                    lucideIcon.style.width = '18px';
                    lucideIcon.style.height = '18px';
                    lucideIcon.style.display = 'inline-block';

                    // Replace the Font Awesome icon
                    faIcon.parentNode.replaceChild(lucideIcon, faIcon);
                });
            });

            // Initialize Lucide icons
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }

        } catch (error) {
            console.error('Error replacing icons:', error);
        } finally {
            isReplacingIcons = false;

            // Reconnect observer after changes are complete
            if (menuObserver) {
                const tabbar = document.querySelector('.hor-menu');
                if (tabbar) {
                    menuObserver.observe(tabbar, {
                        childList: true,
                        subtree: true
                    });
                }
            }
        }
    }

    // Debounced version for frequent calls
    const debouncedReplaceIcons = debounce(replaceFontAwesomeWithLucide, 300);

    // Run icon replacement when Lucide is ready
    lucideScript.onload = () => {
        // Initial replacement
        replaceFontAwesomeWithLucide();

        // Add single click event listener (only once)
        if (!hasAddedClickListener) {
            hasAddedClickListener = true;
            
            document.addEventListener('click', (e) => {
                if (e.target.closest('.hor-menu a, .page-sidebar-menu a')) {
                    // Use debounced version to prevent rapid re-runs
                    setTimeout(debouncedReplaceIcons, 300);
                }
            }, { passive: true }); // passive: true for better performance
        }

        // Setup MutationObserver with debouncing
        menuObserver = new MutationObserver(debouncedReplaceIcons);

        const tabbar = document.querySelector('.hor-menu');
        if (tabbar) {
            menuObserver.observe(tabbar, {
                childList: true,
                subtree: true
            });
        }

        // Handle dynamic content after initial load
        setTimeout(() => {
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons();
            }
        }, 1000);
    };

    // Handle script load failure
    lucideScript.onerror = () => {
        console.error('Failed to load Lucide icons library from CDN');
    };

})();
