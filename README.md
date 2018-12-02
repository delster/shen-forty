# Shenendoah Thompson
This is a portfolio site for the musician Shenendoah Thompson.


## Tech Stack
This site is built on [gatsby-starter-forty](https://github.com/codebushi/gatsby-starter-forty), which is a
Gatsby.js V2 starter based on the Forty site template, designed by HTML5 UP.

## CSS Grid

The grid on this site was replaced with a custom version, built using CSS Grid. It's a very simple 12 column grid that is disabled on mobile. To start using the grid, wrap the desired items with `grid-wrapper`. Items inside the `grid-wrapper` use the class `col-` followed by a number, which should add up to 12.

Here is an example of using the grid, for a 3 column layout:

```
<div className="grid-wrapper">
  <div className="col-4">
    <p>Content Here</p>
  </div>
  <div className="col-4">
    <p>Content Here</p>
  </div>
  <div className="col-4">
    <p>Content Here</p>
  </div>
</div>
```