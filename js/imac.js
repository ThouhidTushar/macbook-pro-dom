// memory 8 GB

document.getElementById('memory8gb').addEventListener('click', function () {
	var extraMemory = document.getElementById('extra-memory')
	extraMemory.innerText = '0';
	var memory8gbAmount = extraMemory.innerText;
	var total8gbAmount = parseInt(memory8gbAmount)
	extraMemory.innerText = total8gbAmount;
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + total8gbAmount;
	endTotal.innerText = totalAmountNumber;
})
// memory 16 GB

document.getElementById('memory16gb').addEventListener('click', function () {
	var extraMemory = document.getElementById('extra-memory')
	extraMemory.innerText = '180';
	var memory16gbAmount = extraMemory.innerText;
	var total16gbAmount = parseInt(memory16gbAmount)
	extraMemory.innerText = total16gbAmount;
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + total16gbAmount;
	endTotal.innerText = totalAmountNumber;
})

// storage 256 GB

document.getElementById('Storage256gb').addEventListener('click', function () {
	var extraStorage = document.getElementById('extra-storage')
	extraStorage.innerText = '0';
	var storage256gbAmount = extraStorage.innerText;
	var total256gbAmount = parseInt(storage256gbAmount)
	extraStorage.innerText = total256gbAmount;
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + total256gbAmount;
	endTotal.innerText = totalAmountNumber;
})

// storage 512 GB

document.getElementById('Storage512gb').addEventListener('click', function () {
	var extraStorage = document.getElementById('extra-storage')
	extraStorage.innerText = '100';
	var storage512gbAmount = extraStorage.innerText;
	var total512gbAmount = parseInt(storage512gbAmount)
	extraStorage.innerText = total512gbAmount;
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + total512gbAmount;
	endTotal.innerText = totalAmountNumber;
})

// storage 1 TB 
document.getElementById('Storage1tb').addEventListener('click', function () {
	var extraStorage = document.getElementById('extra-storage')
	extraStorage.innerText = '180';
	var storage1tbAmount = extraStorage.innerText;
	var total1tbAmount = parseInt(storage1tbAmount)
	extraStorage.innerText = total1tbAmount;
	console.log(total1tbAmount);
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + total1tbAmount;
	endTotal.innerText = totalAmountNumber;
	console.log(totalAmountNumber);
})

// delivery charge Free

document.getElementById('free-delivery').addEventListener('click', function () {
	var deliveryCharge = document.getElementById('delivery-charge')
	deliveryCharge.innerText = '0';
	var deliveryFree = deliveryCharge.innerText;
	var deliveryFreeAmount = parseInt(deliveryFree)
	deliveryCharge.innerText = deliveryFreeAmount;
	console.log(deliveryFreeAmount);
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + deliveryFreeAmount;
	endTotal.innerText = totalAmountNumber;
	console.log(totalAmountNumber);
})

// delivery charge Free

document.getElementById('charge-delivery').addEventListener('click', function () {
	var deliveryCharge = document.getElementById('delivery-charge')
	deliveryCharge.innerText = '20';
	var deliveryCharge20 = deliveryCharge.innerText;
	var totaldeliveryChargeAmount = parseInt(deliveryCharge20)
	deliveryCharge.innerText = totaldeliveryChargeAmount;
	console.log(totaldeliveryChargeAmount);
	var endTotal = document.getElementById('end-total');
	var endTotalAmount = endTotal.innerText;
	var endTotalNumber = parseInt(endTotalAmount);
	var totalAmountNumber = endTotalNumber + totaldeliveryChargeAmount;
	endTotal.innerText = totalAmountNumber;
	console.log(totalAmountNumber);
})