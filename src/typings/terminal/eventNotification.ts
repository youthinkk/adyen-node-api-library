/*
 *                       ######
 *                       ######
 * ############    ####( ######  #####. ######  ############   ############
 * #############  #####( ######  #####. ######  #############  #############
 *        ######  #####( ######  #####. ######  #####  ######  #####  ######
 * ###### ######  #####( ######  #####. ######  #####  #####   #####  ######
 * ###### ######  #####( ######  #####. ######  #####          #####  ######
 * #############  #############  #############  #############  #####  ######
 *  ############   ############  #############   ############  #####  ######
 *                                      ######
 *                               #############
 *                               ############
 * Adyen NodeJS API Library
 * Copyright (c) 2020 Adyen B.V.
 * This file is open source and available under the MIT license.
 * See the LICENSE file for more info.
 */

/**
 * Terminal API
 * Definition of Terminal API Schema
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AnyType } from './anyType';
import { DisplayOutput } from './displayOutput';
import { EventToNotifyType } from './eventToNotifyType';

export class EventNotification {
    'customerLanguage'?: string;
    'displayOutput'?: DisplayOutput;
    'eventDetails'?: string;
    'eventToNotify': EventToNotifyType;
    'maintenanceRequiredFlag'?: boolean;
    'rejectedMessage'?: AnyType;
    'timeStamp': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customerLanguage",
            "baseName": "CustomerLanguage",
            "type": "string"
        },
        {
            "name": "displayOutput",
            "baseName": "DisplayOutput",
            "type": "DisplayOutput"
        },
        {
            "name": "eventDetails",
            "baseName": "EventDetails",
            "type": "string"
        },
        {
            "name": "eventToNotify",
            "baseName": "EventToNotify",
            "type": "EventToNotifyType"
        },
        {
            "name": "maintenanceRequiredFlag",
            "baseName": "MaintenanceRequiredFlag",
            "type": "boolean"
        },
        {
            "name": "rejectedMessage",
            "baseName": "RejectedMessage",
            "type": "AnyType"
        },
        {
            "name": "timeStamp",
            "baseName": "TimeStamp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return EventNotification.attributeTypeMap;
    }
}

