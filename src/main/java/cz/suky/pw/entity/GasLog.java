package cz.suky.pw.entity;

import javax.persistence.Entity;
import java.math.BigDecimal;

/**
 * Created by none_ on 04/12/16.
 */
@Entity
public class GasLog extends AuditedEntity {
    private BigDecimal amount;
    private BigDecimal price;
    private long totalDistance;

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public long getTotalDistance() {
        return totalDistance;
    }

    public void setTotalDistance(long totalDistance) {
        this.totalDistance = totalDistance;
    }

    @Override
    public String toString() {
        return "GasLog{" +
                "amount=" + amount +
                ", price=" + price +
                ", totalDistance=" + totalDistance +
                '}';
    }
}
