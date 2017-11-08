/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the IntuneAppCategoryResponse class.
 * @constructor
 * @member {string} [name] display name for the app category
 * 
 * @member {string} [id] ID for the category.
 * 
 */
function IntuneAppCategoryResponse() {
}

/**
 * Defines the metadata of IntuneAppCategoryResponse
 *
 * @returns {object} metadata of IntuneAppCategoryResponse
 *
 */
IntuneAppCategoryResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'IntuneAppCategoryResponse',
    type: {
      name: 'Composite',
      className: 'IntuneAppCategoryResponse',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = IntuneAppCategoryResponse;