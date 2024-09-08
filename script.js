const productList = document.querySelector('.product-list');
const calculateBtn = document.getElementById('calculate-btn');
const totalRewardElement = document.getElementById('total-reward');
const userRewardElement = document.getElementById('user-reward');

calculateBtn.addEventListener('click', () => {
  let totalReward = 0;

  productList.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
    totalReward += parseFloat(checkbox.dataset.reward);
  });

  totalRewardElement.textContent = totalReward.toFixed(2);
  userRewardElement.textContent = (totalReward / 2).toFixed(2);
});