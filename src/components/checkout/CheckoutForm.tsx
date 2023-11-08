import circle from '../../assets/images/blackCircle.svg';
import emptyCircle from '../../assets/images/emptyCircle.svg';

const CheckoutForm = () => {
    return (
        <section className="mt-[63px] mb-[123px]">
            <div className="max-w-[1242px] mx-auto flex">
                <div className="w-6/12">
                    <h1 className="font-semibold text-[#000000] text-4xl mb-9 leading-10">Billing details</h1>
                    <form>
                        <div className="flex gap-8 mb-9">
                            <div className="w-6/12">
                                <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="firstName">First Name</label>
                                <input className="border-2 border-[#9F9F9F] rounded-[10px] px-[1rem] w-full h-[75px]" type="text" id="firstName" />
                            </div>
                            <div className="w-6/12">
                                <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="lastName">Last Name</label>
                                <input type="text" className="border-2 border-[#9F9F9F] w-full px-[1rem] rounded-[10px] h-[75px]" id="lastName" />
                            </div>
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="companyName">Company Name (Optional)</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="companyName" />
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="countryRegion">Country / Region</label>
                            <select name="country-region" id="countryRegion" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]">
                                <option value="Example1" disabled selected className="text-[#9F9F9F] text-[1rem] font-normal">Sri Lanka</option>
                                <option value="Example2">Example 2</option>
                                <option value="Example3">Example 3</option>
                            </select>
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="streetAddress">Street address</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="streetAddress" />
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="townCity">Town / City</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="townCity" />
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="Province">Province</label>
                            <select name="Province" id="Province" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]">
                                <option value="Example1" disabled selected>Western Province</option>
                                <option value="Example2">Example 2</option>
                                <option value="Example3">Example 3</option>
                            </select>
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="ZIP-code">ZIP code</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="ZIP-code" />
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="Phone">Phone</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="Phone" />
                        </div>

                        <div className="mb-9">
                            <label className="font-medium text-[#000000] text-[1rem] leading-6 mb-[22px] block" htmlFor="emailAddress">Email address</label>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" id="emailAddress" />
                        </div>

                        <div>
                            <input type="text" className="border-2 border-[#9F9F9F] px-4 w-full rounded-[10px] h-[75px]" placeholder="Additional information" />
                        </div>
                    </form>
                </div>
                <div className="w-6/12 p-20">
                    <div className="flex items-center justify-between mb-[14px]">
                        <span className="text-[#000000] font-medium text-2xl leading-9">Product</span>
                        <span className="text-[#000000] font-medium text-2xl leading-9">Subtotal</span>
                    </div>
                    <div className="flex justify-between mb-[22px]">
                        <div className="flex gap-3 items-center">
                            <span className="text-[#9F9F9F] font-normal text-[1rem] leading-6">Asgaard sofa</span><span className="text-[#000000] font-medium text-xs">X</span> <span className="text-[#000000] font-medium text-xs">1</span>
                        </div>
                        <span className="text-[#000000] font-light text-[1rem]">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between mb-4">
                        <span className="font-normal text-[1rem]">Subtotal</span>
                        <span className="text-[#000000] font-light text-[1rem]">Rs. 250,000.00</span>
                    </div>
                    <div className="flex justify-between pb-[33px] border-b-2 border-[#D9D9D9]">
                        <span className="font-normal text-[1rem]">Total</span>
                        <span className="text-[#B88E2F] font-bold text-2xl">Rs. 250,000.00</span>
                    </div>
                    <div className="mt-[22px]">
                        <div className='flex items-center gap-4'>
                            <img src={circle} alt="" />
                            <span className="font-normal text-[1rem] text-black">Direct Bank Transfer</span>
                        </div>
                        <p className='text-[#9F9F9F] font-light text-[1rem] mt-3 mb-6'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        <div className='mb-[22px]'>
                            <span className='flex items-center gap-4'>
                                <img src={emptyCircle} alt="" /> <span className='text-[#9F9F9F] font-medium text-[1rem]'>Direct Bank Transfer</span>
                            </span>
                            <span className='flex items-center gap-4'>
                                <img src={emptyCircle} alt="" /> <span className='text-[#9F9F9F] font-medium text-[1rem]'>Cash On Delivery</span>
                            </span>
                        </div>
                        <p className='font-light'>
                            Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='text-black font-semibold'>privacy policy.</span>
                        </p>
                    </div>
                    <button className='text-black font-normal text-xl mt-12 border-2 border-black rounded-[15px] py-[17px] w-[318px] mx-auto block'>Place order</button>
                </div>
            </div>
        </section>
    )
}

export default CheckoutForm;