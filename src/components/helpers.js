// Category filter helpers
export function updateCategoryCounts(activeCategories, posts) {
  const categoryCounts = getCategoryCounts(posts);

  const categories = activeCategories.map(category => ({
    name: category.name,
    checked: category.checked,
    count: categoryCounts[category.name] ? categoryCounts[category.name] : 0
  }))

  return categories
}

function processPost(counts, post) {
  const categoryName = post.frontmatter.category

  counts[categoryName] = counts[categoryName] ? counts[categoryName]+1 : 1

  return counts
}

function getCategoryCounts(posts) {
  return posts.reduce(processPost, {})
}

export function checkUncheckCategory(categoryToChange, oldCategories) {
  const newCategories = oldCategories.map( category => {
    if(category.name === categoryToChange) {
      return {
        ...category,
        checked: !category.checked
      }
    }

    return category
  })

  return newCategories;
}

export function uncheckAllCategories(categoryToChange, oldCategories) {
  const newCategories = oldCategories.map( category => {
    return {...category, checked: false}
  })

  return newCategories;
}

export function getCategoryIfTrue(activeCategories, category) {
  if(category.checked) {
    activeCategories.push(category.name)
  }

  return activeCategories;
}

export function countActiveCategories (categories) {
  return categories.filter(category => category.checked).length
}

// Highlight keywords in post text
export function highlightMarkdown (markdown, searchString){
  if(searchString) {
    const newphrase = markdown.replace(new RegExp(searchString.trim(), 'gi'), function(instance){
      return `~~${instance}~~`
    })

    return newphrase;
  }

  return markdown;
}

// Utility helpers
export function matchStringBySubString (string, subString) {
  return string.toLowerCase().includes(subString.toLowerCase())
}

export function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
