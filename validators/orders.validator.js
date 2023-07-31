const { check, validationResult } = require('express-validator');

const createOrder = [
    check('totalAmount').exists().withMessage('totalAmount is required!'),
        check('totalAmount.amount').notEmpty().withMessage('Amount is required!')
                .isFloat({ min: 0 }).withMessage('Invalid amount value!'),
        check('totalAmount.currency').notEmpty().withMessage('Currency is required!')
                .isLength({ min: 3, max: 3}).withMessage('Invalid currency value!')
                .isIn(['eur', 'EUR']).withMessage('Currency value must be one of [EUR, eur]'),
    check('consumer').exists().withMessage('Consumer is required!'),
        check('consumer.phoneNumber').optional()
            .isInt().withMessage('Phone number must contains only number!')
            .isLength({ min: 10, max: 11}).withMessage('Invalid phone number!'),
        check('consumer.givenNames').notEmpty().withMessage('Given name is required!'),
        check('consumer.surname').notEmpty().withMessage('Sur name is required!'),
        check('consumer.email').optional()
            .isEmail().withMessage('Invalid email value!'),
    check('shipping').exists().withMessage('Shipping is required!'),
        check('shipping.phoneNumber').optional()
            .isInt().withMessage('Customer phone number must contains only number!')
            .isLength({ min: 10, max: 11}).withMessage('Invalid phone number!'),
        check('shipping.countryCode').notEmpty().withMessage('Country code is required!')
            .isLength({min : 2, max: 2}).withMessage('Country code must contains 2 charaters!'),
        check('shipping.name').notEmpty().withMessage('Name is is required!'),
        check('shipping.postcode').notEmpty().withMessage('Post code is required!')
            .isInt().withMessage('Invalid post code value!'),
        check('shipping.suburb').notEmpty().withMessage('Suburd is required!'),
        check('shipping.line1').notEmpty().withMessage('line1 is required!'),
    check('merchant').exists().withMessage('Merchant is required!'),
        check('merchant.redirectCancelUrl').notEmpty().withMessage('Redirect cancel url is required!')
            .isURL().withMessage('Invalid cancel url value!'),
        check('merchant.redirectConfirmUrl').notEmpty().withMessage('Redirect confirm url is required!')
            .isURL().withMessage('Invalid confirm url value!'),
    check('items').exists().withMessage('Items are required!')
        .isArray().withMessage('Invalid items format values!'),
        check('items.*.quantity').notEmpty().withMessage('Quatity is required!')
            .isInt({min: 1}).withMessage('Invalid quatity value!'),
            check('items.*.price').exists().withMessage('Price is required!'),
                check('item.*.price.amount').notEmpty().withMessage('Amount of price is required!')
                    .isFloat({min: 1}).withMessage('Invalid amouut of price value!'),
                check('items.*.price.currency').notEmpty().withMessage('Currency of price is required!')
                    .isIn(['EUR', 'eur']).withMessage('Currency of price must contains [EUR, eur]'),
        check('items.*.name').notEmpty().withMessage('Name of item is required!'),
        check('items.*.category').notEmpty().withMessage('Category of item is required!'),
        check('items.*.sku').notEmpty().withMessage('Sku of item is required!'),
        check('items.*.subcategory').optional()
            .isArray().withMessage('Subcategory of item must be array!'),
    (req, res, next) => {
        const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return res.status(422).send({
                    status: false,
                    errors: errors.array()
                });
            }
            
            next();
    }
]

const ordersValidator = {
    createOrder
};

module.exports = ordersValidator;