/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeploymentModification.
 */
class DeploymentModification {
  /**
   * Create a DeploymentModification.
   * @member {string} name
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeploymentModification
   *
   * @returns {object} metadata of DeploymentModification
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeploymentModification',
      type: {
        name: 'Composite',
        className: 'DeploymentModification',
        modelProperties: {
          name: {
            required: true,
            serializedName: 'name',
            constraints: {
              MaxLength: 1000,
              MinLength: 1
            },
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeploymentModification;
