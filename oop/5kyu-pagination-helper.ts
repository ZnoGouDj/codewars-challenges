// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelperTest(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelperTest.prototype.itemCount = function () {
  return this.collection.length;
};

// returns the number of pages
PaginationHelperTest.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelperTest.prototype.pageItemCount = function (pageIndex) {
  const pages: string[][] = [];
  for (let i = 0; i < this.collection.length; i += this.itemsPerPage) {
    let slice = this.collection.slice(i, i + this.itemsPerPage);
    pages.push(slice);
  }
  return pageIndex >= pages.length ? -1 : pages[pageIndex].length;
};

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelperTest.prototype.pageIndex = function (itemIndex) {
  if (itemIndex >= this.collection.length || itemIndex < 0) return -1;
  let arr = [...this.collection];
  arr[itemIndex] = 'element_to_find';

  const pages: string[][] = [];
  for (let i = 0; i < arr.length; i += this.itemsPerPage) {
    let slice = arr.slice(i, i + this.itemsPerPage);
    pages.push(slice);
  }

  for (let i = 0; i < pages.length; i++) {
    if (pages[i].indexOf('element_to_find') > -1) return i;
  }

  return -1;
};

//!

function PaginationHelper(collection, itemsPerPage) {
  (this.collection = collection), (this.itemsPerPage = itemsPerPage);
}

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function (pageIndex) {
  return pageIndex < this.pageCount()
    ? Math.min(this.itemsPerPage, this.collection.length - pageIndex * this.itemsPerPage)
    : -1;
};

PaginationHelper.prototype.pageIndex = function (itemIndex) {
  return itemIndex < this.collection.length && itemIndex >= 0
    ? Math.floor(itemIndex / this.itemsPerPage)
    : -1;
};

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);
console.log(helper.pageCount()); // 2
console.log(helper.itemCount()); // 6
console.log(helper.pageItemCount(0)); // 4
console.log(helper.pageItemCount(1)); // last page -  2
console.log(helper.pageItemCount(2)); //  -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); // 1 (zero based index)
console.log(helper.pageIndex(2)); // 0
console.log(helper.pageIndex(20)); // -1
console.log(helper.pageIndex(-10)); // -1
