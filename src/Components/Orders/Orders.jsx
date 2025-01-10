// import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import Sidebar from '../Sidebar/Sidebar';
// import TableList from '../TableList/TableList';
// import './orders.scss';

// function Orders() {
//     return (
//         <div className="orders">
//             <div className="home_sidebar">
//                 <Sidebar />
//             </div>

//             <div className="orders_main">
//                 <Navbar />
//                 <TableList />
//                 <div className="order_button">
//                     <button type="button">Ask AI</button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;
import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import TableList from '../TableList/TableList';
import { run } from './geminiApi';
import './orders.scss';

// function Orders() {
//     const [response, setResponse] = useState('');
//     const [queryType, setQueryType] = useState('orderId');
//     const [queryValue, setQueryValue] = useState('');
//     const [loading, setLoading] = useState(false);

//     // Sample order data
//     const orderData = [
//         {
//             id: 23423343,
//             product: 'Programing Book 1',
//             customer: 'Devid John',
//             date: '3 October, 2022',
//             ammount: 45,
//             method: 'Online Payment',
//             status: 'Approved',
//         },
//         {
//             id: 235343343,
//             product: 'Programing Book 2',
//             customer: 'Julia Ani',
//             date: '23 April, 2022',
//             ammount: 55,
//             method: 'Cash On Delivery',
//             status: 'Pending',
//         },
//         // ... add other orders here
//     ];

//     const handleAskAI = async () => {
//         setLoading(true);
//         try {
//             let relevantOrders = [];
//             let prompt = '';

//             switch (queryType) {
//                 case 'orderId':
//                     relevantOrders = orderData.filter(order => 
//                         order.id.toString() === queryValue
//                     );
//                     break;
//                 case 'customer':
//                     relevantOrders = orderData.filter(order => 
//                         order.customer.toLowerCase().includes(queryValue.toLowerCase())
//                     );
//                     break;
//                 case 'status':
//                     relevantOrders = orderData.filter(order => 
//                         order.status.toLowerCase() === queryValue.toLowerCase()
//                     );
//                     break;
//                 case 'paymentMethod':
//                     relevantOrders = orderData.filter(order => 
//                         order.method.toLowerCase().includes(queryValue.toLowerCase())
//                     );
//                     break;
//                 default:
//                     break;
//             }

//             if (relevantOrders.length === 0) {
//                 setResponse('No orders found matching your query.');
//                 setLoading(false);
//                 return;
//             }

//             prompt = `
//                 Analyze the following orders:
//                 ${relevantOrders.map(order => `
//                     Order ID: ${order.id}
//                     Product: ${order.product}
//                     Customer: ${order.customer}
//                     Date: ${order.date}
//                     Amount: $${order.ammount}
//                     Payment Method: ${order.method}
//                     Status: ${order.status}
//                 `).join('\n\n')}

//                 Please provide insights about these orders based on the search for ${queryType}: "${queryValue}".
//                 Include:
//                 1. Number of orders found
//                 2. Summary of order details
//                 3. Any patterns or notable observations
//                 4. Payment and status distribution if multiple orders
//             `;

