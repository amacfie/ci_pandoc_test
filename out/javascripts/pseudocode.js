/**
 * Bootstrap Multiselect v0.9.0 (https://github.com/davidstutz/jquery-pseudocode)
 *
 * Copyright 2015 David Stutz
 *
 * Licensed under BSD-3-Clause
 */

/*
Copyright (c) 2015 David Stutz All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice,
  this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.
* Neither the name of David Stutz nor the names of its contributors may be
  used to endorse or promote products derived from this software without
  specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

(function($) {
    $.fn.pseudocode = function(options) {

        $(this).each(function() {
            /**
             * Escape the given stirng for regex usage.
             *
             * @param {type} string
             * @returns {unresolved}
             */
            function escape(string) {
                var chars = '/.*[]()+$^';

                for (var i = 0; i < chars.length; i++) {
                    string = string.replace(chars[i], '\\' + chars[i]);

                }

                return string;
            }

            /**
             * Wrap a span around the keyword in the line changing the text color.
             *
             * @param {type} line
             * @param {type} keyword
             * @param {type} color
             * @returns {unresolved}
             */
            function keywords(line, keyword, color) {

                var regex = new RegExp('(' + keyword + ' |' + keyword + '$)', 'g');
                line = line.replace(regex, '<b style="color:' + color + '">$1</b>')

                return line;
            }

            /**
             * Wrap a line comment (beginning with the identifier in 'comment').
             *
             * @param {type} line
             * @param {type} comment
             * @param {type} color
             * @returns {unresolved}
             */
            function comment(line, comment, color) {

                var regex = new RegExp('(' + comment + '.*)', 'g');
                line = line.replace(regex, '<i style="color:' + color + '">$1</i>');

                return line;
            }

            var settings = $.extend({
                keywords: {
                    'if': '#000066',
                    'for': '#000066',
                    'var': '#000066',
                    'function': '#000066',
                    'return': '#000066',
                    'this': '#000066',
                    'while': '#000066',
                    'end': '#000066',
                    'endif': '#000066',
                    'endfor': '#000066',
                    'endwhile': '#000066',
                },
                comment: {
                    '//': '#006600',
                    '%': '#006600'
                },
                tab: 4
            }, options);

            var $this = $(this);
            $this.hide();

            var code = $this.text().trim();
            var lines = code.split("\n");

            var depth = 0;
            var id = $this.attr('id');
            var html = '<ul class="pseudocode"' + (id ? ' id="' + id + '"' : '') + '>';

            $.each(lines, function(i, line) {

                for (var i = 0; i < line.length; i++) {
                    if (line[i] !== ' ') {
                        break;
                    }
                }

                // Check on which level we are.
                var indent = Math.floor((i + 1)/settings.tab);
                if (indent > depth) {
                    for (var i = depth; i < indent - 1; i++) {
                        html += '<ul><li>';
                    }
                    html += '<ul>';
                }
                else if (indent < depth) {
                    for (var i = depth; i > indent; i--) {
                        html += '</li></ul>';
                    }
                }
                else {
                    html += '</li>';
                }

                // Update current depth.
                depth = indent;

                // Scan for line comments.
                var commentLine = false;
                $.each(settings.comment, function(key, color) {
                    if (line.indexOf(key) >= 0) {
                        line = comment(line, escape(key), color);
                        commentLine = true;
                    }
                });

                if (commentLine === false) {
                    // Scan for keywords:
                    $.each(settings.keywords, function(keyword, color) {
                        if (line.indexOf(keyword) >= 0) {
                            line = keywords(line, keyword, color);
                        }
                    });
                }
                html += '<li>' + line.trim();
            });

            for (var i = depth; i > 0; i--) {
                html += '</li></ul>';
            }

            html += '</ul>';

            $ul = $(html);
            $this.after($ul);
        });

        return this;
    };
}(jQuery));

$(document).ready(function() {
  $('pre').pseudocode({
    keywords: {
      'if': '#990000',
      'for': '#990000',
      'var': '#990000',
      'function': '#990000',
      'return': '#990000',
      'this': '#990000'
    },
    tab: 2
  });
});