//             const geminiResponse = await run(prompt);
//             setResponse(geminiResponse);
//         } catch (error) {
//             console.error('Error fetching Gemini response:', error);
//             setResponse('Error occurred while fetching AI insights.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="orders">
//             <div className="home_sidebar">
//                 <Sidebar />
//             </div>
//             <div className="orders_main">
//                 <Navbar />
//                 <TableList />
//                 <div className="order_ai_section">
//                     <div className="order_input">
//                         <select 
//                             value={queryType}
//                             onChange={(e) => setQueryType(e.target.value)}
//                             className="query_type_select"
//                         >
//                             <option value="orderId">Order ID</option>
//                             <option value="customer">Customer Name</option>
//                             <option value="status">Status</option>
//                             <option value="paymentMethod">Payment Method</option>
//                         </select>
//                         <input
//                             type="text"
//                             placeholder={`Enter ${queryType.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
//                             value={queryValue}
//                             onChange={(e) => setQueryValue(e.target.value)}
//                             className="query_input"
//                         />
//                         <button 
//                             type="button"
//                             onClick={handleAskAI}
//                             disabled={loading}
//                             className="ask_ai_button"
//                         >
//                             {loading ? 'Loading...' : 'Ask AI'}
//                         </button>
//                     </div>
//                     {response && (
//                         <div className="ai_response">
//                             <h3>AI Insights:</h3>
//                             <p>{response}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }
function Orders() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // Sample order data
    const orderData = [
        {
            _id: 23423343,
            product: 'Programing Book 1',
        
            customer: 'Devid John',
            date: '3 October, 2022',
            ammount: 45,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 235343343,
            product: 'Programing Book 2',
           
            customer: 'Julia Ani',
            date: '23 April, 2022',
            ammount: 55,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
        {
            _id: 234239873,
            product: 'Programing Book 3',
          
            customer: 'John Smith',
            date: '10 October, 2022',
            ammount: 25,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 23423143,
            product: 'Programing Book 4',
            
            customer: 'Devid John',
            date: '3 March, 2022',
            ammount: 40,
            method: 'Cash On Delivery',
            status: 'Approved',
        },
        {
            _id: 123423343,
            product: 'Programing Book 5',
          
            customer: 'Humlar',
            date: '20 November, 2022',
            ammount: 45,
            method: 'Online Payment',
            status: 'Approved',
        },
        {
            _id: 2333343,
            product: 'Programing Book 6',
            
            customer: 'Devid John',
            date: '12 June, 2022',
            ammount: 28,
            method: 'Cash On Delivery',
            status: 'Pending',
        },
    ];

    const handleAskAI = async () => {
        setLoading(true);
        try {
            const analysisPrompt = `
                Given this query about order data: "${query}"
                What type of information is being requested? The data has these fields:
                - Order ID
                - Product name
                - Customer name
                - Date
                - Amount
                - Payment method
                - Status

                Return ONLY ONE of these exact terms (nothing else):
                ORDERID, CUSTOMER, PAYMENT, STATUS, GENERAL
            `;

            const queryType = await run(analysisPrompt);
            const cleanQueryType = queryType.trim().toUpperCase();

            
            const orderDataString = JSON.stringify(orderData);
            let dataPrompt = `
                Here is the order data:
                ${orderDataString}

                User query: "${query}"
                
                Based on this query, please provide relevant insights about the orders.
                Consider:
                1. If it's about a specific order ID, focus on that order's details
                2. If it's about payment methods, analyze payment patterns
                3. If it's about status, focus on order statuses
                4. If it's about customers, analyze customer information
                5. For general queries, provide an overview

                Please format your response in a clear, concise manner focusing on the specific information requested.
                
                Query type detected: ${cleanQueryType}
            `;

            const geminiResponse = await run(dataPrompt);
            setResponse(geminiResponse);
            console.log(geminiResponse)
        } catch (error) {
            console.error('Error fetching Gemini response:', error);
            setResponse('Error occurred while fetching AI insights.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="orders">
            <div className="home_sidebar">
                <Sidebar />
            </div>
            <div className="orders_main">
                <Navbar />
                <TableList />
                <div className="order_ai_section">
                    <div className="order_input">
                        <input
                            type="text"
                            placeholder="Ask anything about orders"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="query_input"
                        />
                        <button 
                            type="button"
                            onClick={handleAskAI}
                            disabled={loading}
                            className="ask_ai_button"
                        >
                            {loading ? 'Loading...' : 'Ask AI'}
                        </button>
                    </div>
                    {response && (
                        <div className="ai_response">
                            <h3>AI Insights:</h3>
                            <p>{response}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default Orders;
